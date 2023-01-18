import { FC, ReactNode } from "react";
import { Box, Grid, Stack } from "@mui/material";

type FieldSkillLayoutProps = {
  slotLabel: ReactNode;
  slotField: ReactNode;
};
export const FieldSkillLayout: FC<FieldSkillLayoutProps> = (
  props,
) => {
  const { slotLabel, slotField } = props;
  return (
    <Box>
      <Grid container columns={3} spacing={1} alignItems="center">
        <Grid item xs>
          {slotLabel}
        </Grid>
        <Grid item xs={1}>
          {slotField}
        </Grid>
      </Grid>
    </Box>
  );
};
