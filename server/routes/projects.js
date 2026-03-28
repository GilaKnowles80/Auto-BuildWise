// server/routes/project.js
import express from "express";
import { getAllProjects } from "../models/ProjectModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await getAllProjects();
    res.json(projects);
  } catch (err) {
    console.error("Error fetching projects::, err");
    res.status(500).json({ error: err.message });
  }
});

export default router;