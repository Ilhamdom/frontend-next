"use client";
import UserPageHeader from "../../components/user/UserPageHeader";
import UserTableCard from "../../components/user/UserTableCard";
import UserStatusBadge from "../../components/user/UserStatusBadge";

const data = [
  {
    kode: "SS-01",
    sasaran: "Meningkatkan Kualitas Tata Kelola Lembaga",
    iku: "NILAI SAKIP LAN",
    target: "A",
    capaian: "A",
    status: "TERCAPAI",
  },
  {
    kode: "SS-02",
    sasaran: "Terwujudnya ASN Profesional dan Kompeten",
    iku: "INDEKS KOMPETENSI ASN",
    target: "85.0",
    capaian: "82.0",
    status: "BERJALAN",
  },
  {
    kode: "SS-03",
    sasaran: "Meningkatkan Inovasi Kelembagaan",
    iku: "JUMLAH INOVASI",
    target: "5",
    capaian: "3",
    status: "BERJALAN",
  },
  {
    kode: "SS-04",
    sasaran: "Meningkatkan Akuntabilitas Kinerja",
    iku: "NILAI LAKIP",
    target: "A",
    capaian: "B",
    status: "PERLU ATENSI",
  },
];

export default function UserSasaranStrategisPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader
        title="Sasaran Strategis (SS)"
        description="Peta jalan strategis dan indikator kinerja makro (Level JPT Utama)."
      />
      <TableCard
        title="Daftar Sasaran Strategis"
      >
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-500 uppercase text-xs">
              <th className="text-left py-1 pr-4">Kode</th>
              <th className="text-left py-1 pr-4">Sasaran</th>
              <th className="text-left py-1 pr-4">IKU</th>
              <th className="text-left py-1 pr-4">Target</th>
              <th className="text-left py-1 pr-4">Capaian</th>
              <th className="text-left py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.kode} className="border-b last:border-b-0">
                <td className="font-semibold pr-4 py-2">{row.kode}</td>
                <td className="pr-4 py-2">{row.sasaran}</td>
                <td className="pr-4 py-2">{row.iku}</td>
                <td className="pr-4 py-2">{row.target}</td>
                <td className="pr-4 py-2">{row.capaian}</td>
                <td className="py-2"><StatusBadge status={row.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableCard>
    </div>
  );
}
