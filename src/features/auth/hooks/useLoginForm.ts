import { zodResolver } from "@hookform/resolvers/zod";
import { ROUTES } from "app/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { authAPI } from "../lib/api";
import { createLoginSchema, type LoginFormData } from "../lib/validation";

export const useLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const loginSchema = createLoginSchema(t);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    mode: "onChange",
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <i18n.language — это «флаг» того, что язык изменился>
  useEffect(() => {
    type FieldNames = keyof LoginFormData;
    const touchedFields = Object.keys(form.formState.errors) as FieldNames[];

    if (touchedFields.length > 0) {
      form.trigger(touchedFields);
    }
  }, [form, i18n.language]);

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);

    try {
      const response = await authAPI.login(data);
      if (response.success) {
        // Переходим на страницу сессий
        navigate(ROUTES.SESSIONS);
      } else {
        setSnackbarMessage(response.message || t("auth.error.generic"));
        setSnackbarOpen(true);
      }
    } catch {
      setSnackbarMessage(t("auth.error.network"));
      setSnackbarOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  return {
    form,
    isLoading,
    showPassword,
    snackbarOpen,
    snackbarMessage,
    onSubmit: form.handleSubmit(onSubmit),
    togglePasswordVisibility,
    closeSnackbar,
  };
};
