"use client";
import UserPageHeader from "@/components/user/UserPageHeader";
import UserInfoCard from "@/components/user/UserInfoCard";

export default function UserVisiMisiTujuanPage() {
  return (
    <div className="flex flex-col w-full">
      <UserPageHeader
        title="Visi, Misi & Tujuan"
        description="Fondasi arah kebijakan dan landasan perencanaan strategis LAN RI."
      />
      {/* Hero Card */}
      <div className="mb-8">
        <div className="bg-blue-800 rounded-2xl p-8 flex flex-col gap-2 shadow-md">
          <span className="inline-block bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full mb-2 w-max">VISI LAN RI</span>
          <div className="text-white text-xl md:text-2xl font-bold leading-snug">
            Menjadi lembaga pembina yang unggul dalam mewujudkan birokrasi berkelas dunia untuk Indonesia Maju.
          </div>
        </div>
      </div>
      {/* Grid 2 kolom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Misi Organisasi */}
        <UserInfoCard title="Misi Organisasi" accent="blue">
          <ol className="list-decimal list-inside space-y-2">
            <li className="bg-gray-50 rounded-lg px-3 py-2">Meningkatkan kualitas SDM aparatur negara.</li>
            <li className="bg-gray-50 rounded-lg px-3 py-2">Mengembangkan inovasi tata kelola pemerintahan.</li>
            <li className="bg-gray-50 rounded-lg px-3 py-2">Memperkuat sistem pengawasan dan akuntabilitas.</li>
          </ol>
        </UserInfoCard>
        {/* Tujuan Strategis */}
        <UserInfoCard title="Tujuan Strategis" accent="orange">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 uppercase text-xs">
                <th className="text-left py-1 pr-4">Kode</th>
                <th className="text-left py-1">Pernyataan Tujuan</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="font-semibold pr-4">T-01</td><td>Meningkatkan kualitas pelayanan publik</td></tr>
              <tr><td className="font-semibold pr-4">T-02</td><td>Meningkatkan profesionalisme ASN</td></tr>
              <tr><td className="font-semibold pr-4">T-03</td><td>Meningkatkan inovasi kelembagaan</td></tr>
              <tr><td className="font-semibold pr-4">T-04</td><td>Meningkatkan akuntabilitas kinerja</td></tr>
            </tbody>
          </table>
        </UserInfoCard>
      </div>
    </div>
  );
}
