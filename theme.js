import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#F9F8FD",
      main: "#000000",
    },
    secondary: {
      main: "#514E4E",
    },
  },
  typography: {
    fontFamily: `'Inter', 'Helvetica',  'sans-serif'`,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: 30,
          fontFamily: `'Metropolis', 'Helvetica',  'sans-serif'`,
          textTransform: "uppercase",
          padding: "10px 50px",
          fontWeight: 700,
          fontSize: 12,
        },
        sizeSmall: {
          fontSize: 10,
        },
        sizeMedium: {
          fontSize: 12,
        },
        sizeLarge: {
          fontSize: 16,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 768,
      lg: 1200,
      xl: 1400,
    },
  },
});
