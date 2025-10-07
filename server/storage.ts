import { 
  type User, 
  type InsertUser, 
  type Booking, 
  type InsertBooking,
  type Contact,
  type InsertContact,
  type Blog,
  type InsertBlog,
  users,
  bookings,
  contacts,
  blogs
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, sql } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBooking(id: string): Promise<Booking | undefined>;
  getAllBookings(): Promise<Booking[]>;
  updateBookingOrderId(id: string, orderId: string): Promise<void>;
  updateBookingPayment(id: string, paymentId: string, status: string): Promise<void>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
  
  createBlog(blog: InsertBlog): Promise<Blog>;
  getBlog(id: string): Promise<Blog | undefined>;
  getBlogBySlug(slug: string): Promise<Blog | undefined>;
  getAllBlogs(): Promise<Blog[]>;
  updateBlog(id: string, blog: Partial<InsertBlog>): Promise<Blog | undefined>;
  deleteBlog(id: string): Promise<void>;
  toggleBlogFeatured(id: string): Promise<Blog | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createBooking(booking: InsertBooking): Promise<Booking> {
    const result = await db.insert(bookings).values(booking).returning();
    return result[0];
  }

  async getBooking(id: string): Promise<Booking | undefined> {
    const result = await db.select().from(bookings).where(eq(bookings.id, id)).limit(1);
    return result[0];
  }

  async getAllBookings(): Promise<Booking[]> {
    return db.select().from(bookings).orderBy(desc(bookings.createdAt));
  }

  async updateBookingOrderId(id: string, orderId: string): Promise<void> {
    await db.update(bookings)
      .set({ razorpayOrderId: orderId })
      .where(eq(bookings.id, id));
  }

  async updateBookingPayment(id: string, paymentId: string, status: string): Promise<void> {
    await db.update(bookings)
      .set({ razorpayPaymentId: paymentId, paymentStatus: status })
      .where(eq(bookings.id, id));
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const result = await db.insert(contacts).values(contact).returning();
    return result[0];
  }

  async getAllContacts(): Promise<Contact[]> {
    return db.select().from(contacts).orderBy(desc(contacts.createdAt));
  }

  async createBlog(blog: InsertBlog): Promise<Blog> {
    const result = await db.insert(blogs).values(blog).returning();
    return result[0];
  }

  async getBlog(id: string): Promise<Blog | undefined> {
    const result = await db.select().from(blogs).where(eq(blogs.id, id)).limit(1);
    return result[0];
  }

  async getBlogBySlug(slug: string): Promise<Blog | undefined> {
    const result = await db.select().from(blogs).where(eq(blogs.slug, slug)).limit(1);
    return result[0];
  }

  async getAllBlogs(): Promise<Blog[]> {
    return db.select().from(blogs).orderBy(desc(blogs.createdAt));
  }

  async updateBlog(id: string, blog: Partial<InsertBlog>): Promise<Blog | undefined> {
    const result = await db.update(blogs)
      .set({ ...blog, updatedAt: sql`now()` })
      .where(eq(blogs.id, id))
      .returning();
    return result[0];
  }

  async deleteBlog(id: string): Promise<void> {
    await db.delete(blogs).where(eq(blogs.id, id));
  }

  async toggleBlogFeatured(id: string): Promise<Blog | undefined> {
    const blog = await this.getBlog(id);
    if (!blog) return undefined;
    
    const result = await db.update(blogs)
      .set({ featured: !blog.featured, updatedAt: sql`now()` })
      .where(eq(blogs.id, id))
      .returning();
    return result[0];
  }
}

export const storage = new DatabaseStorage();
