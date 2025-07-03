import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ROUTES } from "app/router";
import { icons } from "assets";
import { LanguageSelector } from "features/auth/components/LanguageSelector";
import { ResetPasswordForm } from "features/auth/components/ResetPasswordForm";
import type React from "react";
import { Link } from "react-router";
import { COLORS } from "shared/constants/colors";

export const ResetPasswordPage: React.FC = () => {
  const theme = useTheme();

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
          <ResetPasswordForm />
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
    </Box>
  );
};
