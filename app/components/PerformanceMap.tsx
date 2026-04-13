'use client';

import React, { useState } from 'react';
import useSWR from 'swr';
import { IconTarget, IconChartBar, IconTrendingUp, IconPercentage } from '@tabler/icons-react';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function PerformanceMap() {
  const { data: sasaranRes, isLoading: sasLoading } = useSWR('/api/sasaran-strategis', fetcher);
  const { data: indikatorRes, isLoading: indikLoading } = useSWR('/api/indikator-kinerja', fetcher);
  const { data: targetRes, isLoading: targetLoading } = useSWR('/api/target-indikator', fetcher);

  const [activeIndikatorIndexes, setActiveIndikatorIndexes] = useState<Record<number, number>>({});

  const loading = sasLoading || indikLoading || targetLoading;

  if (loading) {
    return (
      <div className="w-full overflow-x-auto py-10 px-4 flex justify-center bg-slate-50/50 rounded-2xl border border-slate-100">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-20 w-full max-w-2xl bg-gray-300 rounded-2xl animate-pulse" />
          <div className="w-1 h-10 bg-gray-300" />
          <div className="w-96 h-64 bg-gray-200 rounded-xl animate-pulse" />
          <div className="w-1 h-10 bg-gray-300" />
          <div className="h-12 min-w-[280px] bg-gray-300 rounded-2xl animate-pulse" />
        </div>
      </div>
    );
  }

  const sasaranData = sasaranRes?.data;
  const indikatorData = indikatorRes?.data;

  if (!sasaranData?.length || !indikatorData?.length) {
    return (
      <div className="w-full overflow-x-auto py-10 px-4 flex justify-center bg-slate-50/50 rounded-2xl border border-slate-100">
        <div className="text-center text-gray-500 py-20">No performance data available</div>
      </div>
    );
  }

  // Group indikators by sasaranId
  const indikatorBySasaran = indikatorData.reduce((acc: Record<number, any[]>, indikator: any) => {
    if (!acc[indikator.sasaranId]) {
      acc[indikator.sasaranId] = [];
    }
    acc[indikator.sasaranId].push(indikator);
    return acc;
  }, {});

  // Group targets by indikatorId, take latest
  const targetByIndikator = targetRes?.data?.reduce((acc: Record<number, any>, target: any) => {
    const indId = target.indikatorId;
    if (!acc[indId] || new Date(target.createdAt) > new Date(acc[indId].createdAt)) {
      acc[indId] = target;
    }
    return acc;
  }, {}) || {};

  return (
    <div className="w-full overflow-x-auto py-10 px-4 space-y-12">
      {sasaranData.map((sasaran: any, index: number) => {
        const indikators = indikatorBySasaran[sasaran.id] || [];
        if (indikators.length === 0) return null;

        const activeIndikatorIndex = activeIndikatorIndexes[sasaran.id] ?? 0;
        const activeIndikator = indikators[activeIndikatorIndex];

        const getTargetRealisasi = (indId: number) => {
          const target = targetByIndikator[indId];
          return target ? {
            target: target.target || '-',
            realisasi: target.realisasi || '-',
            capaian: target.realisasi && target.target ? ((parseFloat(target.realisasi) / parseFloat(target.target)) * 100).toFixed(1) + '%' : '-%'
          } : { target: '-', realisasi: '-', capaian: '-%' };
        };

        const metrics = getTargetRealisasi(activeIndikator.id);

        return (
          <div key={sasaran.id} className="flex justify-center bg-slate-50/50 rounded-2xl border border-slate-100 py-10 px-4">
            <div className="flex flex-col items-center">
              {/* Top Node */}
              <div className="bg-emerald-600 text-white rounded-2xl shadow-lg shadow-emerald-600/20 px-8 py-4 w-full max-w-2xl text-center z-10 relative">
                <h2 className="text-xl md:text-2xl font-bold tracking-wide">{sasaran.sasaranText}</h2>
              </div>

              {/* Vertical Line */}
              <div className="w-1 h-10 bg-slate-300"></div>

              {/* Main Body */}
              <div className="flex flex-col md:flex-row items-center md:items-stretch relative">
                
              {/* Indikator Tabs */}
                {indikators.length > 1 && (
                  <div className="w-full max-w-sm mb-4 flex bg-slate-100 rounded-xl p-1">
                    {indikators.map((ind: any, idx: number) => (
                      <button
                        key={ind.id}
                        onClick={() => setActiveIndikatorIndexes(prev => ({ ...prev, [sasaran.id]: idx }))}
                        className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                          idx === activeIndikatorIndex
                            ? 'bg-white shadow-sm text-slate-800'
                            : 'text-slate-500 hover:text-slate-700'
                        }`}
                      >
                        {ind.kode}
                      </button>
                    ))}
                  </div>
                )}

                {/* Left Panel: Capaian Utama */}
                <div className="flex items-stretch bg-white rounded-xl border-2 border-amber-400 shadow-xl overflow-hidden relative z-10 w-full max-w-sm md:mr-16 mb-8 md:mb-0 hover:shadow-2xl transition-shadow duration-300">
                  <div className="bg-amber-400 p-4 flex items-center justify-center text-amber-900 w-20">
                     <IconTarget size={40} className="drop-shadow-sm" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-center">
                    <p className="text-center font-semibold text-slate-800 mb-1 leading-snug">
                      {activeIndikator.namaIndikator}
                    </p>
                    <p className="text-center text-xs font-medium text-slate-500 mb-4">
                      (Pendanaan: -)
                    </p>
                    
                    <div className="bg-blue-50/80 rounded-xl p-4 text-center mb-4 border border-blue-100">
                      <h4 className="text-xs font-bold text-blue-700/80 uppercase tracking-wider mb-1">Capaian 2026</h4>
                      <h1 className="text-4xl font-extrabold text-blue-700">{metrics.capaian}</h1>
                    </div>

                    <div className="flex justify-between text-sm bg-slate-50 rounded-lg p-2 border border-slate-100">
                      <div className="text-center w-1/2 px-2 border-r border-slate-200">
                        <div className="font-bold text-slate-700 text-xs uppercase tracking-wider mb-1">Target</div>
                        <div className="text-slate-500 font-semibold">{metrics.target}</div>
                      </div>
                      <div className="text-center w-1/2 px-2">
                        <div className="font-bold text-slate-700 text-xs uppercase tracking-wider mb-1">Realisasi</div>
                        <div className="text-slate-500 font-semibold">{metrics.realisasi}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connectors for Right Menu (Desktop Only) */}
                <div className="hidden md:block absolute left-[384px] top-0 bottom-0 w-16 z-0">
                   <div className="absolute top-1/2 left-0 w-8 h-1 bg-slate-300 -translate-y-1/2"></div>
                   <div className="absolute top-[16%] bottom-[16%] left-8 w-1 bg-slate-300"></div>
                   <div className="absolute top-[16%] left-8 w-8 h-1 bg-slate-300"></div>
                   <div className="absolute top-1/2 left-8 w-8 h-1 bg-slate-300 -translate-y-1/2"></div>
                   <div className="absolute bottom-[16%] left-8 w-8 h-1 bg-slate-300"></div>
                   <div className="absolute top-1/2 left-0 w-3 h-3 bg-slate-400 rounded-full -translate-y-1/2 -ml-1"></div>
                </div>

                {/* Mobile connecting line */}
                <div className="md:hidden w-1 h-8 bg-slate-300 -mt-8 mb-0"></div>

                {/* Right Panel: Additional Metrics */}
                <div className="flex flex-col justify-between z-10 w-full max-w-xs gap-4 relative py-2">
                   {/* Sub Item 1 */}
                   <div className="flex bg-white rounded-xl border border-amber-300 shadow-md hover:shadow-lg transition-shadow overflow-hidden h-[84px] relative group cursor-default">
                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
                     <div className="p-4 flex-1 flex flex-col justify-center pl-5">
                       <h5 className="text-sm font-bold text-emerald-600 mb-1">Pertumbuhan {activeIndikator.satuan}</h5>
                       <div className="flex gap-3 text-xs font-medium text-slate-600">
                         <span>Capaian: <span className="font-bold text-slate-800">{metrics.capaian}</span></span>
                         <span className="text-slate-300">|</span>
                         <span>Realisasi: <span className="font-bold text-slate-800">{metrics.realisasi}</span></span>
                       </div>
                     </div>
                     <div className="bg-amber-100 p-4 flex items-center justify-center text-amber-600 border-l border-amber-200">
                       <IconTrendingUp size={24} />
                     </div>
                   </div>

                   {/* Sub Item 2 */}
                   <div className="flex bg-white rounded-xl border border-amber-300 shadow-md hover:shadow-lg transition-shadow overflow-hidden h-[84px] relative group cursor-default">
                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                     <div className="p-4 flex-1 flex flex-col justify-center pl-5">
                       <p className="text-xs font-semibold text-slate-600 mb-1">Capaian {activeIndikator.satuan} thd. target akhir RPJMD</p>
                       <p className="text-lg font-extrabold text-blue-600">{metrics.capaian}</p>
                     </div>
                     <div className="bg-amber-100 p-4 flex items-center justify-center text-amber-600 border-l border-amber-200">
                       <IconPercentage size={24} />
                     </div>
                   </div>

                   {/* Sub Item 3 */}
                   <div className="flex rounded-xl border border-amber-300 shadow-md hover:shadow-lg transition-shadow overflow-hidden h-[84px] relative group cursor-default bg-slate-50">
                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-400"></div>
                     <div className="p-4 flex-1 flex flex-col justify-center pl-5">
                       <p className="text-xs font-medium text-slate-500 leading-relaxed">Belum ada data dari rata-rata nasional</p>
                     </div>
                     <div className="bg-slate-200 p-4 flex items-center justify-center text-slate-500 border-l border-slate-300">
                       <IconChartBar size={24} />
                     </div>
                   </div>
                </div>

              </div>

              {/* Vertical Line connecting to bottom */}
              <div className="w-1 h-10 bg-slate-300 mt-4 md:mt-0"></div>

              {/* Bottom Node */}
              <div className="bg-blue-700 text-white rounded-2xl shadow-lg shadow-blue-700/20 px-8 py-3 text-center z-10 relative min-w-70">
                <h3 className="text-lg font-bold tracking-wide">{sasaran.kode} ({activeIndikator.kode})</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

