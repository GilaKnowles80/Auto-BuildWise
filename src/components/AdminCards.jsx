import React from "react";

export default function AdminCards({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-blue-100 p-4 rounded-lg shadow">
        <h2 className="text-gray-700 font-bold">Total Subscribers</h2>
        <p className="text-2xl font-semibold">{stats.totalSubscribers || 0}</p>
      </div>
      <div className="bg-green-100 p-4 rounded-lg shadow">
        <h2 className="text-gray-700 font-bold">Total Sales</h2>
        <p className="text-2xl font-semibold">${stats.totalSales || 0}</p>
      </div>
      <div className="bg-yellow-100 p-4 rounded-lg shadow">
        <h2 className="text-gray-700 font-bold">Active Subscriptions</h2>
        <p className="text-2xl font-semibold">{stats.activeSubscriptions || 0}</p>
      </div>
    </div>
  );
}