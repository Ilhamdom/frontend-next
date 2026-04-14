"use client";
import React, { useState } from "react";
import UserSidebar from "./UserSidebar";
import UserTopbar from "./UserTopbar";
import { SearchProvider } from "../../context/SearchContext";

export default function UserLayoutShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // true = expanded, false = collapsed
  const sidebarWidth = isSidebarOpen ? 248 : 80;
  return (
    <SearchProvider>
      <div className="h-screen overflow-hidden bg-[#eef2f6]">
        {/* Sidebar fixed dengan width dinamis */}
        <div
          className="fixed inset-y-0 left-0 z-30 transition-all duration-300"
          style={{ width: sidebarWidth }}
        >
          <UserSidebar isOpen={isSidebarOpen} />
        </div>
        {/* Main content offset dinamis */}
        <div
          className="h-screen flex flex-col transition-all duration-300"
          style={{ marginLeft: sidebarWidth }}
        >
          <UserTopbar onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} />
          <main className="flex-1 overflow-y-auto p-6 lg:p-8">
            {children}
          </main>
        </div>
      </div>
    </SearchProvider>
  );
}
