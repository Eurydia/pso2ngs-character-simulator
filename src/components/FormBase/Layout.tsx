import { FC, ReactNode } from "react";
import { Grid, useTheme } from "@mui/material";

type LayoutProps = {
  children: ReactNode | ReactNode[];
  stat: ReactNode | ReactNode[];
};
export const Layout: FC<LayoutProps> = (props) => {
  const theme = useTheme();
  const { children, stat } = props;

  let slot_a: ReactNode | ReactNode[] = children;
  let slot_b: ReactNode | ReactNode[] = stat;

  if (theme.breakpoints.down("md")) {
    slot_a = stat;
    slot_b = children;
  }

  return (
    <Grid container spacing={3} columns={{ sm: 1, md: 2 }}>
      <Grid item xs={1}>
        {slot_a}
      </Grid>
      <Grid item xs={1}>
        {slot_b}
      </Grid>
    </Grid>
  );
};
