"use client";
import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import { SearchProvider } from "../../context/SearchContext";

export default function AdminLayoutShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <SearchProvider>
      <div className="h-screen bg-[#eef2f6] overflow-hidden">
        <div className="flex h-full">
          <AdminSidebar isOpen={isSidebarOpen} />
          <div className="flex flex-1 flex-col min-w-0 h-full overflow-hidden relative">
            <AdminTopbar onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} />
            <main className="flex-1 overflow-y-auto p-6 lg:p-8 w-full relative">
              {children}
            </main>
          </div>
        </div>
      </div>
    </SearchProvider>
  );
}
