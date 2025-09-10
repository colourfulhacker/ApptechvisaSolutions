import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertDemoRequestSchema, insertCareerSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, id: contact.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid contact data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to save contact" });
      }
    }
  });

  // Demo request submission
  app.post("/api/demo-request", async (req, res) => {
    try {
      const demoData = insertDemoRequestSchema.parse(req.body);
      const demoRequest = await storage.createDemoRequest(demoData);
      res.json({ success: true, id: demoRequest.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid demo request data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to save demo request" });
      }
    }
  });

  // Career application submission
  app.post("/api/career-application", async (req, res) => {
    try {
      const careerData = insertCareerSchema.parse(req.body);
      const career = await storage.createCareerApplication(careerData);
      res.json({ success: true, id: career.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid career application data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to save career application" });
      }
    }
  });

  // Get all contacts (for admin use)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  // Get all demo requests (for admin use)
  app.get("/api/demo-requests", async (req, res) => {
    try {
      const demoRequests = await storage.getDemoRequests();
      res.json(demoRequests);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch demo requests" });
    }
  });

  // Get all career applications (for admin use)
  app.get("/api/career-applications", async (req, res) => {
    try {
      const careers = await storage.getCareerApplications();
      res.json(careers);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch career applications" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
