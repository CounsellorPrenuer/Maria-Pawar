import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema, insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
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

  // Admin Dashboard Stats
  app.get("/api/admin/stats", async (req, res) => {
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
  const Razorpay = require("razorpay");
  const crypto = require("crypto");

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
        receipt: `receipt_${bookingId}`,
      };

      const order = await razorpay.orders.create(options);

      await storage.updateBookingPayment(bookingId, order.id, "pending");
      
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
