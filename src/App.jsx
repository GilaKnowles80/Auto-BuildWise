import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AgentAssist from "./AgentAssist/AgentAssist"; // ✅ correct path

function App () {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.from("projects").select("*");
        if (error) {
          console.error("Error fetching projects:", error);
          setError(error.message);
        } else {
          setProjects(data);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        setError("Unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <Sidebar>
        <AgentAssist /> {/* included in Sidebar */}
      </Sidebar>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-6 overflow-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Auto-BuildWise Projects
          </h1>

          {loading && <p className="text-center text-gray-500">Loading projects...</p>}
          {error && <p className="text-center text-red-500 font-medium">Error: {error}</p>}
          {!loading && !error && projects.length === 0 && (
            <p className="text-center text-gray-600">No projects found.</p>
          )}
          {!loading && !error && projects.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                  <p className="text-gray-700 mb-2">{project.description || "No description"}</p>
                  <p className="text-gray-800 font-medium">
                    Status: {project.status || "N/A"}
                  </p>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;