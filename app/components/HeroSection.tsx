"use client";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="beranda" className="bg-gray-50 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Left */}
        <div className="flex-1 flex flex-col items-start">
          <span className="bg-yellow-400 text-blue-900 font-bold text-xs px-3 py-1 rounded-full mb-4">
            RILIS VERSI 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            <span className="block text-[#0B1F3A]">Sistem Informasi</span>
            <span className="block text-blue-700">Perencanaan &</span>
            <span className="block text-[#0B1F3A]">Evaluasi</span>
          </h1>
          <p className="text-gray-700 text-lg mb-8 max-w-xl">
            Platform resmi LAN RI untuk perencanaan, pemantauan, dan evaluasi kinerja berbasis digital yang terintegrasi.
          </p>
          <div className="flex gap-4">
            <Link
              href="/login"
              className="bg-[#0B1F3A] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-900 transition-colors"
            >
              Masuk ke Sistem
            </Link>
            <a
              href="/docs/modul-si-reva.pdf"
              download
              className="bg-white border border-[#0B1F3A] text-[#0B1F3A] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Lihat Panduan
            </a>
          </div>
        </div>
        {/* Right */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <Image
              src="/banner.png"
              alt="Dashboard SI-REVA"
              width={420}
              height={280}
              className="rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
