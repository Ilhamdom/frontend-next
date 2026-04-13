"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import UserPageHeader from "../../../components/user/UserPageHeader";
import { Input } from "../../../../src/components/ui/Input";
import { Select } from "../../../../src/components/ui/Select";
import { Textarea } from "../../../../src/components/ui/Textarea";

export default function CreateLaporanRealisasiPage() {
  const router = useRouter();

  const [kegiatan, setKegiatan] = useState("SK-01");
  const [periode, setPeriode] = useState("TW1");
  const [progres, setProgres] = useState("");
  const [capaian, setCapaian] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [evidens, setEvidens] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission and redirect back
    router.push("/user/laporan-realisasi");
  };

  return (
    <div className="flex flex-col w-full max-w-screen-md mx-auto pb-10">
      <UserPageHeader
        title="Buat Laporan Baru"
        description="Isi formulir berikut untuk melaporkan capaian pelaksanaan kegiatan Anda."
      />
      
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <Select
                label="Pilih Sasaran Kegiatan"
                options={[
                  { value: "SK-01", label: "Penyusunan Kurikulum PKN I" },
                  { value: "SK-02", label: "Workshop Laboratorium Inovasi Daerah" },
                  { value: "SK-03", label: "Penyusunan Laporan Kinerja (LAKIP)" }
                ]}
                value={kegiatan}
                onChange={e => setKegiatan(e.target.value)}
                required
              />
            </div>
            
            <Select
              label="Periode Pelaporan"
              options={[
                { value: "TW1", label: "Triwulan I" },
                { value: "TW2", label: "Triwulan II" },
                { value: "TW3", label: "Triwulan III" },
                { value: "TW4", label: "Triwulan IV" },
                { value: "Tahunan", label: "Tahunan" }
              ]}
              value={periode}
              onChange={e => setPeriode(e.target.value)}
              required
            />
            
            <Input
              label="Progres Pelaksanaan (%)"
              type="number"
              min="0"
              max="100"
              placeholder="0 - 100"
              value={progres}
              onChange={e => setProgres(e.target.value)}
              required
            />

            <div className="md:col-span-2">
              <Textarea
                label="Capaian Output (Barang/Jasa/Administrasi)"
                placeholder="Jelaskan capaian konkrit yang telah diselesaikan saat ini..."
                rows={3}
                value={capaian}
                onChange={e => setCapaian(e.target.value)}
                required
              />
            </div>

            <div className="md:col-span-2">
              <Input
                label="Upload Lampiran Evidens (File PDF, MAX 5MB)"
                type="file"
                value={evidens}
                onChange={e => setEvidens(e.target.value)}
                accept=".pdf,.doc,.docx"
              />
            </div>

            <div className="md:col-span-2">
              <Textarea
                label="Keterangan Tambahan / Hambatan Pelaksanaan"
                placeholder="Tuliskan jika ada kendala, catatan khusus, atau tindakan korektif..."
                rows={3}
                value={keterangan}
                onChange={e => setKeterangan(e.target.value)}
              />
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-end gap-3">
            <button
              type="button"
              onClick={() => router.push('/user/laporan-realisasi')}
              className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 focus:ring-4 focus:ring-gray-100 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-[#0B1F3A] text-white font-bold hover:bg-blue-900 focus:ring-4 focus:ring-blue-200 shadow-sm transition-colors"
            >
              Simpan Laporan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
