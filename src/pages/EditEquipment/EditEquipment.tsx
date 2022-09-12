import { FC } from "react";
import { Grid, Container } from "@mui/material";
import FormWeapon from "./subcomponents/FormWeapon";
import FormUnit from "./subcomponents/FormUnit";

interface EditEquipmentProps {}
const EditEquipment: FC<EditEquipmentProps> = () => {
  return (
    <Grid container columns={{ md: 2, xs: 1 }} spacing={4}>
      <Grid item xs={1}>
        <FormWeapon />
      </Grid>
      <Grid item xs={1}>
        <FormUnit index={1} />
      </Grid>
      <Grid item xs={1}>
        <FormUnit index={2} />
      </Grid>
      <Grid item xs={1}>
        <FormUnit index={3} />
      </Grid>
    </Grid>
  );
};

export default EditEquipment;
