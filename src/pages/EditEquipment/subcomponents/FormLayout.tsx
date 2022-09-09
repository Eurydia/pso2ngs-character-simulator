import { FC, ReactNode } from "react";
import { Divider, Grid } from "@mui/material";

interface FormLayoutProps {
  equipmentSlot: ReactNode;
  enhancementSlot: ReactNode;
  fixaSlot: ReactNode;
  augmentSlot: ReactNode;
}
const FormLayout: FC<FormLayoutProps> = (props) => {
  return (
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
      <Grid item md={2} xs={1}>
        <Divider flexItem />
      </Grid>
      <Grid item md={2} xs={1}>
        {props.augmentSlot}
      </Grid>
    </Grid>
  );
};

export default FormLayout;
