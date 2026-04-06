import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import TableCard from "@/components/TableCard";
import { getVisiMisiTujuan, type VisiItem } from "@/db/queries/visi-misi-tujuan";
import { IconEye, IconPencil } from "@tabler/icons-react";

type TableRow = {
  id: string;
  visi: string;
  misi: string;
  tujuan: string;
};

function flattenRows(items: VisiItem[]): TableRow[] {
  return items.flatMap((visiItem) => {
    if (visiItem.misi.length === 0) {
      return [{
        id: `visi-${visiItem.id}`,
        visi: visiItem.visiText ?? "-",
        misi: "-",
        tujuan: "-",
      }];
    }

    return visiItem.misi.flatMap((misiItem) => {
      if (misiItem.tujuan.length === 0) {
        return [{
          id: `misi-${misiItem.id}`,
          visi: visiItem.visiText ?? "-",
          misi: misiItem.misiText ?? "-",
          tujuan: "-",
        }];
      }

      return misiItem.tujuan.map((tujuanItem) => ({
        id: `tujuan-${tujuanItem.id}`,
        visi: visiItem.visiText ?? "-",
        misi: misiItem.misiText ?? "-",
        tujuan: tujuanItem.tujuanText ?? "-",
      }));
    });
  });
}

export default async function VisiMisiPage() {
  let rows: TableRow[] = [];
  let errorMessage: string | null = null;

  try {
    const data = await getVisiMisiTujuan();
    rows = flattenRows(data);
  } catch (error: unknown) {
    errorMessage = error instanceof Error ? error.message : "Gagal memuat data visi, misi, dan tujuan.";
  }

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
            {rows.map((row, idx) => (
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
            {rows.length === 0 && (
              <tr>
                <td className="px-3 py-4 text-center text-sm text-gray-500" colSpan={5}>
                  {errorMessage ?? "Belum ada data visi, misi, dan tujuan."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </TableCard>
    </LayoutShell>
  );
}
