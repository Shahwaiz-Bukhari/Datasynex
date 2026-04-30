"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme/theme";
import SmoothScrollProvider from "../components/SmoothScrollProvider";
import Cursor from "../components/Cursor";

export default function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SmoothScrollProvider>
        <Cursor />
        {children}
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
