import React from "react";

interface UserProgressBarProps {
  value: number; // 0-100
  color?: "green" | "blue" | "gold" | "red";
  className?: string;
}

const colorMap: Record<string, string> = {
  green: "bg-green-500",
  blue: "bg-brand-blue-500",
  gold: "bg-brand-gold-300",
  red: "bg-status-red",
};

const UserProgressBar: React.FC<UserProgressBarProps> = ({ value, color = "blue", className = "" }) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2.5 ${className}`}> 
      <div
        className={`h-2.5 rounded-full transition-all duration-300 ${colorMap[color] || colorMap.blue}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default UserProgressBar;
