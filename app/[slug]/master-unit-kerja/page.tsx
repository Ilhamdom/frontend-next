

"use client";

import { IconPencil, IconTrash } from "@tabler/icons-react";
import LayoutShell from "@/components/LayoutShell";
import PageHeader from "@/components/PageHeader";
import { Button } from "@idds/react";
import { IconPlus } from "@tabler/icons-react";
import TableWithAPI from "@/components/ui/TableWithAPI";


const data = [
  { id: 1, namaUnit: "Kantor Pusat", parent: null },
  { id: 2, namaUnit: "Divisi SDM", parent: "Kantor Pusat" },
  { id: 3, namaUnit: "Divisi Keuangan", parent: "Kantor Pusat" },
  { id: 4, namaUnit: "Subdivisi Rekrutmen", parent: "Divisi SDM" },
  { id: 5, namaUnit: "Subdivisi Pelatihan", parent: "Divisi SDM" },
];

export default function MasterUnitKerjaPage() {
  return (
    <LayoutShell>
      <div className="flex items-center gap-4 mb-4">
        <PageHeader title="Master Unit Kerja" />
      </div>
      <div className="p-6">
        <div className="w-full">
          <TableWithAPI
            columns={[
              { key: "id", label: "ID", width: 60, className: "text-center" },
              { key: "namaUnit", label: "Unit Kerja" },
              { key: "parent", label: "Parent Unit", render: (row) => row.parent || "-" },
              {
                key: "aksi",
                label: "Aksi",
                width: 90,
                className: "text-center",
                render: (row) => (
                  <div className="flex items-center justify-center gap-2">
                    <button title="Edit" className="text-blue-500 hover:text-blue-700 p-1 rounded">
                      <IconPencil size={18} stroke={1.7} />
                    </button>
                    <button title="Hapus" className="text-red-500 hover:text-red-700 p-1 rounded">
                      <IconTrash size={18} stroke={1.7} />
                    </button>
                  </div>
                ),
              },
            ]}
            data={data}
            showSearch
            showPagination
            pageSize={10}
          >
            <div className="flex w-full justify-end mb-2">
              <Button
                hierarchy="primary"
                prefixIcon={<IconPlus size={16} />}
                style={{ fontSize: 14, padding: '6px 16px', borderRadius: 8 }}
              >
                Input Unit Kerja
              </Button>
            </div>
          </TableWithAPI>
        </div>
      </div>
    </LayoutShell>
  );
}
