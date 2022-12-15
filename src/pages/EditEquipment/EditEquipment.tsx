import { FC } from "react";
import { Box, Drawer, Paper, Stack } from "@mui/material";
import { FormWeapon, FormUnit, StatView } from "../../components";
import { statObject, StatEnum } from "../../assets";

type EditEquipmentProps = {};
const EditEquipment: FC<EditEquipmentProps> = () => {
  return (
    <Box>
      <Paper sx={{ padding: 4, margin: 4 }}>
        <Stack spacing={2}>
          <FormWeapon title="Weapon" />
          <FormUnit title="Unit #1" />
          <FormUnit title="Unit #2" />
          <FormUnit title="Unit #3" />
        </Stack>
      </Paper>
    </Box>
  );
};

export default EditEquipment;
