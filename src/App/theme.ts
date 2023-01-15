import { createTheme } from "@mui/material";
import { grey, indigo } from "@mui/material/colors";

export const style_overrides = createTheme({
  components: {},
  palette: {
    primary: indigo,
    text: {
      primary: grey["800"],
      secondary: grey["600"],
      disabled: grey["500"],
    },
  },
});
