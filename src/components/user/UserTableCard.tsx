import React from "react";

interface UserTableCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const UserTableCard: React.FC<UserTableCardProps> = ({ title, children, className = "" }) => {
  return (
    <section className={`bg-white rounded-xl shadow-md p-6 mb-6 ${className}`}>
      <h2 className="text-lg font-bold text-brand-blue-950 mb-4 border-b pb-2">{title}</h2>
      <div className="overflow-x-auto">{children}</div>
    </section>
  );
};

export default UserTableCard;
