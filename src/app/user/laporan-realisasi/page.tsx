"use client";
import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import TableCard from "@/components/TableCard";
import StatusBadge from "@/components/StatusBadge";

const data = [
  {
    kode: "LR-01",
    kegiatan: "Pelaksanaan Rapat Koordinasi",
    anggaran: "Rp 50.000.000",
    realisasi: "Rp 45.000.000",
    persentase: "90%",
    status: "TERCAPAI",
  },
  {
    kode: "LR-02",
    kegiatan: "Pengembangan Modul Pelatihan",
    anggaran: "Rp 100.000.000",
    realisasi: "Rp 85.000.000",
    persentase: "85%",
    status: "BERJALAN",
  },
  {
    kode: "LR-03",
    kegiatan: "Evaluasi Program Tahunan",
    anggaran: "Rp 75.000.000",
    realisasi: "Rp 25.000.000",
    persentase: "33%",
    status: "PERLU ATENSI",
  },
];

export default function UserLaporanRealisasiPage() {
  return (
    <LayoutShell>
      <PageHeader
        title="Laporan Realisasi"
        description="Laporan ringkasan realisasi kegiatan dan anggaran pada unit kerja."
      />
      <TableCard
        title="Data Realisasi Kegiatan"
        toolbar={
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Cari Kegiatan..."
              className="px-3 py-1.5 rounded-lg border border-gray-300 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button className="px-3 py-1.5 rounded-lg border border-blue-800 text-blue-800 text-sm font-semibold hover:bg-blue-50">Export</button>
          </div>
        }
      >
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-gray-500 uppercase text-xs">
              <th className="text-left py-2 pr-4">KODE</th>
              <th className="text-left py-2">NAMA KEGIATAN</th>
              <th className="text-left py-2">PAGU ANGGARAN</th>
              <th className="text-left py-2">REALISASI</th>
              <th className="text-left py-2">% CAPAIAN</th>
              <th className="text-left py-2">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.kode}>
                <td className="font-semibold pr-4">{row.kode}</td>
                <td>{row.kegiatan}</td>
                <td>{row.anggaran}</td>
                <td>{row.realisasi}</td>
                <td>{row.persentase}</td>
                <td><StatusBadge status={row.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableCard>
    </LayoutShell>
  );
}
