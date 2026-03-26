import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';

// ES Module __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const modelsDir = path.join(__dirname, 'public', 'models');
const apiUrl = 'http://localhost:3001/api/projects';

async function seedProjects() {
  try {
    const files = fs.readdirSync(modelsDir).filter(file => file.endsWith('.glb'));

    for (const file of files) {
      const name = path.parse(file).name.split('_').join(' ');

      let type = 'Unknown';
      const lowerName = name.toLowerCase();
      if (lowerName.includes('residential')) type = 'Residential';
      else if (lowerName.includes('commercial')) type = 'Commercial';
      else if (lowerName.includes('bridge')) type = 'Bridge';

      const project = {
        name: name,
        type: type,
        modelUrl: `/models/${file}`
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project)
      });

      const data = await response.json();
      console.log(`Added: ${data.name} (${data.modelUrl})`);
    }

    console.log('✅ All .glb files have been seeded!');
  } catch (err) {
    console.error('Error seeding projects:', err);
  }
}

// Run the seeding function
seedProjects();