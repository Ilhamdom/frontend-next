"use client";
import { useSearch } from "../../context/SearchContext";
import { Input } from "../ui/Input";

interface UserTopbarProps {
  onToggleSidebar: () => void;
}

const UserTopbar: React.FC<UserTopbarProps> = ({ onToggleSidebar }) => {
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
      {/* Kanan: Kosong atau bisa diisi user info */}
      <div className="flex items-center gap-4"></div>
    </header>
  );
};

export default UserTopbar;
