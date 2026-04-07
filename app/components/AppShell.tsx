"use client";
import React, { useState } from 'react';

interface AppShellProps {
  sidebar: React.ReactNode;
  topbar: React.ReactNode;
  children: React.ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ sidebar, topbar, children }) => {
  // State & handler sudah di layout shell, tidak perlu di sini

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      {sidebar}
      {/* Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        {topbar}
        {/* Main Content */}
        <main className="flex-1 p-8 lg:p-10 bg-[#f6f8fa] overflow-y-auto">
          <div className="w-full max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppShell;
