// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  reviews;
  emailSubscribers;
  constructor() {
    this.reviews = /* @__PURE__ */ new Map();
    this.emailSubscribers = /* @__PURE__ */ new Map();
    this.initializeSampleReviews();
  }
  initializeSampleReviews() {
    const sampleReviews = [
      {
        id: randomUUID(),
        name: "Sarah M.",
        email: "sarah.m@example.com",
        rating: 5,
        comment: "I've read dozens of IBS books. This is the first one that actually made sense of my 15-year nightmare. Finally, someone who gets it.",
        createdAt: /* @__PURE__ */ new Date("2024-12-15")
      },
      {
        id: randomUUID(),
        name: "Dr. Michael K.",
        email: "m.kent@medicalpractice.com",
        rating: 5,
        comment: "The research is solid, the explanations are clear, and for the first time in years, I have hope. This book changed my perspective completely.",
        createdAt: /* @__PURE__ */ new Date("2024-12-20")
      },
      {
        id: randomUUID(),
        name: "Anonymous",
        email: "anonymous@privacy.com",
        rating: 5,
        comment: "Jane's story made me cry because it's MY story. But knowing I'm not alone and there's a path forward... that's everything.",
        createdAt: /* @__PURE__ */ new Date("2024-12-22")
      },
      {
        id: randomUUID(),
        name: "Emma R.",
        email: "emma.recovery@gmail.com",
        rating: 5,
        comment: "After 8 years of being told 'it's just stress,' this book finally gave me answers. I'm not cured yet, but I understand my body now.",
        createdAt: /* @__PURE__ */ new Date("2024-12-18")
      },
      {
        id: randomUUID(),
        name: "David C.",
        email: "david.chronic@outlook.com",
        rating: 4,
        comment: "The scientific approach really spoke to me. No false promises, just honest research and practical insights. Worth every penny.",
        createdAt: /* @__PURE__ */ new Date("2024-12-21")
      },
      {
        id: randomUUID(),
        name: "Maria S.",
        email: "maria.silent@proton.me",
        rating: 5,
        comment: "I've suffered in silence for so long. Reading about Jane's journey made me feel less alone. This book is a lifeline.",
        createdAt: /* @__PURE__ */ new Date("2024-12-19")
      }
    ];
    sampleReviews.forEach((review) => {
      this.reviews.set(review.id, review);
    });
  }
  async getReviews() {
    return Array.from(this.reviews.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
  async createReview(insertReview) {
    const id = randomUUID();
    const review = {
      ...insertReview,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.reviews.set(id, review);
    return review;
  }
  async subscribeEmail(insertSubscriber) {
    const id = randomUUID();
    const subscriber = {
      id,
      email: insertSubscriber.email,
      name: insertSubscriber.name || null,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.emailSubscribers.set(id, subscriber);
    return subscriber;
  }
  async getEmailSubscribers() {
    return Array.from(this.emailSubscribers.values());
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var reviews = pgTable("reviews", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  rating: integer("rating").notNull(),
  comment: text("comment").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var emailSubscribers = pgTable("email_subscribers", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  name: text("name"),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var insertReviewSchema = createInsertSchema(reviews).pick({
  name: true,
  email: true,
  rating: true,
  comment: true
});
var insertEmailSubscriberSchema = createInsertSchema(emailSubscribers).pick({
  email: true,
  name: true
});

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/reviews", async (req, res) => {
    try {
      const reviews2 = await storage.getReviews();
      res.json(reviews2);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch reviews" });
    }
  });
  app2.post("/api/reviews", async (req, res) => {
    try {
      const validatedData = insertReviewSchema.parse(req.body);
      const review = await storage.createReview(validatedData);
      res.status(201).json(review);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Failed to create review" });
      }
    }
  });
  app2.post("/api/subscribe", async (req, res) => {
    try {
      const validatedData = insertEmailSubscriberSchema.parse(req.body);
      const subscriber = await storage.subscribeEmail(validatedData);
      res.status(201).json(subscriber);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Failed to subscribe email" });
      }
    }
  });
  app2.get("/api/subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getEmailSubscribers();
      res.json(subscribers);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch subscribers" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
