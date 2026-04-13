import { z } from "zod";

const numericValueSchema = z
  .union([
    z.number().finite(),
    z.string().trim().min(1, "baseline wajib diisi."),
  ])
  .refine((value) => !Number.isNaN(Number(value)), {
    message: "baseline harus berupa angka yang valid.",
  })
  .transform((value) => String(value).trim());

export const createIndikatorKinerjaSchema = z.object({
  id: z.number().int().positive().optional(),
  sasaranId: z.number().int().positive("sasaranId wajib diisi."),
  kode: z.string().trim().min(1, "kode wajib diisi."),
  namaIndikator: z.string().trim().min(1, "namaIndikator wajib diisi."),
  satuan: z.string().trim().min(1, "satuan wajib diisi."),
  jenis: z.string().trim().min(1, "jenis wajib diisi."),
  baseline: numericValueSchema,
});

export const updateIndikatorKinerjaSchema = z
  .object({
    sasaranId: z.number().int().positive().nullable().optional(),
    kode: z.string().trim().min(1, "kode tidak boleh kosong.").nullable().optional(),
    namaIndikator: z.string().trim().min(1, "namaIndikator tidak boleh kosong.").nullable().optional(),
    satuan: z.string().trim().min(1, "satuan tidak boleh kosong.").nullable().optional(),
    jenis: z.string().trim().min(1, "jenis tidak boleh kosong.").nullable().optional(),
    baseline: z.union([numericValueSchema, z.null()]).optional(),
  })
  .refine((value) => Object.keys(value).length > 0, {
    message: "Tidak ada field yang diupdate.",
  });