"use client";
import UserPageHeader from "../../components/user/UserPageHeader";
import UserTableCard from "../../components/user/UserTableCard";
import UserProgressBar from "../../components/user/UserProgressBar";

export default function UserSasaranProgramPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader
        title="Sasaran Program (SP)"
        description="Penjabaran strategis ke tingkat program kerja (Level JPT Pratama)."
      />
      <TableCard
        title="Daftar Sasaran Program"
        toolbar={
          <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
            <option>Filter by SS: Semua</option>
          </select>
        }
      >
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-gray-500 uppercase text-xs">
              <th className="text-left py-2 pr-4">KODE</th>
              <th className="text-left py-2">SASARAN PROGRAM</th>
              <th className="text-left py-2">UNIT KERJA (PIC)</th>
              <th className="text-left py-2">INDIKATOR KINERJA PROGRAM</th>
              <th className="text-left py-2">PROGRESS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-semibold pr-4">SP-02</td>
              <td>
                Program Pelatihan ASN
                <span className="ml-2 text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">Terkait: SS-02</span>
              </td>
              <td>Pusbangkom Pejabat Negara</td>
              <td>Jumlah Peserta Pelatihan Lulus</td>
              <td className="min-w-[180px]">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-gray-700">450 Orang / 1000 Orang</span>
                  <ProgressBar value={45} color="blue" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </TableCard>
    </div>
  );
}
