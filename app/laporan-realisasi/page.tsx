import React from "react";

const dummyData = [
  { no: 1, nama: "Program A", anggaran: "Rp 1.000.000", realisasi: "Rp 800.000" },
  { no: 2, nama: "Program B", anggaran: "Rp 2.000.000", realisasi: "Rp 1.500.000" },
  { no: 3, nama: "Program C", anggaran: "Rp 3.000.000", realisasi: "Rp 2.700.000" },
];

export default function LaporanRealisasiPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Laporan Realisasi</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">No</th>
              <th className="px-4 py-2 border-b">Nama Program</th>
              <th className="px-4 py-2 border-b">Anggaran</th>
              <th className="px-4 py-2 border-b">Realisasi</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((row) => (
              <tr key={row.no} className="text-center">
                <td className="px-4 py-2 border-b">{row.no}</td>
                <td className="px-4 py-2 border-b">{row.nama}</td>
                <td className="px-4 py-2 border-b">{row.anggaran}</td>
                <td className="px-4 py-2 border-b">{row.realisasi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
