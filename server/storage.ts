import { type Review, type InsertReview, type EmailSubscriber, type InsertEmailSubscriber } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getReviews(): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;
  subscribeEmail(subscriber: InsertEmailSubscriber): Promise<EmailSubscriber>;
  getEmailSubscribers(): Promise<EmailSubscriber[]>;
}

export class MemStorage implements IStorage {
  private reviews: Map<string, Review>;
  private emailSubscribers: Map<string, EmailSubscriber>;

  constructor() {
    this.reviews = new Map();
    this.emailSubscribers = new Map();
    
    // Initialize with some sample reviews to demonstrate social proof
    this.initializeSampleReviews();
  }

  private initializeSampleReviews() {
    const sampleReviews: Review[] = [
      {
        id: randomUUID(),
        name: "Sarah M.",
        email: "sarah.m@example.com",
        rating: 5,
        comment: "I've read dozens of IBS books. This is the first one that actually made sense of my 15-year nightmare. Finally, someone who gets it.",
        createdAt: new Date("2024-12-15"),
      },
      {
        id: randomUUID(),
        name: "Dr. Michael K.",
        email: "m.kent@medicalpractice.com",
        rating: 5,
        comment: "The research is solid, the explanations are clear, and for the first time in years, I have hope. This book changed my perspective completely.",
        createdAt: new Date("2024-12-20"),
      },
      {
        id: randomUUID(),
        name: "Anonymous",
        email: "anonymous@privacy.com",
        rating: 5,
        comment: "Jane's story made me cry because it's MY story. But knowing I'm not alone and there's a path forward... that's everything.",
        createdAt: new Date("2024-12-22"),
      },
      {
        id: randomUUID(),
        name: "Emma R.",
        email: "emma.recovery@gmail.com",
        rating: 5,
        comment: "After 8 years of being told 'it's just stress,' this book finally gave me answers. I'm not cured yet, but I understand my body now.",
        createdAt: new Date("2024-12-18"),
      },
      {
        id: randomUUID(),
        name: "David C.",
        email: "david.chronic@outlook.com",
        rating: 4,
        comment: "The scientific approach really spoke to me. No false promises, just honest research and practical insights. Worth every penny.",
        createdAt: new Date("2024-12-21"),
      },
      {
        id: randomUUID(),
        name: "Maria S.",
        email: "maria.silent@proton.me",
        rating: 5,
        comment: "I've suffered in silence for so long. Reading about Jane's journey made me feel less alone. This book is a lifeline.",
        createdAt: new Date("2024-12-19"),
      },
    ];

    sampleReviews.forEach(review => {
      this.reviews.set(review.id, review);
    });
  }

  async getReviews(): Promise<Review[]> {
    return Array.from(this.reviews.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const id = randomUUID();
    const review: Review = {
      ...insertReview,
      id,
      createdAt: new Date(),
    };
    this.reviews.set(id, review);
    return review;
  }

  async subscribeEmail(insertSubscriber: InsertEmailSubscriber): Promise<EmailSubscriber> {
    const id = randomUUID();
    const subscriber: EmailSubscriber = {
      id,
      email: insertSubscriber.email,
      name: insertSubscriber.name || null,
      createdAt: new Date(),
    };
    this.emailSubscribers.set(id, subscriber);
    return subscriber;
  }

  async getEmailSubscribers(): Promise<EmailSubscriber[]> {
    return Array.from(this.emailSubscribers.values());
  }
}

export const storage = new MemStorage();
