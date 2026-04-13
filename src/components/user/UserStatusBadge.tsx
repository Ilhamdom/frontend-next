import React from "react";

interface UserStatusBadgeProps {
  status: "TERCAPAI" | "BERJALAN" | "PERLU ATENSI" | string;
  className?: string;
}

const statusStyles: Record<string, string> = {
  TERCAPAI:
    "bg-brand-blue-100 text-brand-blue-950 border-brand-blue-400 border font-semibold",
  BERJALAN:
    "bg-brand-gold-100 text-brand-gold-400 border-brand-gold-300 border font-semibold",
  "PERLU ATENSI":
    "bg-status-red text-white border-status-red border font-semibold",
};

const UserStatusBadge: React.FC<UserStatusBadgeProps> = ({ status, className = "" }) => {
  const style = statusStyles[status] || "bg-gray-200 text-gray-700 border-gray-300 border font-semibold";
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs uppercase tracking-wide shadow-sm ${style} ${className}`}
      title={status}
    >
      {status}
    </span>
  );
};

export default UserStatusBadge;
