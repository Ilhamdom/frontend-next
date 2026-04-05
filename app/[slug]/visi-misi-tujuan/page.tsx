import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import TableCard from "@/components/TableCard";
import { IconEye, IconPencil } from "@tabler/icons-react";

const visiMisiRows = [
  {
    id: 1,
    visi: "Menjadi lembaga pembina administrasi negara yang unggul dalam mewujudkan birokrasi berkelas dunia untuk Indonesia Maju.",
    misi: "Meningkatkan kualitas pengembangan kompetensi ASN yang adaptif, berintegritas, dan berorientasi hasil.",
    tujuan: "Terwujudnya ASN profesional melalui sistem pembelajaran terintegrasi, berbasis kebutuhan jabatan, dan berkelanjutan.",
  },
  {
    id: 2,
    visi: "Menjadi lembaga pembina administrasi negara yang unggul dalam mewujudkan birokrasi berkelas dunia untuk Indonesia Maju.",
    misi: "Mengembangkan inovasi administrasi pemerintahan dan tata kelola kelembagaan publik berbasis bukti.",
    tujuan: "Meningkatnya inovasi kebijakan dan kelembagaan untuk mempercepat transformasi birokrasi dan kualitas layanan publik.",
  },
  {
    id: 3,
    visi: "Menjadi lembaga pembina administrasi negara yang unggul dalam mewujudkan birokrasi berkelas dunia untuk Indonesia Maju.",
    misi: "Memperkuat tata kelola kinerja, akuntabilitas organisasi, serta budaya kerja berorientasi dampak.",
    tujuan: "Meningkatnya akuntabilitas kinerja organisasi melalui penguatan manajemen kinerja, evaluasi, dan pengendalian internal.",
  },
  {
    id: 4,
    visi: "Menjadi lembaga pembina administrasi negara yang unggul dalam mewujudkan birokrasi berkelas dunia untuk Indonesia Maju.",
    misi: "Mempercepat transformasi digital layanan kelembagaan dan manajemen pengetahuan administrasi negara.",
    tujuan: "Terbangunnya ekosistem layanan digital kelembagaan yang terpadu, inklusif, dan responsif terhadap kebutuhan pemangku kepentingan.",
  },
];

export default function VisiMisiPage() {
  return (
    <LayoutShell>
      <PageHeader
        title="Visi, Misi & Tujuan"
        description="Fondasi arah kebijakan dan landasan perencanaan strategis LAN RI."
      />
      <TableCard title="Daftar Visi, Misi, dan Tujuan">
        <table className="min-w-full text-sm table-head-wrap table-like-api">
          <thead>
            <tr className="text-gray-500 uppercase text-xs">
              <th className="text-center py-2 px-2">No</th>
              <th className="text-left py-2 px-3">Visi</th>
              <th className="text-left py-2 px-3">Misi</th>
              <th className="text-left py-2 px-3">Tujuan</th>
              <th className="text-center py-2 px-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {visiMisiRows.map((row, idx) => (
              <tr key={row.id}>
                <td className="text-center px-2 py-2 font-semibold">{idx + 1}</td>
                <td className="px-3 py-2">{row.visi}</td>
                <td className="px-3 py-2">{row.misi}</td>
                <td className="px-3 py-2">{row.tujuan}</td>
                <td className="text-center px-3 py-2">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      title="Edit"
                      aria-label={`Edit baris ${idx + 1}`}
                      className="table-action-icon-btn"
                    >
                      <IconPencil size={18} />
                    </button>
                    <button
                      title="Lihat"
                      aria-label={`Lihat baris ${idx + 1}`}
                      className="table-action-icon-btn table-action-icon-btn--neutral"
                    >
                      <IconEye size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableCard>
    </LayoutShell>
  );
}
