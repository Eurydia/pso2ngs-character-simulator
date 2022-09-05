import { FC } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Stack,
  Divider,
} from "@mui/material";
import WeaponForm from "./subcomponents/WeaponForm";

interface EditEquipmentProps {}
const EditEquipment: FC<EditEquipmentProps> = () => {
  return (
    <Grid container columns={{ md: 2, xs: 1 }} width={1}>
      <Grid item xs={1}>
        <Card raised>
          <CardContent>
            <WeaponForm />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EditEquipment;
