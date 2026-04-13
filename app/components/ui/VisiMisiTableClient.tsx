"use client";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import { IconEye, IconPencil } from "@tabler/icons-react";

export type TableRow = {
  id: string;
  visi: string;
  misi: string;
  tujuan: string;
};

interface Props {
  rows: TableRow[];
  errorMessage: string | null;
}

export default function VisiMisiTableClient({ rows, errorMessage }: Props) {
  const [modal, setModal] = useState<{ type: 'edit' | 'view'; row: TableRow | null } | null>(null);

  return (
    <>
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
                    onClick={() => setModal({ type: 'edit', row })}
                  >
                    <IconPencil size={18} />
                  </button>
                  <button
                    title="Lihat"
                    aria-label={`Lihat baris ${idx + 1}`}
                    className="table-action-icon-btn table-action-icon-btn--neutral"
                    onClick={() => setModal({ type: 'view', row })}
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
      <Modal open={!!modal} onClose={() => setModal(null)} title={modal?.type === 'edit' ? 'Edit Data' : 'Detail Data'}>
        {modal?.row && (
          <div className="space-y-2">
            {modal.type === 'edit' && (
              <form className="space-y-4 mt-2">
                <div className="flex items-center gap-3">
                  <label className="w-20 text-xs font-semibold text-gray-600" htmlFor="visi-input">Visi</label>
                  <input
                    id="visi-input"
                    className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm shadow-sm"
                    defaultValue={modal.row.visi}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <label className="w-20 text-xs font-semibold text-gray-600" htmlFor="misi-input">Misi</label>
                  <input
                    id="misi-input"
                    className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm shadow-sm"
                    defaultValue={modal.row.misi}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <label className="w-20 text-xs font-semibold text-gray-600" htmlFor="tujuan-input">Tujuan</label>
                  <input
                    id="tujuan-input"
                    className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm shadow-sm"
                    defaultValue={modal.row.tujuan}
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    className="rounded-lg px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 font-semibold"
                    onClick={() => setModal(null)}
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 font-semibold shadow-sm"
                  >
                    Simpan
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}
