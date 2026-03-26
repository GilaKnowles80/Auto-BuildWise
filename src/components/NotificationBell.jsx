import React, { useEffect, useState } from "react";

export default function NotificationBell({ users }) {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const expiring = users.filter(u => {
      if (!u.subscriptionEnd) return false;
      const now = new Date();
      const end = new Date(u.subscriptionEnd);
      return (end - now) / (1000 * 60 * 60 * 24) <= 7;
    });
    setAlerts(expiring);
  }, [users]);

  return (
    <div className="relative">
      <button className="relative p-2 text-gray-700 hover:text-gray-900">
        🔔
        {alerts.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-ping">
            {alerts.length}
          </span>
        )}
      </button>
    </div>
  );
}