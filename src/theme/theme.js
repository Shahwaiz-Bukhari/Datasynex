import { createTheme } from "@mui/material/styles";

const palette = {
  background: "#FFFFFF",
  surface: "#F4F8FF",
  surfaceElevated: "#EAF2FF",
  accent: "#1A6FFF",
  highlight: "#38BDF8",
  textPrimary: "#0A1628",
  textMuted: "#2d3036",
  border: "rgba(26, 111, 255, 0.12)",
  glow: "rgba(56, 189, 248, 0.15)",
  gradient: "linear-gradient(135deg, #1A6FFF, #38BDF8)",
  footer: "#0A1628",
};

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: palette.accent,
      light: palette.highlight,
      dark: "#125AE0",
      contrastText: palette.background,
    },
    secondary: {
      main: palette.highlight,
      contrastText: palette.textPrimary,
    },
    background: {
      default: palette.background,
      paper: palette.background,
    },
    text: {
      primary: palette.textPrimary,
      secondary: palette.textMuted,
    },
    divider: palette.border,
    custom: palette,
  },
  shape: {
    borderRadius: 16,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1536,
    },
  },
  shadows: [
    "none",
    "0 4px 24px rgba(26,111,255,0.08)",
    "0 8px 28px rgba(26,111,255,0.08)",
    "0 10px 32px rgba(26,111,255,0.09)",
    ...Array(21).fill("0 12px 36px rgba(26,111,255,0.10)"),
  ],
  typography: {
    fontFamily: 'var(--font-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontFamily: "var(--font-display), sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.03em",
      lineHeight: 1.05,
    },
    h2: {
      fontFamily: "var(--font-display), sans-serif",
      fontWeight: 700,
      letterSpacing: "-0.025em",
      lineHeight: 1.12,
    },
    h3: {
      fontFamily: "var(--font-display), sans-serif",
      fontWeight: 600,
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: "var(--font-display), sans-serif",
      fontWeight: 600,
      letterSpacing: "-0.015em",
    },
    h5: {
      fontFamily: "var(--font-display), sans-serif",
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h6: {
      fontFamily: "var(--font-display), sans-serif",
      fontWeight: 600,
    },
    subtitle1: { fontWeight: 500 },
    subtitle2: { fontWeight: 500 },
    button: {
      fontWeight: 600,
      textTransform: "none",
      letterSpacing: "0.01em",
    },
    body1: {
      lineHeight: 1.75,
      color: "#000000",
      letterSpacing: "-0.005em",
      fontWeight: 500,
    },
    body2: {
      lineHeight: 1.7,
      color: "#000000",
      letterSpacing: "-0.003em",
      fontWeight: 500,
    },
    caption: {
      fontFamily: "var(--font-jetbrains), monospace",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingLeft: 22,
          paddingRight: 22,
          boxShadow: "none",
          fontSize: "0.95rem",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
});

export default theme;
