"use client";
import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import TableCard from "@/components/TableCard";
import { IconEye, IconPencil, IconTrash } from "@tabler/icons-react";

const rencanaAksiRows = [
  {
    id: 1,
    rencanaAksi: "Pelaksanaan Pelatihan Dasar CPNS Gelombang I",
    target: 200,
    tw1: 50,
    tw2: 50,
    tw3: 50,
    tw4: 50,
  },
  {
    id: 2,
    rencanaAksi: "Penyusunan Modul Pelatihan Kepemimpinan Tingkat III",
    target: 4,
    tw1: 1,
    tw2: 1,
    tw3: 1,
    tw4: 1,
  },
  {
    id: 3,
    rencanaAksi: "Pengembangan Platform Pembelajaran Digital LAN",
    target: 3,
    tw1: 1,
    tw2: 1,
    tw3: 1,
    tw4: 0,
  },
  {
    id: 4,
    rencanaAksi: "Pelaksanaan Assessment Center ASN",
    target: 150,
    tw1: 30,
    tw2: 40,
    tw3: 40,
    tw4: 40,
  },
  {
    id: 5,
    rencanaAksi: "Evaluasi dan Penyusunan Laporan Kinerja Semester I",
    target: 1,
    tw1: 0,
    tw2: 1,
    tw3: 0,
    tw4: 0,
  },
];

export default function RencanaAksiPage() {
  return (
    <LayoutShell>
      <PageHeader
        title="Rencana Aksi"
        description="Rincian rencana aksi dan target capaian per triwulan."
      />
      <TableCard
        title="Daftar Rencana Aksi"
        toolbar={
          <button className="table-action-btn text-sm flex items-center gap-1">
            + Tambah Rencana Aksi
          </button>
        }
      >
        <table className="min-w-full text-sm table-head-wrap table-like-api">
          <thead>
            <tr className="text-gray-500 uppercase text-xs">
              <th className="text-center py-2 px-2">No</th>
              <th className="text-left py-2 px-3">Rencana Aksi</th>
              <th className="text-center py-2 px-3">Target</th>
              <th className="text-center py-2 px-3">TW1</th>
              <th className="text-center py-2 px-3">TW2</th>
              <th className="text-center py-2 px-3">TW3</th>
              <th className="text-center py-2 px-3">TW4</th>
              <th className="text-center py-2 px-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {rencanaAksiRows.map((row) => (
              <tr key={row.id}>
                <td className="text-center py-3 px-2 font-semibold text-blue-700">{row.id}</td>
                <td className="py-3 px-3 text-gray-800">{row.rencanaAksi}</td>
                <td className="text-center py-3 px-3 font-semibold text-gray-700">{row.target}</td>
                <td className="text-center py-3 px-3 text-gray-700">{row.tw1}</td>
                <td className="text-center py-3 px-3 text-gray-700">{row.tw2}</td>
                <td className="text-center py-3 px-3 text-gray-700">{row.tw3}</td>
                <td className="text-center py-3 px-3 text-gray-700">{row.tw4}</td>
                <td className="py-3 px-3">
                  <div className="flex items-center justify-center gap-1">
                    <button className="table-action-icon-btn" title="Detail">
                      <IconEye size={16} />
                    </button>
                    <button className="table-action-icon-btn" title="Edit">
                      <IconPencil size={16} />
                    </button>
                    <button
                      className="table-action-icon-btn"
                      style={{ background: "#fef2f2", borderColor: "#fecaca", color: "#dc2626" }}
                      title="Hapus"
                    >
                      <IconTrash size={16} />
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
