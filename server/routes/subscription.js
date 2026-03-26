import express from "express";
const router = express.Router();

// GET subscription plans
router.get("/", (req, res) => {
  res.json([
    { plan: "monthly", price: 50 },
    { plan: "quarterly", price: 140 },
    { plan: "biannual", price: 270 },
    { plan: "annual", price: 500 },
  ]);
});

// POST subscribe
router.post("/subscribe", (req, res) => {
  const { userId, plan } = req.body;
  // TODO: connect with payment services
  res.json({ success: true, userId, plan });
});

export default router