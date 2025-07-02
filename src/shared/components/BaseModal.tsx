import { Close } from "@mui/icons-material";
import { Box, Dialog, DialogContent, IconButton } from "@mui/material";
import type React from "react";
import { COLORS } from "shared/constants/colors";

interface BaseModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  "aria-labelledby"?: string;
}

export const BaseModal: React.FC<BaseModalProps> = ({
  open,
  onClose,
  children,
  "aria-labelledby": ariaLabelledBy,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      aria-labelledby={ariaLabelledBy}
      slotProps={{
        paper: {
          sx: {
            borderRadius: "12px",
            position: "relative",
          },
        },
      }}
    >
      {/* Крестик в правом верхнем углу */}
      <IconButton
        onClick={onClose}
        aria-label="Close"
        sx={{
          position: "absolute",
          right: 16,
          top: 16,
          color: COLORS.text.secondary,
          zIndex: 1,
          "&:hover": {
            backgroundColor: COLORS.states.hover,
          },
        }}
      >
        <Close />
      </IconButton>

      {/* Контент с центрированием и паддингом */}
      <DialogContent
        sx={{
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ width: "100%" }}>{children}</Box>
      </DialogContent>
    </Dialog>
  );
};
