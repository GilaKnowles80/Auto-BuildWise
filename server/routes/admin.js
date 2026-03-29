import express from "express";
import { getAllUsers } from "../models/userModels.js"; // dummy model file

const router = express.Router();

// Routes for Admin

// GET all users
router.get("/users", getAllUsers);

// Example: GET admin dashboard info (dummy)
router.get("/dashboard", (req, res) => {
  res.json({
    totalUsers: 2,
    totalProjects: 3,
    totalPayments: 2,
  });
});

// Example: POST new admin action (dummy)
router.post("/action", (req, res) => {
  const { action } = req.body;
  res.json({ message: "Admin action '" + action + "' received." });
});

export default router;