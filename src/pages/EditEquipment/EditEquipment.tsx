import { FC } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Stack,
  Divider,
  CardHeader,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import WeaponForm from "./subcomponents/WeaponForm";
import UnitForm from "./subcomponents/UnitForm";

interface EditEquipmentProps {}
const EditEquipment: FC<EditEquipmentProps> = () => {
  return (
    <Box>
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
            <CardHeader title="Unit #1" />
            <CardContent>
              <UnitForm />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditEquipment;
