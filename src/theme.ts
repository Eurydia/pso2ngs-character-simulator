import { createTheme } from "@mui/material";

export const style_overrrides = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            borderWidth: 4,
            borderStyle: "solid",
            borderRadius: "10px",
            borderColor: theme.palette.primary.light,
          };
        },
      },
    },
  },
});
