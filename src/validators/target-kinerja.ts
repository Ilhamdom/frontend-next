import { z } from "zod";

export const createTargetKinerjaSchema = z.object({
  id: z.number().optional(),
  indikatorId: z.number().min(1, "Indikator ID harus diisi"),
  tahunId: z.number().min(1, "Tahun ID harus diisi"),
  target: z.number().min(0, "Target harus >= 0"),
  realisasi: z.number().min(0, "Realisasi harus >= 0"),
});

export type CreateTargetKinerja = z.infer<typeof createTargetKinerjaSchema>;