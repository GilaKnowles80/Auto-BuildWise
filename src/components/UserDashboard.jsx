import React, { useEffect, useState } from 'react';

function UserDashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/projects') // backend route
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map(p => (
          <div key={p.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-600">{p.type}</p>
            <a
              href={p.modelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-2 inline-block"
            >
              View 3D Model
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDashboard;