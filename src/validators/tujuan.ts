import { z } from "zod";

export const createTujuanSchema = z.object({
  id: z.number().int().positive().optional(),
  misiId: z.number().int().positive("misiId wajib diisi."),
  kode: z.string().trim().min(1, "kode wajib diisi."),
  tujuanText: z.string().trim().min(1, "tujuanText wajib diisi."),
});

export const updateTujuanSchema = z
  .object({
    misiId: z.number().int().positive().nullable().optional(),
    kode: z.string().trim().min(1, "kode tidak boleh kosong.").nullable().optional(),
    tujuanText: z.string().trim().min(1, "tujuanText tidak boleh kosong.").nullable().optional(),
  })
  .refine((value) => Object.keys(value).length > 0, {
    message: "Tidak ada field yang diupdate.",
  });