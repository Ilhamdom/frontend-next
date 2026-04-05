"use client";
import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import TableCard from "@/components/TableCard";
import { IconEye, IconPencil } from "@tabler/icons-react";

const years = [2025, 2026, 2027, 2028, 2029];

const programRows = [
  {
    id: 1,
    sasaranProgram: "Program Pelatihan ASN",
    satuan: "Orang",
    targetRenstra: { 2025: 800, 2026: 900, 2027: 1000, 2028: 1100, 2029: 1200 },
    targetPerjanjian: { 2025: 780, 2026: 880, 2027: 980, 2028: 1050, 2029: 1150 },
    unitKerja: "Pusbangkom ASN",
  },
  {
    id: 2,
    sasaranProgram: "Program Penguatan Inovasi Kelembagaan",
    satuan: "Inovasi",
    targetRenstra: { 2025: 8, 2026: 10, 2027: 12, 2028: 14, 2029: 16 },
    targetPerjanjian: { 2025: 7, 2026: 9, 2027: 11, 2028: 13, 2029: 15 },
    unitKerja: "Puslatbang KDOD",
  },
  {
    id: 3,
    sasaranProgram: "Program Digitalisasi Layanan Pembelajaran",
    satuan: "Layanan",
    targetRenstra: { 2025: 5, 2026: 7, 2027: 9, 2028: 11, 2029: 13 },
    targetPerjanjian: { 2025: 5, 2026: 6, 2027: 8, 2028: 10, 2029: 12 },
    unitKerja: "Pusdatin LAN",
  },
];

export default function SasaranProgramPage() {
  return (
    <LayoutShell>
      <PageHeader
        title="Sasaran Program (SP)"
        description="Penjabaran strategis ke tingkat program kerja (Level JPT Pratama)."
      />
      <TableCard
        title="Daftar Sasaran Program"
        toolbar={
          <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
            <option>Filter by SS: Semua</option>
          </select>
        }
      >
        <table className="min-w-full text-sm table-head-wrap table-like-api">
          <thead>
            <tr className="text-gray-500 uppercase text-xs">
              <th className="text-center py-2 px-2">No</th>
              <th className="text-left py-2 px-3">Sasaran<br />Program</th>
              <th className="text-left py-2 px-3">Satuan</th>
              <th className="text-left py-2 px-3">Target Kinerja<br />Renstra</th>
              <th className="text-left py-2 px-3">Target Kinerja<br />Perjanjian Kinerja</th>
              <th className="text-left py-2 px-3">Unit<br />Kerja</th>
              <th className="text-center py-2 px-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {programRows.map((row, idx) => (
              <tr key={row.id}>
                <td className="text-center px-2 py-2 font-semibold">{idx + 1}</td>
                <td className="px-3 py-2">{row.sasaranProgram}</td>
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
                      aria-label={`Edit ${row.sasaranProgram}`}
                      className="table-action-icon-btn"
                    >
                      <IconPencil size={18} />
                    </button>
                    <button
                      title="Lihat"
                      aria-label={`Lihat ${row.sasaranProgram}`}
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
