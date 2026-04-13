"use client";
import AdminPageHeader from "../../../src/components/admin/AdminPageHeader";
import CascadingSetupModal from "../../../src/components/admin/CascadingSetupModal";
import React, { useState } from "react";

export default function AdminCascadingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleSetup = () => setModalOpen(true);

  return (
    <div className="flex flex-col w-full">
      <AdminPageHeader
        title="Cascading Kinerja"
        description="Peta penurunan (alignment) sasaran dari tingkat organisasi hingga individu."
        action={
          <div className="flex gap-2">
            <button className="border border-blue-800 text-blue-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50">Mode Diagram</button>
            <button className="bg-blue-800 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-900" onClick={handleSetup}>Setup Cascading</button>
          </div>
        }
      />
      <div className="bg-white rounded-2xl border border-gray-200 p-8 mt-6 flex flex-col items-center relative overflow-x-auto">
        {/* Diagram Layer 1 */}
        <div className="w-full max-w-xl flex flex-col items-center">
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
          {/* Diagram Layer 2 */}
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
          {/* Diagram Layer 3 */}
          <div className="bg-white border border-blue-200 rounded-2xl px-8 py-6 w-full relative">
            <div className="text-xs font-semibold text-blue-800 mb-1">ADMINISTRATOR (SASARAN KEGIATAN)</div>
            <div className="text-lg font-bold mb-1 text-blue-900">Penyusunan Kurikulum PKN I</div>
            <div className="flex items-center gap-2">
              <span className="bg-blue-50 text-blue-900 text-xs px-2 py-0.5 rounded">Tim Kurikulum</span>
              <span className="ml-auto bg-blue-100 text-blue-900 text-xs px-2 py-0.5 rounded">Target: 1 Dokumen</span>
            </div>
          </div>
        </div>
      </div>
      <CascadingSetupModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
