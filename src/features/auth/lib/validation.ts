import type { TFunction } from "i18next";
import { z } from "zod";

export const createLoginSchema = (t: TFunction) => z.object({
  email: z.string()
    .min(1, t("auth.validation.emailRequired"))
    .email(t("auth.validation.emailInvalid")),
  password: z.string()
    .min(8, t("auth.validation.passwordMin"))
    .max(100, t("auth.validation.passwordMax"))
    .regex(/[A-Z]/, t("auth.validation.passwordUppercase"))
    .regex(/[a-z]/, t("auth.validation.passwordLowercase"))
    .regex(/[0-9]/, t("auth.validation.passwordNumber"))
    .regex(/[^A-Za-z0-9]/, t("auth.validation.passwordSpecial"))
    .regex(/^\S*$/, t("auth.validation.passwordNoSpaces")),
  rememberMe: z.boolean(),
});

export type LoginFormData = z.infer<ReturnType<typeof createLoginSchema>>;
