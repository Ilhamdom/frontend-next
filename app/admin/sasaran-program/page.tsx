"use client";
import AdminPageHeader from "../../../src/components/admin/AdminPageHeader";
import AdminTableCard from "../../../src/components/admin/AdminTableCard";
import AdminProgressBar from "../../../src/components/admin/AdminProgressBar";
import SasaranProgramFormModal from "../../../src/components/admin/SasaranProgramFormModal";
import React, { useState } from "react";
import { useSearch } from "../../../src/context/SearchContext";
import { highlightText } from "../../../src/utils/textHighlight";

const initialRows = [
  { kode: "SP-01", ss: "SS-01", nama: "Penyusunan Kurikulum PKN I", pic: "Pusbangkom", indikator: "Jumlah kurikulum disusun", progress: 80 },
  { kode: "SP-02", ss: "SS-02", nama: "Workshop Laboratorium Inovasi", pic: "Puslitbang", indikator: "Jumlah workshop", progress: 60 },
  { kode: "SP-03", ss: "SS-03", nama: "Penyusunan Laporan Kinerja", pic: "Biro Perencanaan", indikator: "Jumlah laporan", progress: 95 },
];

export default function AdminSasaranProgramPage() {
  const { searchQuery } = useSearch();
  const [dataRows, setDataRows] = useState(initialRows);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "edit" | "view">("create");
  const [selectedData, setSelectedData] = useState<any>(null);

  const handleAdd = () => {
    setModalMode("create");
    setSelectedData(null);
    setModalOpen(true);
  };
  const handleView = (row: any) => {
    setModalMode("view");
    setSelectedData(row);
    setModalOpen(true);
  };
  const handleEdit = (row: any) => {
    setModalMode("edit");
    setSelectedData(row);
    setModalOpen(true);
  };
  const handleDelete = (kode: string) => {
    if (confirm("Yakin ingin menghapus sasaran ini?")) {
      setDataRows(dataRows.filter(r => r.kode !== kode));
    }
  };
  const handleSave = (newData: any) => {
    if (modalMode === "create") {
      setDataRows([newData, ...dataRows]);
    } else {
      setDataRows(dataRows.map(r => r.kode === newData.kode ? { ...r, ...newData } : r));
    }
  };

  const filteredRows = dataRows.filter(r => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      r.kode.toLowerCase().includes(q) ||
      r.nama.toLowerCase().includes(q) ||
      r.pic.toLowerCase().includes(q) ||
      (r.ss && r.ss.toLowerCase().includes(q))
    );
  });

  return (
    <div className="flex flex-col w-full">
      <AdminPageHeader
        title="Sasaran Program (SP)"
        description="Penjabaran strategis ke tingkat program kerja (Level JPT Pratama)."
        action={
          <button
            className="bg-blue-800 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-900"
            onClick={handleAdd}
          >
            + Tambah SP
          </button>
        }
      />
      <AdminTableCard
        title="Daftar Sasaran Program"
        toolbar={
          <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
            <option>Filter by SS: Semua</option>
          </select>
        }
      >
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-gray-500 uppercase text-xs">
              <th className="text-left py-2 pr-4">Kode</th>
              <th className="text-left py-2">Sasaran Program</th>
              <th className="text-left py-2">Unit Kerja (PIC)</th>
              <th className="text-left py-2">Indikator Kinerja Program</th>
              <th className="text-left py-2">Progress</th>
              <th className="text-left py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, i) => (
              <tr key={row.kode || i} className="border-b last:border-b-0">
                <td className="font-semibold pr-4 py-2 text-brand-blue-900">{highlightText(row.kode, searchQuery)}</td>
                <td className="py-2">
                  <div className="font-bold text-brand-blue-900">{highlightText(row.nama, searchQuery)}</div>
                  <span className="text-xs bg-brand-gold-50 text-brand-gold-700 px-2 py-0.5 rounded-full mt-1 inline-block">Terkait: {highlightText(row.ss, searchQuery)}</span>
                </td>
                <td className="py-2">{highlightText(row.pic, searchQuery)}</td>
                <td className="py-2">{highlightText(row.indikator, searchQuery)}</td>
                <td className="min-w-[120px] py-2">
                  <div className="flex flex-col gap-1 pr-4">
                    <span className="text-xs font-semibold text-gray-700">{row.progress}%</span>
                    <AdminProgressBar value={Number(row.progress)} />
                  </div>
                </td>
                <td className="py-2">
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded" onClick={() => handleView(row)} title="View">
                      <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#2563eb" strokeWidth="1.2"/><circle cx="8" cy="8" r="2.5" stroke="#2563eb" strokeWidth="1.2"/></svg>
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded" onClick={() => handleEdit(row)} title="Edit">
                      <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M3 12.5V13h.5l7.1-7.1-1.5-1.5L3 11.5v1Z" stroke="#0B1F3A" strokeWidth="1.2"/><path d="M12.5 5.5l-2-2" stroke="#0B1F3A" strokeWidth="1.2"/></svg>
                    </button>
                    <button className="p-1 hover:bg-red-50 text-red-600 rounded" onClick={() => handleDelete(row.kode)} title="Delete">
                      <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M6 6l4 4M10 6l-4 4" stroke="currentColor" strokeWidth="1.5"/></svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </AdminTableCard>
      <SasaranProgramFormModal open={modalOpen} onClose={() => setModalOpen(false)} mode={modalMode} initialData={selectedData} onSave={handleSave} />
    </div>
  );
}
