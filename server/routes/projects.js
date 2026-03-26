const express = require('express');
const router = express.Router();
const Project = require('../models/ProjectModel');

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new project (optional for adding)
router.post('/', async (req, res) => {
  try {
    const { name, type, modelUrl } = req.body;
    const project = await Project.create({ name, type, modelUrl });
    res.status(201).json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;