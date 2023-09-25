import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

export const AppTheme = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
