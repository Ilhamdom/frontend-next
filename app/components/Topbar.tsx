"use client";
import React, { useState, useRef, useEffect } from "react";
import { useUserStore } from "@/store/userStore";
import Link from "next/link";
import { IconChevronDown, IconLogout, IconCalendar, IconCalendarStats } from "@tabler/icons-react";

interface TopbarProps {
  onToggleSidebar: () => void;
}

const TAHUN_OPTIONS = ["2024", "2025", "2026", "2027"];
const TRIWULAN_OPTIONS = ["Triwulan I", "Triwulan II", "Triwulan III", "Triwulan IV"];

function FilterDropdown({
  icon,
  value,
  options,
  onChange,
}: {
  icon: React.ReactNode;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 border border-blue-600 text-white text-sm font-semibold rounded-lg px-3 py-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-30 justify-between"
      >
        <span className="flex items-center gap-1.5">
          {icon}
          {value}
        </span>
        <IconChevronDown size={14} stroke={2.5} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-full min-w-32.5 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
          {options.map(opt => (
            <button
              key={opt}
              type="button"
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors rounded-lg ${
                opt === value
                  ? "bg-blue-50 text-blue-900 font-bold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const Topbar: React.FC<TopbarProps> = ({ onToggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTahun, setSelectedTahun] = useState("2026");
  const [selectedTriwulan, setSelectedTriwulan] = useState("Triwulan I");
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    // Sync zustand user state dengan localStorage jika ada
    if (typeof window !== "undefined" && !user) {
      const userStr = localStorage.getItem("user");
      if (userStr) {
        try {
          const userObj = JSON.parse(userStr);
          setUser(userObj);
        } catch {}
      }
    }
  }, [setUser, user]);

  return (
    <header className="h-18 bg-blue-900 border-b border-blue-800 flex items-center px-8 justify-between shadow-sm">
      {/* Left: Hamburger + Filters */}
      <div className="flex items-center gap-4 flex-1">
        <button
          className="mr-2 p-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
          aria-label="Toggle sidebar"
          onClick={onToggleSidebar}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <rect y="5" width="24" height="2.5" rx="1.25" fill="#ffffff" />
            <rect y="11" width="24" height="2.5" rx="1.25" fill="#ffffff" />
            <rect y="17" width="24" height="2.5" rx="1.25" fill="#ffffff" />
          </svg>
        </button>

        {/* Filter Tahun */}
        <FilterDropdown
          icon={<IconCalendar size={14} stroke={2} />}
          value={selectedTahun}
          options={TAHUN_OPTIONS}
          onChange={setSelectedTahun}
        />

        {/* Filter Triwulan */}
        <FilterDropdown
          icon={<IconCalendarStats size={14} stroke={2} />}
          value={selectedTriwulan}
          options={TRIWULAN_OPTIONS}
          onChange={setSelectedTriwulan}
        />
      </div>
      
      <div className="flex-1" />
      
      {/* Right: Notif & User */}
      <div className="flex items-center gap-3 min-w-55 justify-end">
        <button className="relative p-2 rounded-full hover:bg-blue-800 transition-colors mr-2">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 17a2 2 0 0 0 2-2H8a2 2 0 0 0 2 2Zm6-3V9a6 6 0 1 0-12 0v5l-1 1v1h16v-1l-1-1Z" stroke="#ffffff" strokeWidth="1.5"/></svg>
        </button>
        
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 hover:bg-blue-800/50 p-1.5 pr-2 rounded-xl transition-all outline-none"
          >
            <div className="text-right hidden sm:block">
              <div className="text-sm font-bold text-white leading-tight">{user?.username || "-"}</div>
              <div className="text-xs text-blue-200 font-medium">{user?.unit || "-"}</div>
            </div>
            <IconChevronDown size={16} stroke={2} className={`text-blue-200 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
              {/* User Info Header */}
              <div className="px-4 py-4 bg-linear-to-br from-blue-900 to-blue-700 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-extrabold text-base shadow border border-emerald-400/40 shrink-0">
                  {user?.username ? user.username.slice(0, 2).toUpperCase() : "--"}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-white leading-tight truncate">{user?.username || "-"}</div>
                  <div className="text-xs text-blue-200 font-medium truncate">{user?.unit || "-"}</div>
                </div>
              </div>
              
              <div className="p-2 flex flex-col gap-1">
                <Link
                  href="/ubah-password"
                  className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-blue-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 17v1m-6 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2Zm6-7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/><path d="M7 9V7a5 5 0 0 1 10 0v2"/></svg>
                  Rubah Password
                </Link>
                <Link 
                  href="/login" 
                  className="flex items-center gap-2.5 w-full px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <IconLogout size={18} stroke={2} />
                  Logout 
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;

