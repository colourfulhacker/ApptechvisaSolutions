import { type User, type InsertUser, type Contact, type InsertContact, type DemoRequest, type InsertDemoRequest, type Career, type InsertCareer } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  createDemoRequest(demoRequest: InsertDemoRequest): Promise<DemoRequest>;
  getDemoRequests(): Promise<DemoRequest[]>;
  
  createCareerApplication(career: InsertCareer): Promise<Career>;
  getCareerApplications(): Promise<Career[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contacts: Map<string, Contact>;
  private demoRequests: Map<string, DemoRequest>;
  private careers: Map<string, Career>;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.demoRequests = new Map();
    this.careers = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact,
      phone: insertContact.phone || null,
      company: insertContact.company || null,
      budget: insertContact.budget || null,
      services: insertContact.services || null,
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async createDemoRequest(insertDemoRequest: InsertDemoRequest): Promise<DemoRequest> {
    const id = randomUUID();
    const demoRequest: DemoRequest = { 
      ...insertDemoRequest,
      industry: insertDemoRequest.industry || null,
      projectDescription: insertDemoRequest.projectDescription || null,
      id, 
      createdAt: new Date() 
    };
    this.demoRequests.set(id, demoRequest);
    return demoRequest;
  }

  async getDemoRequests(): Promise<DemoRequest[]> {
    return Array.from(this.demoRequests.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async createCareerApplication(insertCareer: InsertCareer): Promise<Career> {
    const id = randomUUID();
    const career: Career = { 
      ...insertCareer,
      phone: insertCareer.phone || null,
      experience: insertCareer.experience || null,
      portfolio: insertCareer.portfolio || null,
      coverLetter: insertCareer.coverLetter || null,
      id, 
      createdAt: new Date() 
    };
    this.careers.set(id, career);
    return career;
  }

  async getCareerApplications(): Promise<Career[]> {
    return Array.from(this.careers.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
}

export const storage = new MemStorage();
