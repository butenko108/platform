import type { TFunction } from "i18next";
import { z } from "zod";

export const createForgotPasswordSchema = (t: TFunction) =>
  z.object({
    email: z
      .string()
      .min(1, t("auth.validation.emailRequired"))
      .email(t("auth.validation.emailInvalid")),
  });

export type ForgotPasswordFormData = z.infer<
  ReturnType<typeof createForgotPasswordSchema>
>;
