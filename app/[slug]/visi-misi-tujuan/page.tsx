import React from "react";
import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import TableCard from "@/components/TableCard";
import { IconPlus } from "@tabler/icons-react";
import { getVisiMisiTujuan, type VisiItem } from "@/db/queries/visi-misi-tujuan";
import VisiMisiTableClient, { TableRow } from "@/components/ui/VisiMisiTableClient";

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
  // Remove dynamic import, use static import above
  return (
    <LayoutShell>
      <PageHeader
        title="Visi, Misi & Tujuan"
        description="Fondasi arah kebijakan dan landasan perencanaan strategis LAN RI."
      />
      <TableCard
        title="Daftar Visi, Misi, dan Tujuan"
        toolbar={
          <button
            type="button"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg px-4 py-2 flex items-center gap-2 text-sm shadow"
          >
            <IconPlus size={16} />
            Input Visi, Misi & Tujuan
          </button>
        }
      >
        <VisiMisiTableClient rows={rows} errorMessage={errorMessage} />
      </TableCard>
    </LayoutShell>
  );
}
