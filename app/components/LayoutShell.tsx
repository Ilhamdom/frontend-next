"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import AppShell from "./AppShell";
import { useUserStore } from "@/store/userStore";

type SidebarVariant = "admin" | "user";

interface LayoutShellProps {
  children: React.ReactNode;
  sidebarVariant?: SidebarVariant;
  showLaporanMenu?: boolean;
}

export default function LayoutShell({ children, sidebarVariant, showLaporanMenu = true }: LayoutShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleToggleSidebar = () => setIsSidebarOpen((v) => !v);
  const user = useUserStore((state) => state.user);
  const hasHydrated = useUserStore((state) => state._hasHydrated);

  // Tunggu hydration selesai, lalu tentukan variant dari role
  const resolvedVariant: SidebarVariant =
    sidebarVariant ?? (!hasHydrated ? "admin" : user?.role && user.role.toLowerCase() !== "admin" ? "user" : "admin");

  return (
    <AppShell
      sidebar={<Sidebar isOpen={isSidebarOpen} variant={resolvedVariant} showLaporan={showLaporanMenu} />}
      topbar={<Topbar onToggleSidebar={handleToggleSidebar} />}
    >
      {children}
    </AppShell>
  );
}

