"use client";
import { useState, useEffect } from "react";
import AdminModalShell from "./AdminModalShell";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";

interface SasaranKegiatanFormModalProps {
  open: boolean;
  mode?: "create" | "edit" | "view";
  initialData?: any;
  onClose: () => void;
  onSave: (data: any) => void;
}

const SP_OPTIONS = [
  { value: "SP-01", label: "SP-01" },
  { value: "SP-02", label: "SP-02" },
  { value: "SP-03", label: "SP-03" },
];

const STATUS_OPTIONS = [
  { value: "SELESAI", label: "SELESAI" },
  { value: "BELUM MULAI", label: "BELUM MULAI" },
  { value: "HAMPIR SELESAI", label: "HAMPIR SELESAI" },
  { value: "BERJALAN", label: "BERJALAN" },
];

export default function SasaranKegiatanFormModal({
  open,
  mode = "create",
  initialData,
  onClose,
  onSave,
}: SasaranKegiatanFormModalProps) {
  const [nama, setNama] = useState("");
  const [sp, setSp] = useState(SP_OPTIONS[0].value);
  const [unit, setUnit] = useState("");
  const [timeline, setTimeline] = useState("");
  const [progress, setProgress] = useState("");
  const [status, setStatus] = useState(STATUS_OPTIONS[0].value);
  const [keterangan, setKeterangan] = useState("");

  useEffect(() => {
    if (open) {
      if ((mode === "edit" || mode === "view") && initialData) {
        setNama(initialData.nama || "");
        setSp(initialData.sp || SP_OPTIONS[0].value);
        setUnit(initialData.unit || "");
        setTimeline(initialData.timeline || "");
        setProgress(initialData.progress?.toString() || "");
        setStatus(initialData.status || STATUS_OPTIONS[0].value);
        setKeterangan(initialData.keterangan || "");
      } else {
        setNama("");
        setSp(SP_OPTIONS[0].value);
        setUnit("");
        setTimeline("");
        setProgress("");
        setStatus(STATUS_OPTIONS[0].value);
        setKeterangan("");
      }
    }
  }, [open, mode, initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      nama,
      sp,
      unit,
      timeline,
      progress: parseInt(progress) || 0,
      status,
      keterangan,
    });
    onClose();
  };

  return (
    <AdminModalShell
      open={open}
      onClose={onClose}
      title={mode === "view" ? "Lihat Sasaran Kegiatan" : mode === "edit" ? "Edit Sasaran Kegiatan" : "Tambah Sasaran Kegiatan"}
    >
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mt-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 space-y-2 border-b border-gray-100 pb-6">
          <div className="md:col-span-2">
            <Input
              label="Nama Kegiatan"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              disabled={mode === "view"}
              required
            />
          </div>

          <Select
            label="Turunan dari Sasaran Program"
            options={SP_OPTIONS}
            value={sp}
            onChange={(e) => setSp(e.target.value)}
            disabled={mode === "view"}
            required
          />

          <Input
            label="Unit Kerja"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            disabled={mode === "view"}
            required
          />

          <Input
            label="Timeline Pelaksanaan"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            placeholder="Jan - Feb 2026"
            disabled={mode === "view"}
            required
          />

          <Input
            type="number"
            label="Progres Kegiatan (%)"
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
            min={0}
            max={100}
            disabled={mode === "view"}
            required
          />

          <Select
            label="Status"
            options={STATUS_OPTIONS}
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            disabled={mode === "view"}
            required
          />

          <div className="md:col-span-2">
            <Textarea
              label="Keterangan Singkat"
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
              required
              disabled={mode === "view"}
              rows={3}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
          >
            {mode === "view" ? "Tutup" : "Batal"}
          </Button>
          {mode !== "view" && (
            <Button
              type="submit"
            >
              Simpan SK
            </Button>
          )}
        </div>
      </form>
    </AdminModalShell>
  );
}