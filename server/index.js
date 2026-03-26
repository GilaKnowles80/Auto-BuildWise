import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let projects = [];

app.get('/api/projects', (req, res) => res.json(projects));

app.post('/api/projects', (req, res) => {
  const project = req.body;
  projects.push(project);
  res.json(project);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));