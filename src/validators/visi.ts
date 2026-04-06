import { z } from "zod";
import { getValidationMessage } from "./common";

const createdAtSchema = z
  .string()
  .trim()
  .min(1, "createdAt tidak boleh kosong.")
  .refine((value) => !Number.isNaN(new Date(value).getTime()), {
    message: "Format createdAt tidak valid.",
  });

export const createVisiSchema = z.object({
  id: z.number().int().positive().optional(),
  periodeId: z.number().int().positive("periodeId wajib diisi."),
  visiText: z.string().trim().min(1, "visiText wajib diisi."),
  createdAt: createdAtSchema.optional(),
});

export const updateVisiSchema = z
  .object({
    periodeId: z.number().int().positive().nullable().optional(),
    visiText: z.string().trim().min(1, "visiText tidak boleh kosong.").nullable().optional(),
    createdAt: z.union([createdAtSchema, z.literal(""), z.null()]).optional(),
  })
  .refine((value) => Object.keys(value).length > 0, {
    message: "Tidak ada field yang diupdate.",
  });

export { getValidationMessage };
