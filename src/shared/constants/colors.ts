export const COLORS = {
  // Primary colors
  primary: {
    main: "#002681", // Text-Blue
    background: "#233F99", // основной фон
  },

  // Text colors
  text: {
    primary: "#000", // Text-Black
    secondary: "#919094", // Text-Light-gray
    white: "#FFF", // Text-White
    blue: "#002681", // Text-Blue
  },

  // Border colors
  border: {
    default: "#E4E1E6",
    hover: "#999",
    focused: "#002681",
  },

  // Background colors
  background: {
    default: "#FFFFFF",
    paper: "#FFFFFF",
    disabled: "#F5F5F5",
  },

  // Status colors
  status: {
    error: "#D32F2F",
    warning: "#ED6C02",
    info: "#0288D1",
    success: "#2E7D32",
  },

  // Interaction states
  states: {
    hover: "rgba(0, 38, 129, 0.04)",
    pressed: "rgba(0, 38, 129, 0.12)",
    disabled: "rgba(0, 0, 0, 0.12)",
  },
} as const;

// Типы для TypeScript
export type ColorKey = keyof typeof COLORS;
export type TextColorKey = keyof typeof COLORS.text;
export type BorderColorKey = keyof typeof COLORS.border;
