"use client";
import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import TableCard from "@/components/TableCard";
import { IconEye, IconPencil } from "@tabler/icons-react";

const years = [2025, 2026, 2027, 2028, 2029];

const kegiatanRows = [
  {
    id: 1,
    sasaranKegiatan: "Penyusunan Kurikulum PKN I",
    indikatorSasaranKegiatan: "Persentase Modul Kurikulum yang Tersusun",
    satuan: "%",
    targetRenstra: { 2025: 70, 2026: 80, 2027: 90, 2028: 95, 2029: 100 },
    targetPerjanjian: { 2025: 65, 2026: 75, 2027: 85, 2028: 92, 2029: 98 },
    unitKerja: "Pusbangkom ASN",
  },
  {
    id: 2,
    sasaranKegiatan: "Pelaksanaan Bimtek Manajemen Kinerja",
    indikatorSasaranKegiatan: "Jumlah Peserta Bimtek Lulus",
    satuan: "Orang",
    targetRenstra: { 2025: 250, 2026: 300, 2027: 350, 2028: 400, 2029: 450 },
    targetPerjanjian: { 2025: 240, 2026: 290, 2027: 330, 2028: 380, 2029: 430 },
    unitKerja: "Puslatbang KMP LAN",
  },
  {
    id: 3,
    sasaranKegiatan: "Pengembangan Portal Pembelajaran Digital",
    indikatorSasaranKegiatan: "Jumlah Fitur Portal yang Beroperasi",
    satuan: "Fitur",
    targetRenstra: { 2025: 6, 2026: 8, 2027: 10, 2028: 12, 2029: 14 },
    targetPerjanjian: { 2025: 5, 2026: 7, 2027: 9, 2028: 11, 2029: 13 },
    unitKerja: "Pusdatin LAN",
  },
];

export default function SasaranKegiatanPage() {
  return (
    <LayoutShell>
      <PageHeader
        title="Sasaran Kegiatan (SK)"
        description="Daftar rinci kegiatan operasional (Level Administrator/Pengawas)."
      />
      <TableCard
        title="Daftar Sasaran Kegiatan"
        toolbar={
          <button
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold shadow text-sm"
            type="button"
          >
            + Tambah Sasaran Kegiatan
          </button>
        }
      >
        <table className="min-w-full text-sm table-head-wrap table-like-api">
          <thead>
            <tr className="text-gray-500 uppercase text-xs">
              <th className="text-center py-2 px-2">No</th>
              <th className="text-left py-2 px-3">Sasaran<br />Kegiatan</th>
              <th className="text-left py-2 px-3">Indikator Sasaran<br />Kegiatan</th>
              <th className="text-left py-2 px-3">Satuan</th>
              <th className="text-left py-2 px-3">Target Kinerja<br />Renstra</th>
              <th className="text-left py-2 px-3">Target Kinerja<br />Perjanjian Kinerja</th>
              <th className="text-left py-2 px-3">Unit<br />Kerja</th>
              <th className="text-center py-2 px-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {kegiatanRows.map((row, idx) => (
              <tr key={row.id}>
                <td className="text-center px-2 py-2 font-semibold">{idx + 1}</td>
                <td className="px-3 py-2">{row.sasaranKegiatan}</td>
                <td className="px-3 py-2">{row.indikatorSasaranKegiatan}</td>
                <td className="px-3 py-2">{row.satuan}</td>
                <td className="px-3 py-2 align-top">
                  <div className="rounded-lg border border-blue-100 bg-blue-50/50 p-2">
                    {years.map((year) => (
                      <div
                        key={`renstra-${row.id}-${year}`}
                        className="flex items-center justify-between gap-3 border-b border-blue-100 py-1.5 last:border-b-0"
                      >
                        <span className="text-xs font-semibold text-blue-800">{year}</span>
                        <span className="text-sm font-bold text-blue-900">
                          {row.targetRenstra[year as keyof typeof row.targetRenstra]}
                        </span>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-3 py-2 align-top">
                  <div className="rounded-lg border border-emerald-100 bg-emerald-50/50 p-2">
                    {years.map((year) => (
                      <div
                        key={`pk-${row.id}-${year}`}
                        className="flex items-center justify-between gap-3 border-b border-emerald-100 py-1.5 last:border-b-0"
                      >
                        <span className="text-xs font-semibold text-emerald-800">{year}</span>
                        <span className="text-sm font-bold text-emerald-900">
                          {row.targetPerjanjian[year as keyof typeof row.targetPerjanjian]}
                        </span>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="px-3 py-2">{row.unitKerja}</td>
                <td className="text-center px-3 py-2">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      title="Edit"
                      aria-label={`Edit ${row.sasaranKegiatan}`}
                      className="table-action-icon-btn"
                    >
                      <IconPencil size={18} />
                    </button>
                    <button
                      title="Lihat"
                      aria-label={`Lihat ${row.sasaranKegiatan}`}
                      className="table-action-icon-btn table-action-icon-btn--neutral"
                    >
                      <IconEye size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableCard>
    </LayoutShell>
  );
}
