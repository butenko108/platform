import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import type React from "react";
import { useId } from "react";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { BaseModal } from "shared/components/BaseModal";
import { COLORS } from "shared/constants/colors";
import { useForgotPasswordForm } from "../hooks/useForgotPasswordForm";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
  onError: (message: string) => void;
}

export const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  onError,
}) => {
  const { t } = useTranslation();
  const { form, isLoading, onSubmit, handleCancel } = useForgotPasswordForm({
    onSuccess,
    onError,
    onClose,
  });
  const titleId = useId();

  const {
    control,
    formState: { errors },
  } = form;

  return (
    <BaseModal open={isOpen} onClose={handleCancel} aria-labelledby={titleId}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* Заголовок */}
        <Typography
          id={titleId}
          variant="headline/small"
          component="h2"
          sx={{
            color: COLORS.text.primary,
          }}
        >
          {t("auth.recovery.title")}
        </Typography>

        {/* Информационный текст */}
        <Typography
          variant="body/large"
          sx={{
            color: COLORS.text.secondary,
          }}
        >
          {t("auth.recovery.instructions")}
        </Typography>

        {/* Форма */}
        <form onSubmit={onSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* Email поле */}
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t("auth.email")}
                  placeholder={t("auth.emailPlaceholder")}
                  type="email"
                  autoComplete="email"
                  autoFocus
                  fullWidth
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  disabled={isLoading}
                  slotProps={{
                    inputLabel: {
                      sx: {
                        fontFamily: "Manrope",
                        fontSize: "16px",
                        fontWeight: 500,
                        color: COLORS.text.secondary,
                        "&.Mui-focused": {
                          color: COLORS.text.blue,
                        },
                      },
                    },
                  }}
                />
              )}
            />

            {/* Кнопки */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="outlined"
                fullWidth
                disabled={isLoading}
                onClick={handleCancel}
                sx={{
                  height: "56px",
                  borderRadius: "12px",
                  color: COLORS.primary.main,
                  borderColor: COLORS.primary.main,
                  backgroundColor: COLORS.background.default,
                  textTransform: "none",
                  "&:hover": {
                    borderColor: COLORS.primary.main,
                    backgroundColor: COLORS.states.hover,
                  },
                  "&:disabled": {
                    borderColor: COLORS.states.disabled,
                    color: COLORS.states.disabled,
                  },
                }}
                aria-label={t("auth.recovery.cancel")}
              >
                <Typography variant="body/small" color="inherit">
                  {t("auth.recovery.cancel")}
                </Typography>
              </Button>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isLoading}
                sx={{
                  height: "56px",
                  borderRadius: "12px",
                  backgroundColor: COLORS.primary.main,
                  color: COLORS.text.white,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: COLORS.primary.main,
                    opacity: 0.9,
                  },
                  "&:disabled": {
                    backgroundColor: COLORS.primary.main,
                    color: COLORS.text.white,
                    opacity: 0.7,
                  },
                }}
                aria-label={t("auth.recovery.confirm")}
              >
                {isLoading ? (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CircularProgress size={20} color="inherit" />
                    <Typography variant="body/small" color="inherit">
                      {t("auth.recovery.sending")}
                    </Typography>
                  </Box>
                ) : (
                  <Typography variant="body/small" color="inherit">
                    {t("auth.recovery.confirm")}
                  </Typography>
                )}
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </BaseModal>
  );
};
