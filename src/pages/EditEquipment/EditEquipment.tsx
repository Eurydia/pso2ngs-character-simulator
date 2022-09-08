import { FC } from "react";
import {
  Card,
  CardContent,
  Grid,
  CardHeader,
  Container,
  Box,
} from "@mui/material";
import WeaponForm from "./subcomponents/WeaponForm";
import UnitForm from "./subcomponents/UnitForm";

interface EditEquipmentProps {}
const EditEquipment: FC<EditEquipmentProps> = () => {
  return (
    <Container maxWidth="lg">
      <Grid container columns={{ md: 2, xs: 1 }} spacing={2}>
        <Grid item xs={1}>
          <Card variant="outlined">
            <CardHeader title="Weapon" />
            <CardContent>
              <WeaponForm />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card variant="outlined">
            <CardHeader title="Unit" />
            <CardContent>
              <UnitForm />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card variant="outlined">
            <CardHeader title="Unit" />
            <CardContent>
              <UnitForm />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card variant="outlined">
            <CardHeader title="Unit" />
            <CardContent>
              <UnitForm />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditEquipment;
