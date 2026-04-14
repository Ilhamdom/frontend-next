"use client";
import PageHeader from "../../components/PageHeader";
import Modal from "../../components/ui/Modal";
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { Alert } from "@/components/ui/Alert";
import { Avatar } from "@/components/ui/Avatar";

export default function AdminCascadingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleSetup = () => setModalOpen(true);

  return (
    <div className="flex flex-col w-full">
      <Alert 
        type="warning" 
        title="Pemeliharaan Sistem" 
        actionText="Lihat detail jadwal"
        onAction={() => {}}
        onClose={() => {}}
        className="mb-6"
      >
        Kami informasikan bahwa akan dilakukan pemeliharaan sistem pada Selasa, 21 Mei 2024, pukul 01.00 - 03.00 WIB.
      </Alert>

      {/* Demonstrasi Avatar */}
      <div className="flex items-center gap-6 mb-6 p-4 bg-white rounded-xl border border-gray-200">
        <div>
          <span className="block text-xs font-semibold text-gray-500 mb-2">Image Avatar</span>
          <div className="flex items-center gap-3">
            <Avatar src="https://i.pravatar.cc/150?img=47" name="Susi Indriwati" />
            <div>
              <div className="text-sm font-bold text-gray-900">Susi Indriwati</div>
              <div className="text-xs text-gray-500">Product Designer</div>
            </div>
          </div>
        </div>
        
        <div className="w-px h-10 bg-gray-200 mx-2"></div>
        
        <div>
          <span className="block text-xs font-semibold text-gray-500 mb-2">Initials Avatar</span>
          <div className="flex items-center gap-3">
            <Avatar name="Susi Indriwati" />
            <div>
              <div className="text-sm font-bold text-gray-900">Susi Indriwati</div>
              <div className="text-xs text-gray-500">Tanpa Foto</div>
            </div>
          </div>
        </div>

        <div className="w-px h-10 bg-gray-200 mx-2"></div>

        <div>
           <span className="block text-xs font-semibold text-gray-500 mb-2">Placeholder</span>
           <div className="flex items-center gap-3">
             <Avatar />
             <div className="text-sm text-gray-500 italic">User Default</div>
           </div>
        </div>
      </div>
      
      <PageHeader
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
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Setup Cascading">
        <div className="p-4">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Panduan Penggunaan</h3>
            <p className="text-sm text-gray-600">Pelajari cara mengatur cascading kinerja dengan panduan berikut ini.</p>
          </div>
          
          <Accordion>
            <AccordionItem title="Apa itu Cascading Kinerja?">
              Cascading Kinerja adalah proses penyelarasan dan penurunan target sasaran strategis dari tingkat pimpinan tertinggi hingga ke level individu pelaksana. Hal ini memastikan setiap pegawai memahami kontribusinya terhadap tujuan organisasi.
            </AccordionItem>
            <AccordionItem title="Bagaimana cara memulai setup cascading?">
              Untuk memulai, pastikan JPT Utama telah menetapkan Sasaran Strategis beserta Indikator Kinerja Utama (IKU). Setelah itu, JPT Pratama dapat melakukan alignment dengan menyusun Sasaran Program pendukung yang berkesinambungan.
            </AccordionItem>
            <AccordionItem title="Apa tujuan utama dari proses ini?">
              Tujuan utamanya adalah untuk memastikan setiap unit kerja dan individu berkontribusi secara langsung terhadap pencapaian target organisasi secara efektif dan efisien, serta transparan dalam evaluasinya.
            </AccordionItem>
          </Accordion>
        </div>
      </Modal>
    </div>
  );
}
