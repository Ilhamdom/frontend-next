"use client";
import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import { SearchProvider } from "../../context/SearchContext";

export default function AdminLayoutShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <SearchProvider>
      <div className="min-h-screen bg-[#eef2f6]">
        <div className="flex min-h-screen">
          <AdminSidebar isOpen={isSidebarOpen} />
          <div className="flex min-w-0 flex-1 flex-col">
            <AdminTopbar onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} />
            <main className="min-w-0 flex-1 p-6 lg:p-8">
              {children}
            </main>
          </div>
        </div>
      </div>
    </SearchProvider>
  );
}
