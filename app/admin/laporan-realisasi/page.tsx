"use client";
import React, { useState } from "react";
import AdminPageHeader from "../../../src/components/admin/AdminPageHeader";
import AdminTableCard from "../../../src/components/admin/AdminTableCard";
import AdminStatusBadge from "../../../src/components/admin/AdminStatusBadge";
import AdminVerifikasiModal from "../../../src/components/admin/AdminVerifikasiModal";
import { useSearch } from "../../../src/context/SearchContext";
import { highlightText } from "../../../src/utils/textHighlight";

const initialReports = [
  { 
    id: "REP-001",
    unit: "Pusbangkom",
    periode: "Triwulan I - 2026",
    kegiatan: "Penyusunan Kurikulum PKN I",
    capaian: "1 Dokumen Draft Kurikulum",
    tanggal: "15 Apr 2026",
    status: "PENDING",
    dokumen: "laporan_tw1_pkn_1.pdf"
  },
  { 
    id: "REP-002",
    unit: "Puslitbang",
    periode: "Triwulan II - 2026",
    kegiatan: "Workshop Laboratorium Inovasi Daerah",
    capaian: "Pelaksanaan Workshop Tahap 1",
    tanggal: "20 Mei 2026",
    status: "SELESAI", // equivalent to terverifikasi
    dokumen: "lap_kegiatan_litbang.pdf"
  },
  { 
    id: "REP-003",
    unit: "Biro Perencanaan",
    periode: "Triwulan I - 2026",
    kegiatan: "Penyusunan Laporan Kinerja (LAKIP)",
    capaian: "Laporan Bab I - Bab III",
    tanggal: "02 Apr 2026",
    status: "REVISI",
    dokumen: "draft_lakip_rev1.docx"
  },
];

export default function AdminLaporanRealisasiPage() {
  const { searchQuery } = useSearch();
  const [dataRows, setDataRows] = useState(initialReports);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<any>(null);

  const pendingCount = dataRows.filter(r => r.status === "PENDING").length;
  const verifiedCount = dataRows.filter(r => r.status === "SELESAI" || r.status === "TERVERIFIKASI").length;

  const handleVerifyClick = (row: any) => {
    setSelectedReport(row);
    setIsModalOpen(true);
  };

  const handleVerifySubmit = (id: string, newStatus: string, feedback: string) => {
    setDataRows(prev => prev.map(row => {
      if (row.id === id) {
         // Update state with new status (Terverifikasi/Selesai or Revisi)
         return {
           ...row,
           status: newStatus === "TERVERIFIKASI" ? "SELESAI" : newStatus,
         };
      }
      return row;
    }));
  };

  const filteredRows = dataRows.filter(r => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      r.unit.toLowerCase().includes(q) ||
      r.kegiatan.toLowerCase().includes(q) ||
      r.id.toLowerCase().includes(q)
    );
  });

  return (
    <div className="flex flex-col w-full">
      <AdminPageHeader
        title="Verifikasi Laporan Realisasi"
        description="Kelola dan verifikasi pelaporan capaian program dan kegiatan dari unit kerja."
      />
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-4 py-5 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-[#0B1F3A]">{dataRows.length}</span>
          </div>
          <div className="text-xs text-gray-500 font-bold tracking-widest uppercase mt-1">Total Laporan Masuk</div>
        </div>
        <div className="bg-white rounded-xl border border-status-yellow/30 bg-status-yellow/5 p-4 py-5 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-status-yellow">{pendingCount}</span>
          </div>
          <div className="text-xs text-gray-600 font-bold tracking-widest uppercase mt-1">Menunggu Verifikasi</div>
        </div>
        <div className="bg-white rounded-xl border border-status-green/30 bg-status-green/5 p-4 py-5 flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-status-green">{verifiedCount}</span>
          </div>
          <div className="text-xs text-gray-600 font-bold tracking-widest uppercase mt-1">Telah Disetujui</div>
        </div>
      </div>

      <AdminTableCard
        title="Daftar Pelaporan"
        toolbar={
          <select className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm font-semibold bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
            <option>Semua Unit Kerja</option>
            <option>Pusbangkom</option>
            <option>Puslitbang</option>
            <option>Biro Perencanaan</option>
          </select>
        }
      >
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="text-gray-500 uppercase text-xs">
                <th className="py-4 px-4 font-bold border-b border-gray-100">UNIT PELAPOR</th>
                <th className="py-4 px-4 font-bold border-b border-gray-100">NAMA KEGIATAN & CAPAIAN</th>
                <th className="text-center py-4 px-4 font-bold border-b border-gray-100">PERIODE</th>
                <th className="text-center py-4 px-4 font-bold border-b border-gray-100">STATUS</th>
                <th className="text-center py-4 px-4 font-bold border-b border-gray-100">AKSI</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row) => (
                <tr key={row.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors last:border-none">
                  <td className="py-4 px-4 align-top">
                    <div className="font-extrabold text-[#0B1F3A] mb-1">{highlightText(row.unit, searchQuery)}</div>
                    <div className="text-xs text-gray-500 font-medium">Lapor: {row.tanggal}</div>
                  </td>
                  <td className="py-4 px-4 align-top max-w-[280px]">
                    <div className="font-bold text-gray-800 mb-1 leading-snug">{highlightText(row.kegiatan, searchQuery)}</div>
                    <div className="text-xs text-gray-600 bg-gray-100/80 px-2 py-1 rounded inline-block">Hasil: {row.capaian}</div>
                  </td>
                  <td className="py-4 px-4 align-top text-center">
                    <span className="inline-block bg-brand-gold-50 text-brand-gold-700 px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                      {row.periode}
                    </span>
                  </td>
                  <td className="py-4 px-4 align-top text-center">
                    <AdminStatusBadge status={row.status} />
                  </td>
                  <td className="py-4 px-4 align-top text-center">
                    {row.status === "PENDING" ? (
                      <button 
                        onClick={() => handleVerifyClick(row)}
                        className="bg-brand-blue-950 text-white hover:bg-brand-blue-800 px-4 py-1.5 rounded-lg text-xs font-bold shadow-sm transition-all"
                      >
                        Verifikasi
                      </button>
                    ) : (
                      <button 
                        onClick={() => handleVerifyClick(row)}
                        className="bg-white border border-gray-200 text-gray-700 hover:text-[#0B1F3A] hover:bg-gray-50 px-4 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm"
                      >
                        Lihat Detail
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminTableCard>

      <AdminVerifikasiModal 
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={selectedReport}
        onVerify={handleVerifySubmit}
      />
    </div>
  );
}
