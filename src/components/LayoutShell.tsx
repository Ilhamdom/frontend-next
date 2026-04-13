"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import AppShell from "./AppShell";


export default function LayoutShell({ children }: React.PropsWithChildren<{}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleToggleSidebar = () => setIsSidebarOpen((v) => !v);
  return (
    <AppShell
      sidebar={<Sidebar isOpen={isSidebarOpen} />}
      topbar={<Topbar onToggleSidebar={handleToggleSidebar} />}
    >
      {children}
    </AppShell>
  );
}

