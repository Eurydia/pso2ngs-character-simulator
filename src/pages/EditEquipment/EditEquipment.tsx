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

interface EditEquipmentProps {}
const EditEquipment: FC<EditEquipmentProps> = () => {
  return (
    <Grid container columns={{ md: 2, xs: 1 }} width={1}>
      <Grid item xs={1}>
        <Card raised>
          <CardContent>
            <Stack spacing={2} divider={<Divider flexItem />}>
              <Grid container spacing={2} columns={{ md: 2, xs: 1 }}>
                <Grid item md={2} xs={1}>
                  <TextField fullWidth label="Weapon" />
                </Grid>
                <Grid item xs={1}>
                  <TextField fullWidth label="Enhancement" />
                </Grid>
                <Grid item xs={1}>
                  <TextField fullWidth label="Fixa" />
                </Grid>
                <Grid item md={2} xs={1}>
                  <Divider flexItem />
                </Grid>
                <Grid item xs={1}>
                  <TextField fullWidth label="Augment" />
                </Grid>
                <Grid item xs={1}>
                  <TextField fullWidth label="Augment" />
                </Grid>
                <Grid item xs={1}>
                  <TextField fullWidth label="Augment" />
                </Grid>
                <Grid item xs={1}>
                  <TextField fullWidth label="Augment" />
                </Grid>
                <Grid item xs={1}>
                  <TextField fullWidth label="Augment" />
                </Grid>
              </Grid>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EditEquipment;
