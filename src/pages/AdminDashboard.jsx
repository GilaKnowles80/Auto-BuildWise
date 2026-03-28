import React, { useEffect, useState } from "react";
import AdminCards from "../components/AdminCards";
import NotificationBell from "../components/NotificationBell";
import { getUsers, getAdminStats } from "../services/adminService";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    async function fetchData() {
      const userData = await getUsers();
      const adminStats = await getAdminStats();
      setUsers(userData);
      setStats(adminStats);
    }
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <NotificationBell users={users} />
      </div>

      <AdminCards stats={stats} />

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full bg-white border shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Full Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Contact Number</th>
              <th className="px-4 py-2">City/Town/Country</th>
              <th className="px-4 py-2">Subscription</th>
              <th className="px-4 py-2">Language</th>
              <th className="px-4 py-2">IP Address</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{user.fullName}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.contactNumber}</td>
                <td className="px-4 py-2">{user.city}, {user.town}, {user.country}</td>
                <td className="px-4 py-2">{user.subscriptionPlan}</td>
                <td className="px-4 py-2">{user.language}</td>
                <td className="px-4 py-2">{user.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}