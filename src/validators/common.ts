import { z } from "zod";

export function getValidationMessage(error: z.ZodError) {
  return error.issues[0]?.message ?? "Payload tidak valid.";
}