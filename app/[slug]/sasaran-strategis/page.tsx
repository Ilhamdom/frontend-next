"use client";
import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import TableWithAPI from "@/components/ui/TableWithAPI";
import { IconEye, IconPencil } from "@tabler/icons-react";
import useSWR from 'swr';

const years = [2025, 2026, 2027, 2028, 2029];

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function SasaranStrategisPage() {
  const { data: sasaranRes, isLoading: sasLoading } = useSWR('/api/sasaran-strategis', fetcher);
  const { data: indikatorRes, isLoading: indikLoading } = useSWR('/api/indikator-kinerja', fetcher);
  const { data: targetRes, isLoading: targetLoading } = useSWR('/api/target-indikator', fetcher);

  const loading = sasLoading || indikLoading || targetLoading;

  let data = [];

  if (!loading && sasaranRes?.success && indikatorRes?.success && targetRes?.success) {
    const sasaranMap: Record<number, any> = sasaranRes.data.reduce((acc: Record<number, any>, s: {id: number}) => {
      acc[s.id] = s;
      return acc;
    }, {});
    
    const targetMap: Record<string, string> = {};
    targetRes.data.forEach((target: any) => {
      if (target.tahun) {
        targetMap[`${target.indikatorId}-${target.tahun.tahun}`] = target.target;
      }
    });
    
    data = indikatorRes.data.map((indikator: any) => {
      const sasaran = sasaranMap[indikator.sasaranId];
      if (!sasaran) return null;
      return {
        id: indikator.id,
        sasaran_strategis: sasaran.sasaranText,
        indikator_kinerja: indikator.namaIndikator,
        target_renstra: years.reduce((acc, y) => ({...acc, [y]: targetMap[`${indikator.id}-${y}`] || '-'}), {}),
        target_perjanjian: years.reduce((acc, y) => ({...acc, [y]: '-'}), {}),
        capaian: years.reduce((acc, y) => ({...acc, [y]: '-'}), {}),
        persentase: years.reduce((acc, y) => ({...acc, [y]: '-'}), {}),
      };
    }).filter(Boolean);
  }

  if (loading) {
    data = [];
  }

  if (!data.length && !loading) {
    data = [];
  }

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
        data={data.map((row: any, i: number) => ({
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

