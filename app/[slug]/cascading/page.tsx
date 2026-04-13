"use client";
import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";

export default function CascadingPage() {
  return (
    <LayoutShell>
      <PageHeader
        title="Cascading Kinerja"
        description="Peta penurunan (alignment) sasaran dari tingkat organisasi hingga individu."
        action={
          <button className="px-3 py-1 rounded-lg border border-blue-800 text-blue-800 text-xs font-semibold hover:bg-blue-50">Unduh Pohon Kinerja</button>
        }
      />
      <div className="bg-white rounded-2xl border border-gray-200 p-8 mt-6 flex flex-col items-center relative overflow-x-auto">
        {/* Diagram Layer 1 */}
        <div className="w-full max-w-xl flex flex-col items-center">
          {/* Layer 1: SS */}
          <div className="bg-blue-800 text-white rounded-2xl px-8 py-6 mb-4 w-full relative">
            <div className="text-xs font-semibold text-yellow-400 mb-1">JPT UTAMA (SASARAN STRATEGIS)</div>
            <div className="text-lg font-bold mb-1">Meningkatnya Kualitas Tata Kelola Lembaga Administrasi Negara</div>
            <div className="flex items-center gap-2">
              <span className="bg-blue-900 text-white text-xs px-2 py-0.5 rounded">Kepala LAN RI</span>
              <span className="ml-auto bg-blue-100 text-blue-900 text-xs px-2 py-0.5 rounded">IKU: NILAI SAKIP LAN</span>
              <span className="bg-blue-100 text-blue-900 text-xs px-2 py-0.5 rounded">Target: A</span>
            </div>
          </div>
          {/* Garis vertikal */}
          <div className="w-1 h-6 bg-blue-200 mx-auto" />
          {/* Layer 2: SP */}
          <div className="bg-white border border-blue-200 rounded-2xl px-8 py-6 mb-4 w-full relative">
            <div className="text-xs font-semibold text-blue-800 mb-1">JPT PRATAMA (SASARAN PROGRAM)</div>
            <div className="text-lg font-bold mb-1 text-blue-900">Terwujudnya ASN yang Profesional dan Kompeten</div>
            <div className="flex items-center gap-2">
              <span className="bg-blue-50 text-blue-900 text-xs px-2 py-0.5 rounded">Kepala Pusbangkom Pejabat Negara</span>
              <span className="ml-auto bg-blue-100 text-blue-900 text-xs px-2 py-0.5 rounded">IKP: INDEKS KEPUASAN LATSAR</span>
              <span className="bg-blue-100 text-blue-900 text-xs px-2 py-0.5 rounded">Target: 85.0</span>
            </div>
          </div>
          {/* Garis vertikal */}
          <div className="w-1 h-6 bg-blue-200 mx-auto" />
          {/* Layer 3: SK */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-8 py-6 w-full relative">
            <div className="flex items-center gap-2 mb-1">
              <div className="text-xs font-semibold text-emerald-700">ADMINISTRATOR (SASARAN KEGIATAN)</div>
              <span className="bg-emerald-200 text-emerald-800 text-xs px-2 py-0.5 rounded-full ml-2">TUGAS ANDA</span>
            </div>
            <div className="text-lg font-bold mb-1 text-emerald-900">Penyusunan Kurikulum PKN I</div>
            <div className="flex items-center gap-2">
              <span className="bg-emerald-100 text-emerald-900 text-xs px-2 py-0.5 rounded">TARGET 1 Dokumen</span>
            </div>
          </div>
        </div>
      </div>
    </LayoutShell>
  );
}
