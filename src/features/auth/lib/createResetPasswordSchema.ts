import type { TFunction } from "i18next";
import { z } from "zod";

export const createResetPasswordSchema = (t: TFunction) =>
  z
    .object({
      newPassword: z
        .string()
        .min(8, t("auth.validation.passwordMin"))
        .max(100, t("auth.validation.passwordMax"))
        .regex(/[A-Z]/, t("auth.validation.passwordUppercase"))
        .regex(/[a-z]/, t("auth.validation.passwordLowercase"))
        .regex(/[0-9]/, t("auth.validation.passwordNumber"))
        .regex(/[^A-Za-z0-9]/, t("auth.validation.passwordSpecial"))
        .regex(/^\S*$/, t("auth.validation.passwordNoSpaces")),
      confirmPassword: z
        .string()
        .min(1, t("auth.validation.passwordConfirmRequired")),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: t("auth.validation.passwordsDoNotMatch"),
      path: ["confirmPassword"],
    });

export type ResetPasswordFormData = z.infer<
  ReturnType<typeof createResetPasswordSchema>
>;
