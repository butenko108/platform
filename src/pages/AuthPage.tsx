import { Alert, Box, Snackbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ROUTES } from "app/router";
import { icons } from "assets";
import { ForgotPasswordModal } from "features/auth/components/ForgotPasswordModal";
import { LanguageSelector } from "features/auth/components/LanguageSelector";
import { LoginForm } from "features/auth/components/LoginForm";
import type React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { COLORS } from "shared/constants/colors";

export const AuthPage: React.FC = () => {
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success",
  );
  const location = useLocation();
  const theme = useTheme();

  // отображение уведомления о успешном обновлении пароля после того, как использовали функцию забыть пароль
  useEffect(() => {
    if (location.state?.message) {
      setSnackbarMessage(location.state.message);
      setSnackbarSeverity(location.state.severity || "success");
      setSnackbarOpen(true);

      // Очищаем state после показа уведомления о успешном обновлении пароля
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleForgotPasswordClick = () => {
    setIsForgotPasswordOpen(true);
  };

  const handleForgotPasswordClose = () => {
    setIsForgotPasswordOpen(false);
  };

  const handleSuccess = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  const handleError = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarSeverity("error");
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ ...theme.customMixins.fullHeight, display: "flex" }}>
      <Box
        sx={{
          width: { xs: "100%", lg: "66.666%" },
          ...theme.customMixins.flexColumn,
          p: 5,
        }}
      >
        <Box sx={{ ...theme.customMixins.flexBetween }}>
          <Link to={ROUTES.AUTH}>
            <img src={icons.logo} alt="netronic logo" />
          </Link>

          <LanguageSelector />
        </Box>

        <Box sx={{ flex: 1, ...theme.customMixins.flexCenter }}>
          <LoginForm onForgotPasswordClick={handleForgotPasswordClick} />
        </Box>
      </Box>

      <Box
        sx={{
          ...theme.customMixins.hideOnMobile,
          width: { lg: "33.333%" },
          position: "relative",
          overflow: "hidden",
          backgroundColor: COLORS.primary.background,
        }}
      >
        <Box
          component="img"
          src={icons.logo_big}
          alt="netronic big logo"
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "90%",
            height: "90%",
          }}
        />
      </Box>

      {/* Модалка восстановления пароля */}
      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={handleForgotPasswordClose}
        onSuccess={handleSuccess}
        onError={handleError}
      />

      {/* Глобальный Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};
