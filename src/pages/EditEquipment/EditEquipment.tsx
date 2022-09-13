import { FC } from "react";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import FormWeapon from "./subcomponents/FormWeapon";
import FormUnit from "./subcomponents/FormUnit";
import StatsOverview from "../../GlobalComponents/StatOverview";

interface EditEquipmentProps {}
const EditEquipment: FC<EditEquipmentProps> = () => {
  return (
    <Grid container columns={{ md: 2, xs: 1 }} spacing={2}>
      <Grid item md={2} xs={1}>
        <Card sx={{ borderRadius: "1.25rem" }}>
          <CardHeader title="Equipment Overview" />
          <CardContent>
            <StatsOverview />
          </CardContent>
        </Card>
      </Grid>
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
