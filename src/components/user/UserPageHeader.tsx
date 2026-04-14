import React from "react";

interface UserPageHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const UserPageHeader: React.FC<UserPageHeaderProps> = ({ title, subtitle, children }) => {
  return (
    <header className="user-page-header py-4 px-6 border-b bg-white shadow-sm mb-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
        {children && <div className="mt-2">{children}</div>}
      </div>
    </header>
  );
};

export default UserPageHeader;
