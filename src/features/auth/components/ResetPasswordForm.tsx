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
import { useTheme } from "@mui/material/styles";
import type React from "react";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { COLORS } from "shared/constants/colors";
import { useResetPasswordForm } from "../hooks/useResetPasswordForm";

export const ResetPasswordForm: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
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
    <Box sx={{ width: "100%", maxWidth: "420px", mx: "auto" }}>
      {/* Заголовок */}
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography
          variant="headline/large"
          component="h1"
          sx={{
            color: COLORS.text.blue,
            mb: 0.5,
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

      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{ ...theme.customMixins.flexColumn, gap: 2 }}
      >
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
                        sx={{
                          color: "grey.500",
                          "&:hover": {
                            color: "grey.700",
                          },
                        }}
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
                        sx={{
                          color: "grey.500",
                          "&:hover": {
                            color: "grey.700",
                          },
                        }}
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
          sx={{
            height: "56px",
            borderRadius: "12px",
            backgroundColor: COLORS.primary.main,
            color: COLORS.text.white,
            textTransform: "none",
            opacity: isLoading ? 0.7 : 1,
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
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
      </Box>

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
