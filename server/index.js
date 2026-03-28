// server/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import projectRoutes from "./routes/project.js";
import paymentRoutes from "./routes/payment.js";
import adminRoutes from "./routes/admin.js";
import subscriptionRoutes from "./routes/subscription.js";
import userRoutes from "./routes/users.js";

import { createClient } from "@supabase/supabase-js";

dotenv.config();

// Supabase client
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Register routes
app.use("/api/projects", projectRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/subscription", subscriptionRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});