import React from "react";
import SummaryCard from "../components/SummaryCard";
import AdminCards from "../components/AdminCards";

function Summary() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Summary</h1>

      {/* Example: display admin cards */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6">
        <AdminCards title="Total Projects" value={12} />
        <AdminCards title="Completed BOQ" value={8} />
        <AdminCards title="Pending Approvals" value={3} />
      </div>

      {/* Example: summary cards */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <SummaryCard title="Structural TPC" value="5 tasks" />
        <SummaryCard title="Engineering & BOQ" value="8 tasks" />
        <SummaryCard title="Estimator Progress" value="75%" />
      </div>
    </div>
  );
}

export default Summary;