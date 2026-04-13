import { z } from "zod";

export const createSasaranStrategisSchema = z.object({
  id: z.number().int().positive().optional(),
  tujuanId: z.number().int().positive("tujuanId wajib diisi."),
  kode: z.string().trim().min(1, "kode wajib diisi."),
  sasaranText: z.string().trim().min(1, "sasaranText wajib diisi."),
});

export const updateSasaranStrategisSchema = z
  .object({
    tujuanId: z.number().int().positive().nullable().optional(),
    kode: z.string().trim().min(1, "kode tidak boleh kosong.").nullable().optional(),
    sasaranText: z.string().trim().min(1, "sasaranText tidak boleh kosong.").nullable().optional(),
  })
  .refine((value) => Object.keys(value).length > 0, {
    message: "Tidak ada field yang diupdate.",
  });