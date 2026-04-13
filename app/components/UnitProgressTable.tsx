"use client";
import React from "react";

interface UnitProgressTableProps {
  role: "admin" | "user";
}

type Row = {
  unit: string;
  sk: number;
  anggaran: string;
  progress: number;
};

const adminData: Row[] = [
  { unit: "Pusbangkom Pejabat Negara", sk: 12, anggaran: "Rp 2.500.000.000", progress: 85 },
  { unit: "Pusat Inovasi Administrasi Negara", sk: 8, anggaran: "Rp 1.250.000.000", progress: 45 },
  { unit: "Pusdatin Kelembagaan", sk: 15, anggaran: "Rp 4.200.000.000", progress: 92 },
  { unit: "Pusat Kajian Kebijakan Administrasi", sk: 10, anggaran: "Rp 850.000.000", progress: 30 },
  { unit: "Biro Perencanaan dan Keuangan", sk: 8, anggaran: "Rp 150.000.000", progress: 68 },
];

const userData: Row[] = [
  { unit: "Pusbangkom Pejabat Negara", sk: 12, anggaran: "Rp 2.500.000.000", progress: 85 },
];

function getProgressColor(progress: number) {
  if (progress >= 80) return "bg-emerald-500";
  if (progress >= 50) return "bg-yellow-400";
  return "bg-pink-400";
}

export default function UnitProgressTable({ role }: UnitProgressTableProps) {
  const data = role === "admin" ? adminData : userData;
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm mt-12">
      <div className="flex items-center justify-between px-6 pt-6 pb-3">
        <div>
          <div className="text-lg font-bold text-blue-900 mb-1">Detail Kemajuan Unit Kerja</div>
          <div className="text-xs text-gray-500">Pemantauan alokasi dan realisasi pada seluruh unit kerja LAN.</div>
        </div>
        <button className="border border-blue-800 text-blue-800 px-4 py-1.5 rounded-lg font-semibold text-xs hover:bg-blue-50">Unduh Rekap</button>
      </div>
      <div className="overflow-x-auto px-6 pb-6">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-500 uppercase text-xs">
              <th className="py-2 px-3 text-left font-bold">#</th>
              <th className="py-2 px-3 text-left font-bold">Nama Unit Kerja</th>
              <th className="py-2 px-3 text-center font-bold">Jml Sasaran Kegiatan</th>
              <th className="py-2 px-3 text-center font-bold">Alokasi Anggaran</th>
              <th className="py-2 px-3 text-center font-bold">Progres Kinerja</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={row.unit} className="border-b last:border-b-0">
                <td className="py-2 px-3">
                  <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold rounded px-2 py-0.5">{i + 1}</span>
                </td>
                <td className="py-2 px-3 font-bold text-blue-900">{row.unit}</td>
                <td className="py-2 px-3 text-center">
                  <span className="text-lg font-extrabold text-blue-900">{row.sk}</span>
                  <span className="ml-1 text-xs text-gray-500 font-semibold">SK</span>
                </td>
                <td className="py-2 px-3 text-center font-mono">{row.anggaran}</td>
                <td className="py-2 px-3">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-2 rounded-full ${getProgressColor(row.progress)}`} style={{ width: `${row.progress}%` }} />
                    </div>
                    <span className="text-xs font-bold" style={{ minWidth: 32 }}>{row.progress}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
