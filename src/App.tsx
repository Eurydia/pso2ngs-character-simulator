import { FC } from "react";
import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
} from "@mui/material";

import { style_overrides } from "./theme";

import { PageHome } from "./pages";

export const App: FC = () => {
  return (
    <ThemeProvider theme={style_overrides}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: style_overrides.palette.primary.light,
          },
        }}
      />
      <PageHome />
    </ThemeProvider>
  );
};
