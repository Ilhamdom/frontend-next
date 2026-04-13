"use client";
import React, { useState } from "react";
import UserSidebar from "../../components/user/UserSidebar";
import UserTopbar from "../../components/user/UserTopbar";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="h-screen bg-[#f8fafc] overflow-hidden">
      <div className="flex h-full">
        <UserSidebar isOpen={isSidebarOpen} />
        <div className="flex flex-1 flex-col min-w-0 h-full overflow-hidden relative">
          <UserTopbar onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} />
          <main className="flex-1 overflow-y-auto p-6 lg:p-8 w-full relative">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
