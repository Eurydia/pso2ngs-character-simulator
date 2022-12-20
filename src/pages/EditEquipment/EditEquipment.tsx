import { FC } from "react";
import { Box, Drawer, Grid, Paper, Stack } from "@mui/material";
import { FormWeapon, FormUnit, StatView } from "../../components";
import { statObject, StatEnum } from "../../assets";

type EditEquipmentProps = {};
const EditEquipment: FC<EditEquipmentProps> = () => {
  return (
    <Box>
      <Grid>
        <FormWeapon title="Weapon" />
        <FormUnit title="Unit #1" />
        <FormUnit title="Unit #2" />
        <FormUnit title="Unit #3" />
      </Grid>
    </Box>
  );
};

export default EditEquipment;
