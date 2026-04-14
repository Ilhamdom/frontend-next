import React from "react";
import Link from "next/link";
import UserPageHeader from "../../components/user/UserPageHeader";
import UserTableCard from "../../components/user/UserTableCard";
import UserStatusBadge from "../../components/user/UserStatusBadge";

const dummyData = [
  { 
    id: "REP-001",
    periode: "Triwulan I - 2026",
    kegiatan: "Penyusunan Kurikulum PKN I",
    capaian: "1 Dokumen Draft",
    tanggal: "15 Apr 2026",
    status: "SELESAI",
    dokumen: "laporan_tw1_pkn_1.pdf"
  },
  { 
    id: "REP-002",
    periode: "Triwulan II - 2026",
    kegiatan: "Workshop Laboratorium Inovasi Daerah",
    capaian: "Proses Administrasi",
    tanggal: "Belum lapor",
    status: "BELUM MULAI",
    dokumen: "-"
  },
  { 
    id: "REP-003",
    periode: "Triwulan I - 2026",
    kegiatan: "Penyusunan Laporan Kinerja (LAKIP)",
    capaian: "Laporan Bab I - Bab III",
    tanggal: "02 Apr 2026",
    status: "BERJALAN",
    dokumen: "draft_lakip_rev1.docx"
  },
];

export default function LaporanRealisasiUserPage() {
  return (
    <div className="flex flex-col w-full pb-10">
      <PageHeader
        title="Laporan Realisasi Kinerja"
        description="Pusat pelaporan progres capaian barang, jasa, dan keuangan secara berkala."
        action={
          <Link href="/user/laporan-realisasi/create" className="bg-emerald-600 text-white px-4 py-2 flex items-center gap-2 rounded-lg font-semibold text-sm hover:bg-emerald-700 shadow-sm transition-colors">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Buat Laporan Baru
          </Link>
        }
      />
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center justify-center shadow-sm">
          <div className="text-3xl font-extrabold text-[#0B1F3A] mb-1">12</div>
          <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Target Laporan</div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center justify-center shadow-sm">
          <div className="text-3xl font-extrabold text-emerald-600 mb-1">08</div>
          <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Telah Dilaporkan</div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center justify-center shadow-sm">
          <div className="text-3xl font-extrabold text-orange-500 mb-1">04</div>
          <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Menunggu Tindakan</div>
        </div>
      </div>

      <TableCard
        title="Riwayat Pelaporan Realisasi"
        toolbar={
          <div className="flex gap-2">
            <select className="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-700 text-sm font-semibold bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
              <option>Semua Periode</option>
              <option>Triwulan I</option>
              <option>Triwulan II</option>
            </select>
            <button className="px-3 py-1.5 rounded-lg border border-emerald-600 text-emerald-700 text-sm font-semibold hover:bg-emerald-50 transition-colors">Unduh Rekap</button>
          </div>
        }
      >
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-gray-500 uppercase text-xs">
                <th className="text-left py-4 px-4 font-bold border-b border-gray-100">PERIODE</th>
                <th className="text-left py-4 px-4 font-bold border-b border-gray-100">NAMA KEGIATAN</th>
                <th className="text-left py-4 px-4 font-bold border-b border-gray-100">CAPAIAN SAAT INI</th>
                <th className="text-left py-4 px-4 font-bold border-b border-gray-100">WAKTU LAPOR</th>
                <th className="text-center py-4 px-4 font-bold border-b border-gray-100">STATUS</th>
                <th className="text-center py-4 px-4 font-bold border-b border-gray-100">EVIDENS</th>
                <th className="text-center py-4 px-4 font-bold border-b border-gray-100">AKSI</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((row) => (
                <tr key={row.id} className="border-b border-gray-50 last:border-none hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-4 align-top">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">{row.periode}</span>
                  </td>
                  <td className="py-4 px-4 align-top max-w-[280px]">
                    <div className="font-bold text-[#0B1F3A] mb-1">{row.kegiatan}</div>
                    <div className="text-xs text-gray-500 tracking-wide">ID: {row.id}</div>
                  </td>
                  <td className="py-4 px-4 align-top text-gray-700 font-medium">{row.capaian}</td>
                  <td className="py-4 px-4 align-top text-gray-600 text-xs font-semibold">{row.tanggal}</td>
                  <td className="py-4 px-4 align-top text-center">
                    <StatusBadge status={row.status} />
                  </td>
                  <td className="py-4 px-4 align-top text-center">
                    {row.dokumen !== "-" ? (
                      <button className="text-blue-600 hover:text-blue-800 text-xs font-bold inline-flex items-center gap-1 bg-blue-50 px-2 py-1 rounded">
                        <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        {row.dokumen}
                      </button>
                    ) : (
                      <span className="text-gray-400 text-xs font-semibold italic">Belum diunggah</span>
                    )}
                  </td>
                  <td className="py-4 px-4 align-top text-center">
                    <button className="bg-white border border-gray-200 text-gray-700 hover:text-[#0B1F3A] hover:border-[#0B1F3A] px-3 py-1 rounded-lg text-xs font-bold transition-all shadow-sm">
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TableCard>
    </div>
  );
}
