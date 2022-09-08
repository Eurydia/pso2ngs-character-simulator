import { FC, ReactNode } from "react";
import { Divider, Grid, Stack } from "@mui/material";

interface EquipmentFormLayoutProps {
  equipmentSlot: ReactNode;
  enhancementSlot: ReactNode;
  fixaSlot: ReactNode;
  augmentSlot: ReactNode;
}
const EquipmentFormLayout: FC<EquipmentFormLayoutProps> = (props) => {
  return (
    <Stack spacing={2} divider={<Divider flexItem />}>
      <Grid container columns={{ md: 2, xs: 1 }} spacing={2}>
        <Grid item md={2} xs={1}>
          {props.equipmentSlot}
        </Grid>
        <Grid item xs={1}>
          {props.enhancementSlot}
        </Grid>
        <Grid item xs={1}>
          {props.fixaSlot}
        </Grid>
      </Grid>
      {props.augmentSlot}
    </Stack>
  );
};

export default EquipmentFormLayout;
