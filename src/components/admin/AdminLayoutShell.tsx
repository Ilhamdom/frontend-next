"use client";
import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import { SearchProvider } from "../../context/SearchContext";

export default function AdminLayoutShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <SearchProvider>
      <div className="h-screen flex">
        {/* Sidebar: fixed di kiri */}
        <div className="fixed inset-y-0 left-0 z-30">
          <AdminSidebar isOpen={isSidebarOpen} />
        </div>
        {/* Main content: margin-left sesuai lebar sidebar */}
        <div className="flex-1 flex flex-col h-screen ml-[248px]">
          <AdminTopbar onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} />
          <main className="flex-1 overflow-y-auto p-6 lg:p-8 bg-[#eef2f6]">
            {children}
          </main>
        </div>
      </div>
    </SearchProvider>
  );
}
