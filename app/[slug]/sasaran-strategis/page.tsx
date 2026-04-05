
"use client";
import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";

import TableWithAPI from "@/components/ui/TableWithAPI";
import { IconEye, IconPencil } from "@tabler/icons-react";

const years = [2025, 2026, 2027, 2028, 2029];

const data = [
  {
    id: 1,
    sasaran_strategis: "Meningkatnya Akuntabilitas Kinerja Instansi LAN",
    indikator_kinerja: "Nilai SAKIP LAN",
    target_renstra: { 2025: "A", 2026: "A", 2027: "A", 2028: "A", 2029: "A" },
    target_perjanjian: { 2025: "A", 2026: "A", 2027: "A", 2028: "A", 2029: "A" },
    capaian: { 2025: "A", 2026: "A", 2027: "A", 2028: "A", 2029: "A" },
    persentase: { 2025: "100%", 2026: "100%", 2027: "100%", 2028: "100%", 2029: "100%" },
  },
  {
    id: 2,
    sasaran_strategis: "Meningkatnya Profesionalisme ASN Nasional",
    indikator_kinerja: "Indeks Profesionalitas ASN Nasional",
    target_renstra: { 2025: 82, 2026: 84, 2027: 85, 2028: 86, 2029: 87 },
    target_perjanjian: { 2025: 81, 2026: 83, 2027: 85, 2028: 85, 2029: 86 },
    capaian: { 2025: 78, 2026: 80, 2027: 82, 2028: 83, 2029: 84 },
    persentase: { 2025: "95.12%", 2026: "95.24%", 2027: "96.47%", 2028: "96.51%", 2029: "96.55%" },
  },
  {
    id: 3,
    sasaran_strategis: "Meningkatnya Kualitas Kebijakan Administrasi Negara",
    indikator_kinerja: "Indeks Kualitas Kebijakan Administrasi Negara",
    target_renstra: { 2025: 4, 2026: 5, 2027: 6, 2028: 7, 2029: 8 },
    target_perjanjian: { 2025: 4, 2026: 5, 2027: 5, 2028: 6, 2029: 7 },
    capaian: { 2025: 3, 2026: 4, 2027: 5, 2028: 6, 2029: 7 },
    persentase: { 2025: "75%", 2026: "80%", 2027: "83.33%", 2028: "85.71%", 2029: "87.5%" },
  },
  {
    id: 4,
    sasaran_strategis: "Meningkatnya Transformasi Digital Layanan Pembelajaran ASN",
    indikator_kinerja: "Persentase Layanan Pembelajaran ASN Terdigitalisasi",
    target_renstra: { 2025: 8, 2026: 10, 2027: 12, 2028: 14, 2029: 16 },
    target_perjanjian: { 2025: 7, 2026: 8, 2027: 10, 2028: 12, 2029: 14 },
    capaian: { 2025: 6, 2026: 7, 2027: 9, 2028: 11, 2029: 13 },
    persentase: { 2025: "85.71%", 2026: "87.5%", 2027: "90%", 2028: "91.67%", 2029: "92.86%" },
  },
  {
    id: 5,
    sasaran_strategis: "Meningkatnya Kepuasan Pemangku Kepentingan atas Layanan LAN",
    indikator_kinerja: "Indeks Kepuasan Pemangku Kepentingan",
    target_renstra: { 2025: 86, 2026: 88, 2027: 90, 2028: 92, 2029: 94 },
    target_perjanjian: { 2025: 84, 2026: 86, 2027: 88, 2028: 90, 2029: 92 },
    capaian: { 2025: 82, 2026: 84, 2027: 85, 2028: 87, 2029: 89 },
    persentase: { 2025: "97.62%", 2026: "97.67%", 2027: "96.59%", 2028: "96.67%", 2029: "96.74%" },
  },
  {
    id: 6,
    sasaran_strategis: "Meningkatnya Efektivitas Tata Kelola Organisasi dan SDM Internal",
    indikator_kinerja: "Indeks Efektivitas Tata Kelola Organisasi LAN",
    target_renstra: { 2025: 91, 2026: 93, 2027: 95, 2028: 96, 2029: 97 },
    target_perjanjian: { 2025: 90, 2026: 92, 2027: 93, 2028: 94, 2029: 95 },
    capaian: { 2025: 88, 2026: 90, 2027: 91, 2028: 92, 2029: 93 },
    persentase: { 2025: "97.78%", 2026: "97.83%", 2027: "97.85%", 2028: "97.87%", 2029: "97.89%" },
  },
];

