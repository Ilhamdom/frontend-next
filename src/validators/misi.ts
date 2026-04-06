import { z } from "zod";

export const createMisiSchema = z.object({
  id: z.number().int().positive().optional(),
  visiId: z.number().int().positive("visiId wajib diisi."),
  kode: z.string().trim().min(1, "kode wajib diisi."),
  misiText: z.string().trim().min(1, "misiText wajib diisi."),
});

export const updateMisiSchema = z
  .object({
    visiId: z.number().int().positive().nullable().optional(),
    kode: z.string().trim().min(1, "kode tidak boleh kosong.").nullable().optional(),
    misiText: z.string().trim().min(1, "misiText tidak boleh kosong.").nullable().optional(),
  })
  .refine((value) => Object.keys(value).length > 0, {
    message: "Tidak ada field yang diupdate.",
  });