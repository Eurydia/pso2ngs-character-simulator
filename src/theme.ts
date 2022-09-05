import { createTheme } from "@mui/material";

export const style_overrrides = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            borderRadius: "1.25rem",
          };
        },
      },
    },
  },
});
