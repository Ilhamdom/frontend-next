"use client";
import { useEffect, useState } from "react";

interface Misi {
  id: number;
  kode: string;
  misiText: string;
}

interface VisiMisiData {
  visiText: string;
  misi: Misi[];
}

export default function VisiMisiSection() {
  const [data, setData] = useState<VisiMisiData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/visi-misi-tujuan");
        const json = await res.json();
        if (json.success && json.data?.length > 0) {
          const item = json.data[0];
          setData({ visiText: item.visiText, misi: item.misi });
        }
      } catch {}
    }
    fetchData();
  }, []);

  return (
    <section id="visi-misi" className="bg-blue-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2 drop-shadow">VISI & MISI LAN RI</h2>
        <div className="flex justify-center mb-8">
          <span className="block w-16 h-1 bg-yellow-400 rounded-full"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* VISI */}
          <div className="bg-white/90 rounded-2xl border border-blue-200 p-8 flex flex-col items-center shadow-lg">
            <div className="bg-blue-100 text-blue-700 rounded-full p-3 mb-3 shadow">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2"/></svg>
            </div>
            <h3 className="text-lg font-bold text-blue-900 mb-2">VISI</h3>
            <p className="text-xl font-semibold text-blue-900 text-center">
              {data?.visiText || <span className="text-gray-400 animate-pulse">Memuat...</span>}
            </p>
          </div>
          {/* MISI */}
          <div className="bg-white/90 rounded-2xl border border-blue-200 p-8 flex flex-col shadow-lg">
            <div className="bg-yellow-100 text-yellow-700 rounded-full p-3 mb-3 self-center shadow">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/></svg>
            </div>
            <h3 className="text-lg font-bold text-blue-900 mb-2 text-center">MISI</h3>
            <ul className="space-y-4 mt-2">
              {data?.misi?.map((m) => (
                <li key={m.id} className="flex items-start gap-2">
                  <span className="mt-1 text-yellow-500 shrink-0">
                    <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2"/></svg>
                  </span>
                  <span className="text-blue-900"><span className="font-semibold">{m.kode}.</span> {m.misiText}</span>
                </li>
              )) || (
                <li className="text-gray-400 animate-pulse">Memuat...</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}