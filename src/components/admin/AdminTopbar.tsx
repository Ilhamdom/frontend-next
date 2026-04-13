"use client";
import { useSearch } from "../../context/SearchContext";
import { Input } from "../ui/Input";

interface AdminTopbarProps {
  onToggleSidebar: () => void;
}

const AdminTopbar: React.FC<AdminTopbarProps> = ({ onToggleSidebar }) => {
  const { searchQuery, setSearchQuery } = useSearch();
  return (
    <header className="h-[72px] w-full bg-white border-b border-gray-200 flex items-center px-8 justify-between">
      {/* Kiri: Hamburger + Search */}
      <div className="flex items-center gap-4 flex-1 max-w-[420px]">
        {/* Hamburger */}
        <button
          className="mr-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue-950"
          aria-label="Toggle sidebar"
          onClick={onToggleSidebar}
        >
          {/* Hamburger icon */}
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-brand-blue-950">
            <rect y="5" width="24" height="2.5" rx="1.25" fill="currentColor" />
            <rect y="11" width="24" height="2.5" rx="1.25" fill="currentColor" />
            <rect y="17" width="24" height="2.5" rx="1.25" fill="currentColor" />
          </svg>
        </button>
        <div className="w-full">
          <Input
            type="text"
            placeholder="Cari di halaman aktif..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={
              <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                <circle cx="8" cy="8" r="6.5" stroke="#94a3b8" strokeWidth="1.5" />
                <path d="M15 15l-3.5-3.5" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            }
          />
        </div>
      </div>
      {/* Tengah: Mode */}
      <div className="flex items-center gap-2 mx-8 hidden sm:flex">
        <span className="text-xs text-gray-500 font-semibold">Mode:</span>
        <select className="rounded-md border border-gray-300 py-1.5 px-3 text-sm font-bold text-brand-blue-900 bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold-500">
          <option>Admin Perencana</option>
        </select>
      </div>
      {/* Kanan: Notif & User & Logout */}
      <div className="flex items-center gap-4">
        {/* Icon bell */}
        <button className="relative p-2 rounded-full hover:bg-gray-100 text-brand-blue-950">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d="M10 17a2 2 0 0 0 2-2H8a2 2 0 0 0 2 2Zm6-3V9a6 6 0 1 0-12 0v5l-1 1v1h16v-1l-1-1Z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
        {/* User info */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-bold text-brand-blue-950 leading-tight">Admin Perencana</div>
            <div className="text-xs text-gray-500">Biro Perencanaan</div>
          </div>
          <div className="w-10 h-10 bg-brand-blue-950 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm">
            AP
          </div>
        </div>
        {/* Logout */}
        <button className="flex items-center justify-center gap-2 px-3 py-2 ml-2 rounded-lg font-bold text-sm bg-status-red/10 text-status-red hover:bg-status-red/20 transition-colors">
          <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
            <path d="M7 5v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11 9H3m0 0l2.5-2.5M3 9l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminTopbar;
