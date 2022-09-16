import { FC, Fragment, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Drawer,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import FormWeapon from "./subcomponents/FormWeapon";
import FormUnit from "./subcomponents/FormUnit";
// import StatsOverview from "../../GlobalComponents/StatOverview";

interface EditEquipmentProps {}
const EditEquipment: FC<EditEquipmentProps> = () => {
  const [overviewPanel, setOverviewPanel] = useState<number | null>(
    null,
  );

  return (
    <Box>
      <Grid container columns={{ md: 2, xs: 1 }} spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}>
          <FormUnit index="A" />
        </Grid>
        <Grid item xs={1}>
          <FormUnit index="B" />
        </Grid>
        <Grid item xs={1}>
          <FormUnit index="C" />
        </Grid>
      </Grid>
      <Drawer variant="permanent" anchor="right" sx={{ width: 100 }}>
        <Box padding={2}>
          <Typography variant="h5">Overview</Typography>
          {/* <StatsOverview /> */}
        </Box>
      </Drawer>
    </Box>
  );
};

export default EditEquipment;
