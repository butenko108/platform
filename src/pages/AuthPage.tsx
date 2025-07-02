import { Alert, Box, Snackbar } from "@mui/material";
import { icons } from "assets";
import clsx from "clsx";
import { ForgotPasswordModal } from "features/auth/components/ForgotPasswordModal";
import { LanguageSelector } from "features/auth/components/LanguageSelector";
import { LoginForm } from "features/auth/components/LoginForm";
import type React from "react";
import { useState } from "react";
import { COLORS } from "shared/constants/colors";

export const AuthPage: React.FC = () => {
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success",
  );

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
    <Box className="min-h-screen flex">
      <Box className="w-full lg:w-2/3 flex flex-col p-10">
        <Box className="flex items-center justify-between">
          <img src={icons.logo} alt="netronic logo" />
          <LanguageSelector />
        </Box>

        <Box className="flex-1 flex items-center justify-center">
          <LoginForm onForgotPasswordClick={handleForgotPasswordClick} />
        </Box>
      </Box>

      <Box
        className={clsx("hidden lg:block lg:w-1/3", "relative overflow-hidden")}
        style={{ backgroundColor: COLORS.primary.background }}
      >
        <img
          src={icons.logo_big}
          alt="netronic big logo"
          className="absolute bottom-0 right-0 size-[90%]"
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
