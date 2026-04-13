"use client";

import AdminPageHeader from "../../../src/components/admin/AdminPageHeader";
import AdminStatusBadge from "../../../src/components/admin/AdminStatusBadge";
import AdminProgressBar from "../../../src/components/admin/AdminProgressBar";
import SasaranKegiatanFormModal from "../../../src/components/admin/SasaranKegiatanFormModal";
import React, { useState } from "react";
import { useSearch } from "../../../src/context/SearchContext";
import { highlightText } from "../../../src/utils/textHighlight";

// Dummy summary data
const summaryCards = [
  { value: 3, label: "SK", title: "TOTAL KEGIATAN" },
  { value: 1, label: "", title: "SELESAI" },
  { value: "65.0%", label: "", title: "RATA-RATA PROGRES" },
];

// Dummy table data
const initialRows = [
  {
    nama: "Penyusunan Kurikulum PKN I",
    sp: "SP-02",
    unit: "Pusbangkom",
    timeline: "Mar - Apr 2026",
    progress: 100,
    status: "SELESAI",
  },
  {
    nama: "Workshop Laboratorium Inovasi Daerah",
    sp: "SP-03",
    unit: "Puslitbang",
    timeline: "Jun 2026",
    progress: 0,
    status: "BELUM MULAI",
  },
  {
    nama: "Penyusunan Laporan Kinerja (LAKIP)",
    sp: "SP-01",
    unit: "Biro Perencanaan",
    timeline: "Jan - Feb 2026",
    progress: 95,
    status: "HAMPIR SELESAI",
  },
];

export default function AdminSasaranKegiatanPage() {
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
  const handleDelete = (nama: string) => {
    if (confirm("Yakin ingin menghapus sasaran kegiatan ini?")) {
      setDataRows(dataRows.filter(r => r.nama !== nama));
    }
  };
  const handleSave = (newData: any) => {
    if (modalMode === "create") {
      setDataRows([newData, ...dataRows]);
    } else {
      setDataRows(dataRows.map(r => r.nama === newData.nama ? { ...r, ...newData } : r));
    }
  };

  const filteredRows = dataRows.filter(r => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      r.nama.toLowerCase().includes(q) ||
      (r.sp && r.sp.toLowerCase().includes(q)) ||
      (r.unit && r.unit.toLowerCase().includes(q))
    );
  });

  return (
    <div className="flex flex-col w-full">
      {/* Header & Action Row */}
      <div className="max-w-screen-lg mx-auto mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-1">Sasaran Kegiatan (SK)</h1>
          <p className="text-gray-500 text-sm">Level Administrator/Pengawas</p>
        </div>
        <div className="flex gap-2 items-center">
          <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
            <option>Semua Unit Kerja</option>
          </select>
          <button className="bg-blue-800 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-900" onClick={handleAdd}>+ Tambah SK</button>
        </div>
      </div>
      {/* Summary Cards */}
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {summaryCards.map((c, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-brand-blue-900">{c.value}</span>
              {c.label && <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full font-bold">{c.label}</span>}
            </div>
            <div className="text-xs text-gray-500 font-bold tracking-widest uppercase mt-1">{c.title}</div>
          </div>
        ))}
      </div>
      {/* Table Card */}
      <div className="max-w-screen-lg mx-auto bg-white rounded-2xl border border-gray-200 p-0 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-50 text-gray-500 uppercase text-xs">
              <th className="py-3 px-4 text-left font-bold">NAMA KEGIATAN</th>
              <th className="py-3 px-4 text-left font-bold">TURUNAN DARI SP</th>
              <th className="py-3 px-4 text-left font-bold">UNIT KERJA</th>
              <th className="py-3 px-4 text-left font-bold">TIMELINE</th>
              <th className="py-3 px-4 text-center font-bold">PROGRES</th>
              <th className="py-3 px-4 text-center font-bold">STATUS</th>
              <th className="py-3 px-4 text-center font-bold">AKSI</th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, i) => (
              <tr key={i} className="border-b last:border-b-0">
                <td className="py-3 px-4 align-top font-semibold text-brand-blue-900">{highlightText(row.nama, searchQuery)}</td>
                <td className="py-3 px-4 align-top">
                  <span className="text-xs bg-brand-gold-50 text-brand-gold-700 px-2 py-0.5 rounded-full font-bold">{`Turunan dari: `}{highlightText(row.sp, searchQuery)}</span>
                </td>
                <td className="py-3 px-4 align-top">{highlightText(row.unit, searchQuery)}</td>
                <td className="py-3 px-4 align-top">
                  <span className="inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">{highlightText(row.timeline, searchQuery)}</span>
                </td>
                <td className="py-3 px-4 text-center align-top min-w-[120px]">
                  <div className="flex flex-col gap-1 items-center">
                    <span className="text-xs font-semibold text-gray-700">{row.progress}%</span>
                    <AdminProgressBar value={row.progress} />
                  </div>
                </td>
                <td className="py-3 px-4 text-center align-top">
                  <AdminStatusBadge status={row.status} />
                </td>
                <td className="py-3 px-4 text-center align-top">
                  <div className="flex gap-1 justify-center">
                    <button className="p-1 border border-gray-200 rounded hover:bg-gray-50" title="View" onClick={() => handleView(row)}>
                      <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" stroke="#2563eb" strokeWidth="1.2"/><circle cx="8" cy="8" r="2.5" stroke="#2563eb" strokeWidth="1.2"/></svg>
                    </button>
                    <button className="p-1 border border-gray-200 rounded hover:bg-gray-50" title="Edit" onClick={() => handleEdit(row)}>
                      <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M3 12.5V13h.5l7.1-7.1-1.5-1.5L3 11.5v1Z" stroke="#0B1F3A" strokeWidth="1.2"/><path d="M12.5 5.5l-2-2" stroke="#0B1F3A" strokeWidth="1.2"/></svg>
                    </button>
                    <button className="p-1 border border-gray-200 rounded hover:bg-red-50 text-red-600" title="Delete" onClick={() => handleDelete(row.nama)}>
                      <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M6 6l4 4M10 6l-4 4" stroke="#e11d48" strokeWidth="1.5"/></svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SasaranKegiatanFormModal open={modalOpen} onClose={() => setModalOpen(false)} mode={modalMode} initialData={selectedData} onSave={handleSave} />
    </div>
  );
}
