import { Box } from "@mui/material";
import { ROUTES } from "app/router";
import { icons } from "assets";
import clsx from "clsx";
import { LanguageSelector } from "features/auth/components/LanguageSelector";
import { ResetPasswordForm } from "features/auth/components/ResetPasswordForm";
import type React from "react";
import { Link } from "react-router";
import { COLORS } from "shared/constants/colors";

export const ResetPasswordPage: React.FC = () => {
  return (
    <Box className="min-h-screen flex">
      <Box className="w-full lg:w-2/3 flex flex-col p-10">
        <Box className="flex items-center justify-between">
          <Link to={ROUTES.AUTH}>
            <img src={icons.logo} alt="netronic logo" />
          </Link>
          
          <LanguageSelector />
        </Box>

        <Box className="flex-1 flex items-center justify-center">
          <ResetPasswordForm />
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
    </Box>
  );
};
