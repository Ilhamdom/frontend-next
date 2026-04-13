
const missions = [
  "Mengembangkan kebijakan inovasi administrasi negara dan manajemen ASN.",
  "Membina dan menyelenggarakan pendidikan dan pelatihan ASN yang berkualitas.",
  "Mengkaji dan memecahkan permasalahan krusial di bidang administrasi negara.",
  "Menyelenggarakan pendidikan tinggi terapan di bidang administrasi negara.",
  "Mewujudkan tata kelola kelembagaan LAN yang mandiri, akuntabel, bersih, dan melayani.",
];

const goals = [
  {
    code: "T-01",
    statement: "Mewujudkan tata kelola pemerintahan yang baik.",
    indicator: "Indeks Reformasi Birokrasi LAN",
    target: "Sangat Baik",
  },
  {
    code: "T-02",
    statement: "Meningkatkan kompetensi SDM Aparatur berstandar global.",
    indicator: "Nilai Kapasitas ASN Nasional",
    target: "80.00",
  },
  {
    code: "T-03",
    statement: "Mendorong inovasi pelayanan publik di instansi pusat dan daerah.",
    indicator: "Indeks Inovasi Pelayanan Publik",
    target: "Tinggi",
  },
];

export default function AdminVisiMisiTujuanPage() {
  return (
    <div className="flex flex-col w-full">
        {/* Header */}
        <div className="max-w-screen-lg mx-auto mb-10">
          <h1 className="text-3xl font-extrabold text-blue-900 mb-1">Visi, Misi & Tujuan</h1>
          <p className="text-gray-500 text-sm">Rincian arah kebijakan dan sasaran makro instansi.</p>
        </div>
        {/* Hero Vision Card */}
        <div className="max-w-screen-lg mx-auto mb-10 relative">
          <div className="bg-blue-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden min-h-[160px] flex items-center">
            <div>
              <span className="inline-block bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full mb-4">VISI LAN RI</span>
              <div className="text-2xl md:text-3xl font-bold leading-snug max-w-2xl">
                Menjadi lembaga pembina yang unggul dalam mewujudkan birokrasi berkelas dunia untuk Indonesia Maju.
              </div>
            </div>
            {/* Watermark/Shape */}
            <div className="absolute right-0 top-0 bottom-0 flex items-center h-full pr-6 pointer-events-none">
              <div className="w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
        {/* Section Misi */}
        <div className="max-w-screen-lg mx-auto mb-10">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-50">
                <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M10 2v16M2 10h16" stroke="#2563eb" strokeWidth="2"/></svg>
              </span>
              <span className="font-bold text-blue-900 text-lg">Penjabaran Misi Organisasi</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {missions.map((m, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-3">
                  <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold rounded px-2 py-0.5 mt-1">{i + 1}</span>
                  <span className="text-sm text-blue-900 font-semibold leading-snug">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Section Tujuan Strategis */}
        <div className="max-w-screen-lg mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-100">
                <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M10 2v16M2 10h16" stroke="#eab308" strokeWidth="2"/></svg>
              </span>
              <span className="font-bold text-yellow-700 text-lg">Tujuan Strategis & Indikator Makro</span>
            </div>
            <div className="flex flex-col gap-5">
              {goals.map((g, i) => (
                <div key={g.code} className="flex flex-col md:flex-row items-stretch bg-white border-l-4 border-blue-700 rounded-xl p-4 md:p-6 gap-4">
                  <div className="flex flex-col items-center justify-center mr-4 min-w-[64px]">
                    <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold rounded px-3 py-1 mb-2">{g.code}</span>
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <span className="text-xs text-gray-400 font-semibold">PERNYATAAN TUJUAN</span>
                    <span className="font-bold text-blue-900 text-base mb-1">{g.statement}</span>
                    <div className="bg-gray-50 rounded-lg p-3 mt-2">
                      <span className="text-xs text-gray-400 font-semibold">INDIKATOR TUJUAN</span>
                      <div className="text-sm text-gray-700 font-semibold">{g.indicator}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between min-w-[120px]">
                    <span className="text-xs text-gray-400 font-semibold mb-1">TARGET CAPAIAN</span>
                    <span className="text-base font-bold text-blue-700">{g.target}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}
