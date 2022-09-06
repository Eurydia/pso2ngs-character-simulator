import { createTheme } from "@mui/material";

export const style_overrrides = createTheme({
  components: {
    MuiPaper: {
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
