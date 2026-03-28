// server/routes/payment.js
import express from "express";
import { getAllPayments } from "../models/PaymentModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const payments = await getAllPayments();
    res.json(payments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;