import express from "express";
import { users } from "../models/userModel.js";
const router = express.Router();

router.get("/users", (req, res) => {
  res.json(users);
});

router.get("/stats", (req, res) => {
  const totalSubscribers = users.filter(u => u.subscriptionPlan).length;
  const totalSales = users.reduce((acc, u) => acc + (u.subscriptionPrice || 0), 0);
  const activeSubscriptions = users.filter(u => u.subscriptionPlan && new Date(u.subscriptionEnd) > new Date()).length;
  res.json({ totalSubscribers, totalSales, activeSubscriptions });
});

export default router;