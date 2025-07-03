import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type React from "react";

export const SessionsPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...theme.customMixins.flexCenter,
        ...theme.customMixins.fullHeight,
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "grey.800",
            mb: 2,
          }}
        >
          Sessions Page
        </Typography>
        <Typography variant="body1" sx={{ color: "grey.600" }}>
          You have successfully logged in!
        </Typography>
      </Box>
    </Box>
  );
};
