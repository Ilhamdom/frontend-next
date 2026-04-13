"use client";
import React, { useState, useEffect } from "react";
import Modal from "../../../app/components/ui/Modal";
import { Textarea } from "../ui/Textarea";

interface AdminVerifikasiModalProps {
  open: boolean;
  initialData?: any;
  onClose: () => void;
  onVerify: (id: string, status: string, feedback: string) => void;
}

export default function AdminVerifikasiModal({
  open,
  initialData,
  onClose,
  onVerify,
}: AdminVerifikasiModalProps) {
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (open) {
      setFeedback(""); // Reset feedback when opening new modal
    }
  }, [open]);

  if (!initialData) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Verifikasi Laporan Realisasi"
      widthClass="max-w-2xl"
    >
      <div className="w-full max-w-2xl mt-4">
        {/* Read-only Data User */}
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 mb-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-[10px] font-bold text-gray-400 tracking-wider">UNIT KERJA / PELAPOR</div>
              <div className="text-sm font-semibold text-brand-blue-950 mt-1">{initialData.unit || "Biro Perencanaan"}</div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-gray-400 tracking-wider">PERIODE</div>
              <div className="text-sm font-semibold text-brand-blue-950 mt-1">{initialData.periode}</div>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold text-gray-400 tracking-wider">NAMA KEGIATAN</div>
            <div className="text-sm font-semibold text-brand-blue-950 mt-1">{initialData.kegiatan}</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-[10px] font-bold text-gray-400 tracking-wider">CAPAIAN SAAT INI</div>
              <div className="text-sm font-semibold text-brand-blue-950 mt-1">{initialData.capaian}</div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-gray-400 tracking-wider">FILE EVIDENS</div>
              <div className="mt-1">
                {initialData.dokumen && initialData.dokumen !== "-" ? (
                  <button className="text-blue-600 hover:text-blue-800 text-xs font-bold inline-flex items-center gap-1 bg-blue-50 px-2 py-1 rounded">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {initialData.dokumen}
                  </button>
                ) : (
                  <span className="text-xs italic text-gray-400 font-semibold">Belum dilampirkan</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Form Evaluasi */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-brand-blue-900 block">Catatan Evaluasi / Tindak Lanjut</label>
          <Textarea 
            placeholder="Berikan persetujuan atau catatan revisi atas laporan ini..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
          />
        </div>

        <div className="mt-8 flex justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-sm font-bold text-gray-600 border border-gray-300 hover:bg-gray-50 transition-colors bg-white"
          >
            Batal
          </button>
          
          <button
            type="button"
            onClick={() => {
              onVerify(initialData.id, "REVISI", feedback);
              onClose();
            }}
            className="px-4 py-2 rounded-lg text-sm font-bold text-status-red bg-status-red/10 hover:bg-status-red/20 transition-colors"
          >
            Minta Revisi
          </button>
          
          <button
            type="button"
            onClick={() => {
              onVerify(initialData.id, "TERVERIFIKASI", feedback);
              onClose();
            }}
            className="px-4 py-2 rounded-lg text-sm font-bold text-white bg-status-green hover:bg-emerald-600 shadow-sm transition-colors"
          >
            Setujui Laporan
          </button>
        </div>
      </div>
    </Modal>
  );
}
