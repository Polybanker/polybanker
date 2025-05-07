import { Hono } from "hono";

// Define the Bindings interface
interface Bindings {
  // Add any environment variables you need here
}

const app = new Hono<{ Bindings: Bindings }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

export default app;
