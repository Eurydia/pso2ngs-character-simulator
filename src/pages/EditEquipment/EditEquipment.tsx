import { FC } from "react";
import {
  Card,
  CardContent,
  Grid,
  CardHeader,
  Container,
  Box,
  Divider,
  Stack,
} from "@mui/material";
import WeaponForm from "./subcomponents/WeaponForm";
import UnitForm from "./subcomponents/UnitForm";
import { purple } from "@mui/material/colors";

interface EditEquipmentProps {}
const EditEquipment: FC<EditEquipmentProps> = () => {
  return (
    <Container maxWidth="lg">
      <Grid container columns={{ md: 2, xs: 1 }} spacing={4}>
        <Grid item xs={1}>
          <Card raised>
            <CardHeader title="Weapon" />
            <CardContent>
              <WeaponForm />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card raised>
            <CardHeader title="Unit" />
            <CardContent>
              <UnitForm />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card raised>
            <CardHeader title="Unit" />
            <CardContent>
              <UnitForm />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card raised>
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
