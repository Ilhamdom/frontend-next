"use client";
import { IconScale, IconBuildingMonument, IconBuildingEstate, IconTrendingUp, IconFileCertificate } from "@tabler/icons-react";

const dasarHukum = [
  {
    title: "UU No. 5 Tahun 2014",
    desc: "Aparatur Sipil Negara.",
    icon: <IconScale size={32} stroke={1.5} className="text-gray-600" />,
  },
  {
    title: "Perpres No. 79 Tahun 2018",
    desc: "Lembaga Administrasi Negara (LAN).",
    icon: <IconBuildingMonument size={32} stroke={1.5} className="text-gray-600" />,
  },
  {
    title: "PerLAN No. 1 Tahun 2021",
    desc: "Organisasi dan Tata Kerja LAN.",
    icon: <IconBuildingEstate size={32} stroke={1.5} className="text-gray-600" />,
  },
  {
    title: "PermenPAN-RB No. 89/2021",
    desc: "Penjenjangan Kinerja Instansi Pemerintah.",
    icon: <IconTrendingUp size={32} stroke={1.5} className="text-gray-600" />,
  },
  {
    title: "Instruksi Kepala LAN 3/2025",
    desc: "Implementasi SI-REVA.",
    icon: <IconFileCertificate size={32} stroke={1.5} className="text-gray-600" />,
  },
];

export default function DasarHukumSection() {
  return (
    <section id="dasar-hukum" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-2">DASAR HUKUM</h2>
        <div className="w-16 h-1 bg-blue-500 rounded-full mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dasarHukum.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-start shadow hover:shadow-md transition-shadow">
              <div className="mb-4 w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl">
                {item.icon}
              </div>
              <div className="font-bold text-lg text-[#0B1F3A] mb-1">{item.title}</div>
              <div className="text-gray-600">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
