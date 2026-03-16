import { z } from "zod";
import { isAllowedDomain } from "@/lib/utils/domain-check";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Voer een geldig emailadres in")
    .refine(isAllowedDomain, "Alleen @looop.company emailadressen zijn toegestaan"),
});

export type LoginInput = z.infer<typeof loginSchema>;
