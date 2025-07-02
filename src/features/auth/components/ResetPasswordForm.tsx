import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import clsx from "clsx";
import type React from "react";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { COLORS } from "shared/constants/colors";
import { useResetPasswordForm } from "../hooks/useResetPasswordForm";

export const ResetPasswordForm: React.FC = () => {
  const { t } = useTranslation();
  const {
    form,
    isLoading,
    showNewPassword,
    showConfirmPassword,
    snackbarOpen,
    snackbarMessage,
    onSubmit,
    toggleNewPasswordVisibility,
    toggleConfirmPasswordVisibility,
    closeSnackbar,
  } = useResetPasswordForm();

  const {
    control,
    formState: { errors },
  } = form;

  return (
    <Box className="w-full max-w-[420px] mx-auto">
      {/* Заголовок */}
      <Box className="mb-8 text-center">
        <Typography
          variant="headline/large"
          className="mb-1"
          component="h1"
          sx={{
            color: COLORS.text.blue,
          }}
        >
          {t("auth.resetPassword.title")}
        </Typography>
        <Typography
          variant="headline/large"
          sx={{
            color: COLORS.text.primary,
          }}
          component="h1"
        >
          {t("auth.resetPassword.subtitle")}
        </Typography>
      </Box>

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        {/* New Password поле */}
        <Controller
          name="newPassword"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={t("auth.resetPassword.newPassword")}
              placeholder={t("auth.resetPassword.newPasswordPlaceholder")}
              type={showNewPassword ? "text" : "password"}
              autoComplete="new-password"
              autoFocus
              fullWidth
              variant="outlined"
              error={!!errors.newPassword}
              helperText={errors.newPassword?.message}
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
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={toggleNewPasswordVisibility}
                        edge="end"
                        disabled={isLoading}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        {showNewPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
        />

        {/* Confirm Password поле */}
        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={t("auth.resetPassword.confirmPassword")}
              placeholder={t("auth.resetPassword.confirmPasswordPlaceholder")}
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="new-password"
              fullWidth
              variant="outlined"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
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
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={toggleConfirmPasswordVisibility}
                        edge="end"
                        disabled={isLoading}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
        />

        {/* Кнопка Update password */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={isLoading}
          className={clsx("h-14 rounded-xl", isLoading && "opacity-70")}
          sx={{
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
            },
          }}
        >
          {isLoading ? (
            <Box className="flex items-center gap-2">
              <CircularProgress size={20} color="inherit" />
              <Typography variant="body/small" color="inherit">
                {t("auth.resetPassword.updating")}
              </Typography>
            </Box>
          ) : (
            <Typography variant="body/small" color="inherit">
              {t("auth.resetPassword.updatePassword")}
            </Typography>
          )}
        </Button>
      </form>

      {/* Snackbar для ошибок */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={closeSnackbar}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};
