import { z } from "zod";
import { getValidationMessage } from "./common";

export const createTahunSchema = z.object({
  id: z.number().int().positive().optional(),
  tahun: z.number().int().min(1900).max(2100, "Tahun harus antara 1900-2100."),
  periodeId: z.number().int().positive("periodeId wajib diisi.").optional(),
});

export const updateTahunSchema = z
  .object({
    tahun: z.number().int().min(1900).max(2100).nullable().optional(),
    periodeId: z.number().int().positive().nullable().optional(),
  })
  .refine((value) => Object.keys(value).length > 0, {
    message: "Tidak ada field yang diupdate.",
  });

export { getValidationMessage };