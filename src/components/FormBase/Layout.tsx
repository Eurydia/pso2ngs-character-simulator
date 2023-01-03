import { FC, ReactNode } from "react";
import { Grid, useTheme, useMediaQuery } from "@mui/material";

type LayoutProps = {
  slot_a: ReactNode | ReactNode[];
  slot_b: ReactNode | ReactNode[];
};
export const Layout: FC<LayoutProps> = (props) => {
  const theme = useTheme();
  const { slot_a, slot_b } = props;

  let slot_one: ReactNode | ReactNode[] = slot_a;
  let slot_two: ReactNode | ReactNode[] = slot_b;

  if (useMediaQuery(theme.breakpoints.down("sm"))) {
    slot_one = slot_b;
    slot_two = slot_a;
  }

  return (
    <Grid container spacing={3} columns={{ sm: 1, md: 2 }}>
      <Grid item xs={1}>
        {slot_one}
      </Grid>
      <Grid item xs={1}>
        {slot_two}
      </Grid>
    </Grid>
  );
};
