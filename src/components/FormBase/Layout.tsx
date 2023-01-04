import { FC, ReactNode } from "react";
import { Grid, useTheme, useMediaQuery } from "@mui/material";

type LayoutProps = {
  slotPrimary: ReactNode | ReactNode[];
  slotSecondary: ReactNode | ReactNode[];
};
export const Layout: FC<LayoutProps> = (props) => {
  const theme = useTheme();
  const { slotPrimary: slot_primary, slotSecondary: slot_secondary } =
    props;

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
