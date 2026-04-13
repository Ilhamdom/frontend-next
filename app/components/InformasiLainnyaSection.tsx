const informasiLainnyaData = [
  {
    title: "BUKU PANDUAN",
    desc: "Unduh dokumen manual penggunaan aplikasi SI-REVA untuk admin dan user.",
    cta: "Unduh PDF",
    href: "/docs/panduan.pdf",
    iconColor: "#14386b",
  },
  {
    title: "FAQ",
    desc: "Temukan jawaban dari pertanyaan yang sering diajukan terkait sistem ini.",
    cta: "Baca FAQ",
    href: "/faq",
    iconColor: "#2563eb",
  },
  {
    title: "PROTOKOL EVALUASI",
    desc: "Standar operasional prosedur terkait evaluasi program LAN RI tahun 2026.",
    cta: "Lihat Protokol",
    href: "/protokol",
    iconColor: "#fbbf24",
  },
];

export default function InformasiLainnyaSection() {
  return (
    <section className="w-full bg-[#f7fafc] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Judul tengah */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-2">INFORMASI LAINNYA</h2>
        {/* Garis aksen kuning */}
        <div className="mx-auto mb-10 h-1 w-24 bg-yellow-400 rounded-full" />
        {/* Grid card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {informasiLainnyaData.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col items-center text-center">
              {/* Icon box kecil */}
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg" style={{ background: item.iconColor + '20' }}>
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="4" fill={item.iconColor} />
                </svg>
              </div>
              <div className="mb-2 text-lg font-bold text-[#0B1F3A]">{item.title}</div>
              <div className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">{item.desc}</div>
              <a href={item.href} className="text-blue-700 font-semibold hover:underline transition-colors text-base md:text-lg">
                {item.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
