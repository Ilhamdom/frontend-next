"use client";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-8">
      <div className="w-full max-w-3xl mx-auto">
        <Link href="/" className="block mb-6 text-blue-900 font-semibold hover:underline text-sm">&lt; Kembali ke Beranda</Link>
        <div className="bg-white rounded-2xl border border-gray-200 shadow flex flex-col md:flex-row overflow-hidden">
          {/* Left */}
          <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-8 border-b md:border-b-0 md:border-r border-gray-100">
            <div className="mb-4 text-center">
              <div className="text-2xl font-bold text-blue-900 mb-1">LAN RI</div>
              <div className="text-sm text-gray-500 mb-4">SI-REVA 2026</div>
              <Image src="/banner.png" alt="Dashboard" width={220} height={120} className="rounded-xl mx-auto" />
            </div>
          </div>
          {/* Right */}
          <div className="flex-1 flex flex-col justify-center p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
