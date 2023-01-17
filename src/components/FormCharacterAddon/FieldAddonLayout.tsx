import { FC, ReactNode } from "react";
import { Box, Grid, Stack } from "@mui/material";

type FieldAddonLayoutProps = {
  slotCheckbox: ReactNode;
  slotLabel: ReactNode;
  slotField: ReactNode;
};
export const FieldAddonLayout: FC<FieldAddonLayoutProps> = (
  props,
) => {
  const { slotLabel, slotCheckbox, slotField } = props;
  return (
    <Box>
      <Grid container columns={3} spacing={1} alignItems="center">
        <Grid item xs>
          <Stack spacing={1} direction="row" alignItems="center">
            {slotCheckbox}
            {slotLabel}
          </Stack>
        </Grid>
        <Grid item xs={1}>
          {slotField}
        </Grid>
      </Grid>
    </Box>
  );
};
