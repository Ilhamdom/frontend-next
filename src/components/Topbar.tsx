"use client";
interface TopbarProps {
  onToggleSidebar: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onToggleSidebar }) => {
  return (
    <header className="h-18 bg-lan-400 border-b border-gray-200 flex items-center px-8 justify-between">
      {/* Left: Hamburger + Search */}
      <div className="flex items-center gap-4 flex-1 max-w-105">
        <button
          className="mr-2 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-800"
          aria-label="Toggle sidebar"
          onClick={onToggleSidebar}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <rect y="5" width="24" height="2.5" rx="1.25" fill="#0a1834" />
            <rect y="11" width="24" height="2.5" rx="1.25" fill="#0a1834" />
            <rect y="17" width="24" height="2.5" rx="1.25" fill="#0a1834" />
          </svg>
        </button>
        <div className="relative w-full">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.5"/><path d="M15 15l-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </span>
          <input
            type="text"
            placeholder="Cari data kinerja..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>
      </div>
      {/* Center: Mode */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500 font-semibold">Mode:</span>
        <select className="rounded-md border border-gray-300 px-3 py-1 text-sm font-medium bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200">
          <option>Unit Kerja</option>
        </select>
      </div>
      {/* Right: Notif & User */}
      <div className="flex items-center gap-5 min-wp-55 justify-end">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 17a2 2 0 0 0 2-2H8a2 2 0 0 0 2 2Zm6-3V9a6 6 0 1 0-12 0v5l-1 1v1h16v-1l-1-1Z" stroke="#0a1834" strokeWidth="1.5"/></svg>
        </button>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-sm font-semibold text-blue-900 leading-tight">Staf Evaluator</div>
            <div className="text-xs text-gray-500">Pusbangkom</div>
          </div>
          <div className="w-9 h-9 rounded-md bg-emerald-700 flex items-center justify-center text-white font-bold text-lg">SE</div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;

