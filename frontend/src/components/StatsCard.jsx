import React from "react";
import { Users, ClipboardCheck, AlertCircle } from "lucide-react";

const iconMap = {
  "Assigned to Me": <Users className="text-orange-500 w-6 h-6" />,
  "Created by Me": <ClipboardCheck className="text-green-600 w-6 h-6" />,
  "Overdue Tasks": <AlertCircle className="text-red-500 w-6 h-6" />,
};

const StatsCard = ({ title, count }) => {
  const icon = iconMap[title] || (
    <ClipboardCheck className="text-gray-500 w-6 h-6" />
  );

  return (
    <div className="bg-[#161B22] border border-[#30363d] rounded-xl p-6 text-white shadow-md w-full sm:w-1/3 transition-transform hover:scale-105">
      <div className="mb-2">{icon}</div>
      <h2 className="text-md font-medium ">{title}</h2>
      <p className="text-3xl font-bold ">{count}</p>
    </div>
  );
};

export default StatsCard;
