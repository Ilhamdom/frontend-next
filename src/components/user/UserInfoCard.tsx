import React from "react";

interface UserInfoCardProps {
  title: string;
  accent?: "blue" | "orange" | "green" | "red";
  children: React.ReactNode;
  className?: string;
}

const accentMap: Record<string, string> = {
  blue: "border-l-4 border-brand-blue-500",
  orange: "border-l-4 border-brand-gold-300",
  green: "border-l-4 border-green-500",
  red: "border-l-4 border-status-red",
};

const UserInfoCard: React.FC<UserInfoCardProps> = ({ title, accent = "blue", children, className = "" }) => {
  return (
    <div className={`bg-white rounded-lg shadow p-4 mb-4 ${accentMap[accent] || accentMap.blue} ${className}`}>
      <h3 className="text-base font-bold mb-2 text-brand-blue-950">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default UserInfoCard;
