import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { TemaTheme } from "./";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={TemaTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
