import { zodResolver } from "@hookform/resolvers/zod";
import { ROUTES } from "app/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { authAPI } from "../lib/api";
import {
  createResetPasswordSchema,
  type ResetPasswordFormData,
} from "../lib/createResetPasswordSchema";

export const useResetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const resetPasswordSchema = createResetPasswordSchema(t);

  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <При изменении языка должен измениться язык ошибок валидации>
  useEffect(() => {
    type FieldNames = keyof ResetPasswordFormData;
    const touchedFields = Object.keys(form.formState.errors) as FieldNames[];

    if (touchedFields.length > 0) {
      form.trigger(touchedFields);
    }
  }, [form, i18n.language]);

  const onSubmit = async (data: ResetPasswordFormData) => {
    setIsLoading(true);

    try {
      const response = await authAPI.resetPassword(data);
      if (response.success) {
        // Переходим на страницу авторизации с сообщением об успехе
        navigate(ROUTES.AUTH, {
          state: {
            message: t("auth.resetPassword.success"),
            severity: "success",
          },
        });
      } else {
        const errorMessage = response.message?.startsWith("auth.")
          ? t(response.message)
          : response.message || t("auth.resetPassword.error.generic");
        setSnackbarMessage(errorMessage);
        setSnackbarOpen(true);
      }
    } catch {
      setSnackbarMessage(t("auth.error.network"));
      setSnackbarOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  return {
    form,
    isLoading,
    showNewPassword,
    showConfirmPassword,
    snackbarOpen,
    snackbarMessage,
    onSubmit: form.handleSubmit(onSubmit),
    toggleNewPasswordVisibility,
    toggleConfirmPasswordVisibility,
    closeSnackbar,
  };
};
