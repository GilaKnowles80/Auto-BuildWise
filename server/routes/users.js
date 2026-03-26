import express from "express";
const router = express.Router();

// GET users (dummy)
router.get("/", (req, res) => {
  res.json([{ id: 1, name: "Test User" }]);
});

export default router;