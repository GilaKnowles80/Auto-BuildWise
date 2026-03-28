import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Sidebar from "./components/Sidebar.jsx";
import AdminCards from "./components/AdminCards.jsx";
import CadViewer from "./components/CadViewer.jsx";
import CostBreakdown from "./components/CostBreakdown.jsx";
import FloorPlan2D from "./components/FloorPlan2D.jsx";
import Footer from "./components/Footer.jsx";
import ModelViewer from "./components/ModelViewer.jsx";
import Navbar from "./components/Navbar.jsx";
import NotificationBell from "./components/NotificationBell.jsx";
import PertCpmChart from "./components/PertCpmChart.jsx";
import SummaryCard from "./components/SummaryCard.jsx";
import UserDashboard from "./components/UserDashboard.jsx";
import Visualizer from "./components/Visualizer.jsx";

// Pages
import AdminDashboard from "./pages/AdminDashboard.jsx";
import DrawingPerspective from "./pages/DrawingPerspective.jsx";
import EngineeringBOQ from "./pages/EngineeringBOQ.jsx";
import StructuralTPC from "./pages/StructuralTPC.jsx";
import Summary from "./pages/Summary.jsx";
import TotalEstimator from "./pages/TotalEstimator.jsx";

// AgentAssist
import AgentAssist from "./AgentAssist/AgentAssist.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="flex justify-between items-center p-4 border-b">
            <NotificationBell />
            <UserDashboard />
          <div> 
             <h2>3D ModelViewer</h2>
             <Visualizer modelUrl="/models/myModel.glb" />
             </div>

          {/* Routes */}
          <div className="flex-1 p-6 overflow-auto">
            <Routes>
              <Route
                path="/"
                element={
                  <AdminDashboard>
                    <AdminCards />
                    <SummaryCard />
                    <Visualizer />
                  </AdminDashboard>
                }
              />

              <Route
                path="/projects"
                element={
                  <>
                    <h2 className="text-xl font-bold mb-4">Projects</h2>
                    <AdminCards />
                  </>
                }
              />

              <Route
                path="/boq-tables"
                element={
                  <>
                    <h2 className="text-xl font-bold mb-4">BOQTables</h2>
                    <CostBreakdown />
                  </>
                }
              />

              <Route
                path="/payments"
                element={
                  <>
                    <h2 className="text-xl font-bold mb-4">Payments</h2>
                    {/* Replace Caviar with the correct component */}
                  </>
                }
              />

              <Route
                path="/schedules"
                element={
                  <>
                    <h2 className="text-xl font-bold mb-4">Schedules</h2>
                    <PertCpmChart />
                  </>
                }
              />

              <Route path="/summary" element={<Summary />} />

              <Route
                path="/structural-tpc"
                element={
                  <StructuralTPC>
                    <FloorPlan2D />
                    <CadViewer />
                  </StructuralTPC>
                }
              />

              <Route
                path="/engineering-boq"
                element={
                  <EngineeringBOQ>
                    <CostBreakdown />
                  </EngineeringBOQ>
                }
              />

              <Route
                path="/estimator"
                element={
                  <TotalEstimator>
                    <Visualizer />
                  </TotalEstimator>
                }
              />

              <Route
                path="/drawings"
                element={
                  <DrawingPerspective>
                    <CadViewer />
                  </DrawingPerspective>
                }
              />

              <Route path="/agent-assist" element={<AgentAssist />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;