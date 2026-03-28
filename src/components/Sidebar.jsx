// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col p-6 space-y-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <Link to="/projects" className="hover:text-blue-400">Projects</Link>
      <Link to="/boq" className="hover:text-blue-400">BOQTables</Link>
      <Link to="/payments" className="hover:text-blue-400">Payments</Link>
      <Link to="/schedules" className="hover:text-blue-400">Schedules</Link>
    </aside>
  );
}