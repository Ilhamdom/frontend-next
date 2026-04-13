import Image from "next/image";

export default function AuthBrandPanel() {
  return (
    <div className="flex flex-col items-center justify-start h-full w-full max-w-md px-8 py-12">
      {/* Brand Area */}
      <div className="mb-10 w-full flex flex-col items-center">
        <div className="text-3xl md:text-4xl font-bold text-[#0B1F3A] tracking-wide mb-2">LAN RI</div>
        <div className="text-sm font-semibold text-red-600 tracking-wider uppercase">MAKARTI BHAKTI NAGARI</div>
      </div>
      {/* Card Gambar Dashboard */}
      <div className="w-full bg-white/80 rounded-2xl shadow-lg p-4 flex items-center justify-center">
        <Image
          src="/banner.png"
          alt="Dashboard Analitik"
          width={360}
          height={220}
          className="rounded-xl object-cover w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}
