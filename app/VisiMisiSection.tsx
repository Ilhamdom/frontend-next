"use client";
import { IconEye, IconTargetArrow, IconCheck } from "@tabler/icons-react";

export default function VisiMisiSection() {
  return (
    <section id="visi-misi" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0B1F3A] mb-2">VISI & MISI LAN RI</h2>
        <div className="flex justify-center mb-8">
          <span className="block w-16 h-1 bg-yellow-400 rounded-full"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* VISI */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col items-center">
            <div className="bg-blue-100 text-blue-700 rounded-full p-3 mb-3">
              {/* Icon */}
              <IconEye size={32} stroke={1.5} />
            </div>
            <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">VISI</h3>
            <p className="text-xl font-semibold text-[#0B1F3A] text-center">
              Menjadi lembaga pembina yang unggul dalam mewujudkan birokrasi berkelas dunia untuk Indonesia Maju.
            </p>
          </div>
          {/* MISI */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col">
            <div className="bg-yellow-100 text-yellow-700 rounded-full p-3 mb-3 self-center">
              {/* Icon */}
              <IconTargetArrow size={32} stroke={1.5} />
            </div>
            <h3 className="text-lg font-bold text-[#0B1F3A] mb-2 text-center">MISI</h3>
            <ul className="space-y-4 mt-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-yellow-500">
                  <IconCheck size={20} stroke={2} />
                </span>
                <span>Meningkatkan kualitas SDM aparatur negara.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-yellow-500">
                  <IconCheck size={20} stroke={2} />
                </span>
                <span>Mengembangkan inovasi tata kelola pemerintahan.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-yellow-500">
                  <IconCheck size={20} stroke={2} />
                </span>
                <span>Memperkuat sistem pengawasan dan akuntabilitas.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
