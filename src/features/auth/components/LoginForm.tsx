import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
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
import { useLoginForm } from "../hooks/useLoginForm";

interface LoginFormProps {
  onForgotPasswordClick: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onForgotPasswordClick,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const {
    form,
    isLoading,
    showPassword,
    snackbarOpen,
    snackbarMessage,
    onSubmit,
    togglePasswordVisibility,
    closeSnackbar,
  } = useLoginForm();

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
          {t("auth.welcome")}
        </Typography>
        <Typography
          variant="headline/large"
          sx={{
            color: COLORS.text.primary,
          }}
          component="h1"
        >
          {t("auth.subtitle")}
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{ ...theme.customMixins.flexColumn, gap: 2 }}
      >
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

        {/* Password поле */}
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={t("auth.password")}
              placeholder={t("auth.passwordPlaceholder")}
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              fullWidth
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password?.message}
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
                        onClick={togglePasswordVisibility}
                        edge="end"
                        disabled={isLoading}
                        sx={{
                          color: "grey.500",
                          "&:hover": {
                            color: "grey.700",
                          },
                        }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          )}
        />

        {/* Remember Me чекбокс */}
        <Controller
          name="rememberMe"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={
                <Checkbox
                  {...field}
                  checked={field.value}
                  disabled={isLoading}
                  sx={{
                    color: COLORS.primary.main,
                    "&.Mui-checked": {
                      color: COLORS.primary.main,
                    },
                  }}
                />
              }
              label={
                <Typography
                  variant="body/medium"
                  sx={{ color: COLORS.text.secondary }}
                >
                  {t("auth.rememberMe")}
                </Typography>
              }
            />
          )}
        />

        {/* Кнопка Log in */}
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
                {t("auth.signingIn")}
              </Typography>
            </Box>
          ) : (
            <Typography variant="body/small" color="inherit">
              {t("auth.signIn")}
            </Typography>
          )}
        </Button>

        {/* Забыли пароль */}
        <Box sx={{ textAlign: "center", py: 2 }}>
          <Button
            variant="text"
            onClick={onForgotPasswordClick}
            disabled={isLoading}
            sx={{
              color: COLORS.text.blue,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "transparent",
                textDecoration: "underline",
              },
              "&:disabled": {
                color: COLORS.states.disabled,
              },
            }}
          >
            <Typography variant="body/small" color="inherit">
              {t("auth.forgotPassword")}
            </Typography>
          </Button>
        </Box>
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
