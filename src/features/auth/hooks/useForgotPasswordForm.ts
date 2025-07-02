import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { authAPI } from "../lib/api";
import {
  createForgotPasswordSchema,
  type ForgotPasswordFormData,
} from "../lib/forgotPasswordValidation";

interface UseForgotPasswordFormProps {
  onSuccess: (message: string) => void;
  onError: (message: string) => void;
  onClose: () => void;
}

export const useForgotPasswordForm = ({
  onSuccess,
  onError,
  onClose,
}: UseForgotPasswordFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const forgotPasswordSchema = createForgotPasswordSchema(t);

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <При изменении языка должен измениться язык ошибок валидации>
  useEffect(() => {
    type FieldNames = keyof ForgotPasswordFormData;
    const touchedFields = Object.keys(form.formState.errors) as FieldNames[];

    if (touchedFields.length > 0) {
      form.trigger(touchedFields);
    }
  }, [form, i18n.language]);

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);

    try {
      const response = await authAPI.sendPasswordRecoveryEmail(data.email);

      if (response.success) {
        onSuccess(t("auth.recovery.success"));
        form.reset();
        onClose();
      } else {
        onError(response.message || t("auth.recovery.error.generic"));
      }
    } catch {
      onError(t("auth.error.network"));
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    form.reset();
    onClose();
  };

  return {
    form,
    isLoading,
    onSubmit: form.handleSubmit(onSubmit),
    handleCancel,
  };
};
