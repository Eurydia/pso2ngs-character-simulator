import { FC, ReactNode } from "react";
import { Grid, useTheme, useMediaQuery } from "@mui/material";

type LayoutProps = {
  slot_primary: ReactNode | ReactNode[];
  slot_secondary: ReactNode | ReactNode[];
};
export const Layout: FC<LayoutProps> = (props) => {
  const theme = useTheme();
  const { slot_primary, slot_secondary } = props;

  let primary: ReactNode | ReactNode[] = slot_primary;
  let secondary: ReactNode | ReactNode[] = slot_secondary;

  // if (useMediaQuery(theme.breakpoints.down("md"))) {
  //   primary = slot_secondary;
  //   secondary = slot_primary;
  // }

  return (
    <Grid container spacing={3} columns={{ sm: 1, md: 2 }}>
      <Grid item xs={1}>
        {primary}
      </Grid>
      <Grid item xs={1}>
        {secondary}
      </Grid>
    </Grid>
  );
};
