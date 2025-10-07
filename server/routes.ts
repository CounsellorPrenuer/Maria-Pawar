import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import passport from "passport";
import { storage } from "./storage";
import { insertBookingSchema, insertContactSchema, insertBlogSchema } from "@shared/schema";

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: "Unauthorized" });
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth routes
  app.post("/api/auth/login", (req, res, next) => {
    passport.authenticate("local", (err: any, user: any, info: any) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (!user) {
        return res.status(401).json({ error: info?.message || "Invalid credentials" });
      }
      req.login(user, (err) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        return res.json({ success: true, user: { username: user.username } });
      });
    })(req, res, next);
  });

  app.post("/api/auth/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ success: true });
    });
  });

  app.get("/api/auth/check", (req, res) => {
    if (req.isAuthenticated()) {
      res.json({ authenticated: true, user: req.user });
    } else {
      res.json({ authenticated: false });
    }
  });

  // Bookings API
  app.post("/api/bookings", async (req, res) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(validatedData);
      res.json(booking);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getAllBookings();
      res.json(bookings);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/bookings/:id", async (req, res) => {
    try {
      const booking = await storage.getBooking(req.params.id);
      if (!booking) {
        return res.status(404).json({ error: "Booking not found" });
      }
      res.json(booking);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/bookings/:id/payment", async (req, res) => {
    try {
      const { paymentId, status } = req.body;
      await storage.updateBookingPayment(req.params.id, paymentId, status);
      res.json({ success: true });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Contacts API
  app.post("/api/contacts", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json(contact);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Blogs API (public read, admin write)
  app.get("/api/blogs", async (req, res) => {
    try {
      const blogs = await storage.getAllBlogs();
      res.json(blogs);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/blogs/:slug", async (req, res) => {
    try {
      const blog = await storage.getBlogBySlug(req.params.slug);
      if (!blog) {
        return res.status(404).json({ error: "Blog not found" });
      }
      res.json(blog);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/admin/blogs", requireAuth, async (req, res) => {
    try {
      const validatedData = insertBlogSchema.parse(req.body);
      const blog = await storage.createBlog(validatedData);
      res.json(blog);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.put("/api/admin/blogs/:id", requireAuth, async (req, res) => {
    try {
      const validatedData = insertBlogSchema.partial().parse(req.body);
      const blog = await storage.updateBlog(req.params.id, validatedData);
      if (!blog) {
        return res.status(404).json({ error: "Blog not found" });
      }
      res.json(blog);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.delete("/api/admin/blogs/:id", requireAuth, async (req, res) => {
    try {
      await storage.deleteBlog(req.params.id);
      res.json({ success: true });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.patch("/api/admin/blogs/:id/feature", requireAuth, async (req, res) => {
    try {
      const blog = await storage.toggleBlogFeatured(req.params.id);
      if (!blog) {
        return res.status(404).json({ error: "Blog not found" });
      }
      res.json(blog);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Admin Dashboard Stats (protected)
  app.get("/api/admin/stats", requireAuth, async (req, res) => {
    try {
      const [bookings, contacts] = await Promise.all([
        storage.getAllBookings(),
        storage.getAllContacts(),
      ]);

      const stats = {
        totalBookings: bookings.length,
        totalContacts: contacts.length,
        totalLeads: bookings.length + contacts.length,
        paidBookings: bookings.filter(b => b.paymentStatus === "paid").length,
        pendingBookings: bookings.filter(b => b.paymentStatus === "pending").length,
        totalRevenue: bookings
          .filter(b => b.paymentStatus === "paid")
          .reduce((sum, b) => sum + b.price, 0),
      };

      res.json(stats);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Razorpay Integration
  const Razorpay = (await import("razorpay")).default;
  const crypto = await import("crypto");

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  app.post("/api/razorpay/create-order", async (req, res) => {
    try {
      const { amount, bookingId } = req.body;

      if (!amount || !bookingId) {
        return res.status(400).json({ success: false, message: "Amount and bookingId are required" });
      }

      const options = {
        amount: amount * 100,
        currency: "INR",
        receipt: `rcpt_${bookingId}`.substring(0, 40),
      };

      const order = await razorpay.orders.create(options);

      await storage.updateBookingOrderId(bookingId, order.id);
      
      res.json({
        success: true,
        order: order,
        key_id: process.env.RAZORPAY_KEY_ID,
      });
    } catch (error: any) {
      console.error("Error creating Razorpay order:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  });

  app.post("/api/razorpay/verify-payment", async (req, res) => {
    try {
      const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId } = req.body;

      if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !bookingId) {
        return res.status(400).json({
          success: false,
          message: "Missing required payment verification parameters",
        });
      }

      const sign = razorpay_order_id + "|" + razorpay_payment_id;
      const expectedSign = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
        .update(sign)
        .digest("hex");

      if (razorpay_signature !== expectedSign) {
        console.error("Payment signature verification failed for booking:", bookingId);
        return res.status(400).json({
          success: false,
          message: "Payment signature verification failed. Invalid signature.",
        });
      }

      await storage.updateBookingPayment(bookingId, razorpay_payment_id, "paid");
      
      res.json({
        success: true,
        message: "Payment verified successfully",
        paymentId: razorpay_payment_id,
      });
    } catch (error: any) {
      console.error("Error verifying payment:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
