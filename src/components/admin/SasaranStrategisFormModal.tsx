"use client";
import { useState, useEffect } from "react";
import AdminModalShell from "./AdminModalShell";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";

interface SasaranStrategisFormModalProps {
  open: boolean;
  mode?: "create" | "edit" | "view";
  initialData?: any;
  onClose: () => void;
  onSave: (data: any) => void;
}

const statusOptions = ["TERCAPAI", "BERJALAN", "PERLU ATENSI"];

export default function SasaranStrategisFormModal({ open, mode = "create", initialData, onClose, onSave }: SasaranStrategisFormModalProps) {
  const [kode, setKode] = useState("");
  const [judul, setJudul] = useState("");
  const [iku, setIku] = useState("");
  const [target, setTarget] = useState("");
  const [capaian, setCapaian] = useState("");
  const [status, setStatus] = useState(statusOptions[0]);

  useEffect(() => {
    if (open) {
      if ((mode === "edit" || mode === "view") && initialData) {
        setKode(initialData.kode || "");
        setJudul(initialData.sasaran || "");
        setIku(initialData.indikator || "");
        setTarget(initialData.target || "");
        setCapaian(initialData.capaian || "");
        setStatus(initialData.status || statusOptions[0]);
      } else {
        setKode("");
        setJudul("");
        setIku("");
        setTarget("");
        setCapaian("");
        setStatus(statusOptions[0]);
      }
    }
  }, [open, mode, initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      kode,
      sasaran: judul,
      indikator: iku,
      target,
      capaian,
      status,
      tujuan: initialData?.tujuan || "T-01",
      pic: initialData?.pic || "Biro Perencanaan"
    });
    onClose();
  };

  return (
    <AdminModalShell
      open={open}
      title={mode === "view" ? "Lihat Sasaran Strategis" : mode === "edit" ? "Edit Sasaran Strategis" : "Tambah Sasaran Strategis"}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-gray-100 pb-6">
          <Input
            label="Kode SS"
            placeholder="SS-05"
            value={kode}
            onChange={e => setKode(e.target.value)}
            disabled={mode === "view"}
            required
          />
          <Input
            label="Indikator (IKU)"
            placeholder="Persentase SDM kompeten"
            value={iku}
            onChange={e => setIku(e.target.value)}
            disabled={mode === "view"}
            required
          />
          <Input
            label="Target"
            placeholder="90%"
            value={target}
            onChange={e => setTarget(e.target.value)}
            disabled={mode === "view"}
            required
          />
          <Input
            label="Capaian"
            placeholder="92%"
            value={capaian}
            onChange={e => setCapaian(e.target.value)}
            disabled={mode === "view"}
            required
          />
          <div className="md:col-span-2">
            <Select
              label="Status"
              options={statusOptions}
              value={status}
              onChange={e => setStatus(e.target.value)}
              disabled={mode === "view"}
              required
            />
          </div>
          <div className="md:col-span-2">
            <Textarea
              label="Judul Sasaran Strategis"
              placeholder="Masukkan judul sasaran strategis..."
              value={judul}
              onChange={e => setJudul(e.target.value)}
              rows={3}
              disabled={mode === "view"}
              required
            />
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex justify-end gap-3 pt-2">
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
              Simpan SS
            </Button>
          )}
        </div>
      </form>
    </AdminModalShell>
  );
}
