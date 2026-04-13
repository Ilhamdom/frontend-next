"use client";
import { useState, useEffect } from "react";
import Modal from "../../../app/components/ui/Modal";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";

interface SasaranProgramFormModalProps {
  open: boolean;
  mode?: "create" | "edit" | "view";
  initialData?: any;
  onClose: () => void;
  onSave: (data: any) => void;
}

const SS_OPTIONS = [
  { value: "SS-01", label: "SS-01" },
  { value: "SS-02", label: "SS-02" },
  { value: "SS-03", label: "SS-03" },
  { value: "SS-04", label: "SS-04" },
];

export default function SasaranProgramFormModal({ open, mode = "create", initialData, onClose, onSave }: SasaranProgramFormModalProps) {
  const [kode, setKode] = useState("");
  const [ss, setSs] = useState(SS_OPTIONS[0].value);
  const [nama, setNama] = useState("");
  const [pic, setPic] = useState("");
  const [indikator, setIndikator] = useState("");
  const [target, setTarget] = useState("");
  const [progress, setProgress] = useState("");

  useEffect(() => {
    if (open) {
      if ((mode === "edit" || mode === "view") && initialData) {
        setKode(initialData.kode || "");
        setSs(initialData.ss || SS_OPTIONS[0].value);
        setNama(initialData.nama || "");
        setPic(initialData.pic || "");
        setIndikator(initialData.indikator || "");
        setTarget(initialData.target || "");
        setProgress(initialData.progress?.toString() || "");
      } else {
        setKode("");
        setSs(SS_OPTIONS[0].value);
        setNama("");
        setPic("");
        setIndikator("");
        setTarget("");
        setProgress("");
      }
    }
  }, [open, mode, initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      kode,
      ss,
      nama,
      pic,
      indikator,
      target,
      progress: parseInt(progress) || 0
    });
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={mode === "view" ? "Lihat Sasaran Program" : mode === "edit" ? "Edit Sasaran Program" : "Tambah Sasaran Program"}
      widthClass="max-w-2xl"
    >
      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-gray-100 pb-6">
          <Input
            label="Kode SP"
            value={kode}
            onChange={e => setKode(e.target.value)}
            disabled={mode === "view"}
            required
          />
          <Select
            label="Terkait Sasaran Strategis"
            options={SS_OPTIONS}
            value={ss}
            onChange={e => setSs(e.target.value)}
            disabled={mode === "view"}
            required
          />
          <div className="md:col-span-2">
            <Textarea
              label="Nama Sasaran Program"
              value={nama}
              onChange={e => setNama(e.target.value)}
              disabled={mode === "view"}
              required
            />
          </div>
          <Input
            label="Unit Kerja (PIC)"
            value={pic}
            onChange={e => setPic(e.target.value)}
            disabled={mode === "view"}
            required
          />
          <Input
            label="Indikator Kinerja Program"
            value={indikator}
            onChange={e => setIndikator(e.target.value)}
            disabled={mode === "view"}
            required
          />
          <Input
            label="Target Program"
            value={target}
            onChange={e => setTarget(e.target.value)}
            disabled={mode === "view"}
            required
          />
          <Input
            type="number"
            label="Realisasi / Progress"
            value={progress}
            onChange={e => setProgress(e.target.value)}
            min={0}
            max={100}
            disabled={mode === "view"}
            required
          />
        </div>
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
              Simpan SP
            </Button>
          )}
        </div>
      </form>
    </Modal>
  );
}
