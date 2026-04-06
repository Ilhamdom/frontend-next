import { z } from "zod";
import { getValidationMessage } from "./common";

export const createPeriodeSchema = z.object({
  id: z.number().int().positive().optional(),
  nama: z.string().trim().min(1, "Nama wajib diisi.").max(20),
  tahunMulai: z.number().int().min(1900).max(2100).optional(),
  tahunSelesai: z.number().int().min(1900).max(2100).optional(),
  isActive: z.boolean().optional(),
});

export const updatePeriodeSchema = z
  .object({
    nama: z.string().trim().min(1).max(20).nullable().optional(),
    tahunMulai: z.number().int().min(1900).max(2100).nullable().optional(),
    tahunSelesai: z.number().int().min(1900).max(2100).nullable().optional(),
    isActive: z.boolean().nullable().optional(),
  })
  .refine((value) => Object.keys(value).length > 0, {
    message: "Tidak ada field yang diupdate.",
  });

export { getValidationMessage };