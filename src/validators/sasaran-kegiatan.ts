import { z } from "zod";

export const createSasaranKegiatanSchema = z.object({
  id: z.number().int().positive().optional(),
  kegiatanId: z.number().int().positive("kegiatanId wajib diisi."),
  kode: z.string().trim().optional(),
  sasaranText: z.string().trim().min(1, "sasaranText wajib diisi."),
});

export const updateSasaranKegiatanSchema = z
  .object({
    kegiatanId: z.number().int().positive().nullable().optional(),
    kode: z.string().trim().nullable().optional(),
    sasaranText: z.string().trim().min(1, "sasaranText tidak boleh kosong.").nullable().optional(),
  })
  .refine((value) => Object.keys(value).length > 0, {
    message: "Tidak ada field yang diupdate.",
  });