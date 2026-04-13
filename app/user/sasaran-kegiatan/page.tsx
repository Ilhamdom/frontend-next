"use client";
import Link from "next/link";
import UserPageHeader from "@/components/user/UserPageHeader";
import UserTableCard from "@/components/user/UserTableCard";
import UserProgressBar from "@/components/user/UserProgressBar";
import UserStatusBadge from "@/components/user/UserStatusBadge";

export default function UserSasaranKegiatanPage() {
  return (
    <div className="flex flex-col w-full">
      <UserPageHeader
        title="Sasaran Kegiatan (SK)"
        description="Daftar rinci kegiatan operasional (Level Administrator/Pengawas)."
        action={
          <Link href="/user/laporan-realisasi" className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-emerald-700 inline-flex items-center justify-center">Lapor Realisasi</Link>
        }
      />
      <UserTableCard
        title="Daftar Sasaran Kegiatan"
        toolbar={
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded-lg border border-emerald-600 text-emerald-700 text-sm font-semibold hover:bg-emerald-50">Semua</button>
            <button className="px-3 py-1 rounded-lg border border-emerald-600 text-emerald-700 text-sm font-semibold hover:bg-emerald-50">Berjalan</button>
          </div>
        }
      >
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-gray-500 uppercase text-xs">
              <th className="text-left py-2">NAMA KEGIATAN</th>
              <th className="text-left py-2">TIMELINE PELAKSANAAN</th>
              <th className="text-left py-2">PROGRES KEGIATAN</th>
              <th className="text-left py-2">STATUS</th>
              <th className="text-left py-2">AKSI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Penyusunan Kurikulum PKN I<br />
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">Turunan dari: SP-02</span>
              </td>
              <td><span className="inline-block bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">Mar - Apr 2026</span></td>
              <td className="min-w-[120px]">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-gray-700">100%</span>
                  <UserProgressBar value={100} color="green" />
                </div>
              </td>
              <td><UserStatusBadge status="SELESAI" /></td>
              <td>
                <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-xs font-semibold hover:bg-blue-200">Detail</button>
              </td>
            </tr>
          </tbody>
        </table>
      </UserTableCard>
    </div>
  );
}
