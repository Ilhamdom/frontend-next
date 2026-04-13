"use client";
export default function Footer() {
  return (
    <footer id="informasi" className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-yellow-400 rounded-full p-1">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <rect x="3" y="3" width="14" height="14" rx="3" fill="#FDE68A" />
              </svg>
            </span>
            <span className="text-2xl font-bold">SI-REVA 2026</span>
          </div>
          <p className="text-gray-200 text-sm">
            Dibuat oleh Biro Perencanaan dan Keuangan LAN RI bekerja sama dengan Tim Pengembang Internal.
          </p>
        </div>
        {/* Tim Pengembang */}
        <div>
          <div className="font-bold mb-2">TIM PENGEMBANG</div>
          <ul className="space-y-1 text-sm">
            <li>Lead Backend Engineer</li>
            <li>UI/UX Designer & Frontend</li>
            <li>Data Analyst & System Admin</li>
          </ul>
        </div>
        {/* Kontak Bantuan */}
        <div>
          <div className="font-bold mb-2">KONTAK BANTUAN</div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <rect x="2" y="2" width="12" height="12" rx="2" fill="#F3F4F6" />
              </svg>
              Jl. Veteran No. 10, Jakarta Pusat
            </li>
            <li className="flex items-center gap-2">
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="6" stroke="#FDE68A" strokeWidth="2" />
              </svg>
              (021) 3868201
            </li>
            <li className="flex items-center gap-2">
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                <path d="M2 4l6 5 6-5" stroke="#FDE68A" strokeWidth="2" />
              </svg>
              support.sireva@lan.go.id
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
