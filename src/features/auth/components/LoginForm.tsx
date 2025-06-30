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
  Link,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import clsx from "clsx";
import type React from "react";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { COLORS } from "shared/constants/colors";
import { useLoginForm } from "../hooks/useLoginForm";

export const LoginForm: React.FC = () => {
  const { t } = useTranslation();
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
    <Box className="w-full max-w-[420px] mx-auto">
      {/* Заголовок */}
      <Box className="mb-8">
        <Typography
          variant="h1"
          className="text-[28px] leading-[40px] font-medium mb-1"
          style={{
            color: COLORS.text.primary,
            letterSpacing: "1.12px",
          }}
        >
          {t("auth.welcome")}
        </Typography>
        <Typography
          variant="h2"
          className="text-[28px] leading-[40px] font-medium"
          style={{
            color: COLORS.text.secondary,
            letterSpacing: "1.12px",
          }}
        >
          {t("auth.subtitle")}
        </Typography>
      </Box>

      {/* Форма */}
      <form onSubmit={onSubmit} className="space-y-6">
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
              className="w-full"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  "& fieldset": {
                    borderColor: COLORS.border,
                  },
                  "&:hover fieldset": {
                    borderColor: COLORS.primary.main,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: COLORS.primary.main,
                  },
                },
                "& .MuiInputLabel-root": {
                  color: COLORS.text.secondary,
                  "&.Mui-focused": {
                    color: COLORS.primary.main,
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
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={togglePasswordVisibility}
                      edge="end"
                      disabled={isLoading}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  "& fieldset": {
                    borderColor: COLORS.border,
                  },
                  "&:hover fieldset": {
                    borderColor: COLORS.primary.main,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: COLORS.primary.main,
                  },
                },
                "& .MuiInputLabel-root": {
                  color: COLORS.text.secondary,
                  "&.Mui-focused": {
                    color: COLORS.primary.main,
                  },
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
              label={t("auth.rememberMe")}
              className="text-gray-700"
            />
          )}
        />

        {/* Кнопка Log in */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={isLoading}
          className={clsx(
            "h-14 rounded-xl font-medium text-white",
            "normal-case text-base",
            isLoading && "opacity-70",
          )}
          sx={{
            backgroundColor: COLORS.primary.main,
            "&:hover": {
              backgroundColor: COLORS.primary.main,
              opacity: 0.9,
            },
            "&:disabled": {
              backgroundColor: COLORS.primary.main,
              color: "white",
            },
          }}
        >
          {isLoading ? (
            <Box className="flex items-center gap-2">
              <CircularProgress size={20} color="inherit" />
              {t("auth.signingIn")}
            </Box>
          ) : (
            t("auth.signIn")
          )}
        </Button>

        {/* Забыли пароль */}
        <Box className="text-center">
          <Link
            href="#"
            className="text-base font-medium no-underline hover:underline"
            style={{ color: COLORS.primary.main }}
          >
            {t("auth.forgotPassword")}
          </Link>
        </Box>
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
