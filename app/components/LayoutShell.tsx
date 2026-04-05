"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import AppShell from "./AppShell";

type SidebarVariant = "admin" | "user";

interface LayoutShellProps {
  children: React.ReactNode;
  sidebarVariant?: SidebarVariant;
  showLaporanMenu?: boolean;
}

export default function LayoutShell({ children, sidebarVariant, showLaporanMenu = true }: LayoutShellProps) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleToggleSidebar = () => setIsSidebarOpen((v) => !v);

  // Auto-detect variant from URL slug if not explicitly provided
  const resolvedVariant: SidebarVariant =
    sidebarVariant ?? (pathname.startsWith("/user/") ? "user" : "admin");

  return (
    <AppShell
      sidebar={<Sidebar isOpen={isSidebarOpen} variant={resolvedVariant} showLaporan={showLaporanMenu} />}
      topbar={<Topbar onToggleSidebar={handleToggleSidebar} />}
    >
      {children}
    </AppShell>
  );
}

