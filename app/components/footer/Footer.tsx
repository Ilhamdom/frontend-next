"use client";
export default function Footer() {
  return (
    <footer id="informasi" className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl font-bold">SI-REVA 2026</span>
          </div>
          <p className="text-sm" style={{ color: '#ffffff' }}>
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
            <li>Jl. Veteran No. 10, Jakarta Pusat</li>
            <li>(021) 3868201</li>
            <li>support.sireva@lan.go.id</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
