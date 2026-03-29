import express from "express";

const router = express.Router();

// Dummy data
const payments = [
  { id: 1, amount: 100, user: "Alice" },
  { id: 2, amount: 200, user: "Bob" },
];

// Replace getAllPayments import with this function
function getAllPayments(req, res) {
  res.json(payments);
}

// Route
router.get("/", getAllPayments);

export default router;