export default function SasaranStrategisPage() {
  return (
    <LayoutShell>
      <PageHeader
        title="Sasaran Strategis (SS)"
        description="Peta jalan strategis dan indikator kinerja makro (Level JPT Utama)."
      />
      <TableWithAPI
        columns={[
          { key: 'no', label: 'No', className: 'whitespace-normal break-words text-center' },
          {
            key: 'sasaran_strategis',
            label: 'Sasaran\nStrategis',
            className: 'col-sasaran whitespace-normal break-words',
            width: 260,
          },
          {
            key: 'indikator_kinerja',
            label: 'Indikator Kinerja\nSasaran Strategis',
            className: 'col-indikator whitespace-normal break-words',
            width: 260,
          },
          {
            key: 'target_renstra',
            label: 'Target Indikator\nRenstra',
            className: 'whitespace-normal break-words',
            render: (row) => (
              <div className="rounded-lg border border-blue-100 bg-blue-50/50 p-2">
                {years.map((year) => (
                  <div
                    key={`renstra-${row.id}-${year}`}
                    className="flex items-center justify-between gap-3 border-b border-blue-100 py-1.5 last:border-b-0"
                  >
                    <span className="text-xs font-semibold text-blue-800">{year}</span>
                    <span className="text-sm font-bold text-blue-900">{row.target_renstra[year]}</span>
                  </div>
                ))}
              </div>
            ),
          },
          {
            key: 'target_perjanjian',
            label: 'Target Kinerja\nPerjanjian Kinerja',
            className: 'whitespace-normal break-words',
            render: (row) => (
              <div className="rounded-lg border border-emerald-100 bg-emerald-50/50 p-2">
                {years.map((year) => (
                  <div
                    key={`pk-${row.id}-${year}`}
                    className="flex items-center justify-between gap-3 border-b border-emerald-100 py-1.5 last:border-b-0"
                  >
                    <span className="text-xs font-semibold text-emerald-800">{year}</span>
                    <span className="text-sm font-bold text-emerald-900">{row.target_perjanjian[year]}</span>
                  </div>
                ))}
              </div>
            ),
          },
          {
            key: 'capaian',
            label: 'Capaian\nKinerja',
            className: 'whitespace-normal break-words',
            render: (row) => (
              <div className="rounded-lg border border-violet-100 bg-violet-50/50 p-2">
                {years.map((year) => (
                  <div
                    key={`capaian-${row.id}-${year}`}
                    className="flex items-center justify-between gap-3 border-b border-violet-100 py-1.5 last:border-b-0"
                  >
                    <span className="text-xs font-semibold text-violet-800">{year}</span>
                    <span className="text-sm font-bold text-violet-900">{row.capaian[year]}</span>
                  </div>
                ))}
              </div>
            ),
          },
          {
            key: 'persentase',
            label: 'Persentase Capaian\nKinerja',
            className: 'whitespace-normal break-words',
            render: (row) => (
              <div className="rounded-lg border border-amber-100 bg-amber-50/60 p-2">
                {years.map((year) => (
                  <div
                    key={`persentase-${row.id}-${year}`}
                    className="flex items-center justify-between gap-3 border-b border-amber-100 py-1.5 last:border-b-0"
                  >
                    <span className="text-xs font-semibold text-amber-800">{year}</span>
                    <span className="text-sm font-bold text-amber-900">{row.persentase[year]}</span>
                  </div>
                ))}
              </div>
            ),
          },
          {
            key: 'aksi',
            label: 'Aksi',
            className: 'whitespace-normal break-words text-center',
            render: (row) => (
              <div className="flex gap-2 justify-center">
                <button title="Edit" aria-label={`Edit ${row.sasaran_strategis}`} className="table-action-icon-btn">
                  <IconPencil size={20} />
                </button>
                <button title="Lihat" aria-label={`Lihat ${row.sasaran_strategis}`} className="table-action-icon-btn table-action-icon-btn--neutral">
                  <IconEye size={20} />
                </button>
              </div>
            ),
            width: 140,
          },
        ]}
        data={data.map((row, i) => ({
          ...row,
          no: i + 1,
        }))}
        pageSize={10}
        rowKey="id"
        showPagination={false}
      />
    </LayoutShell>
  );
}
