import { FC, Fragment, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Drawer,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { FormWeapon } from "../../components";

interface EditEquipmentProps {}
const EditEquipment: FC<EditEquipmentProps> = () => {
  return (
    <Paper sx={{ padding: 4, margin: 4 }}>
      <Stack>
        <FormWeapon title="Weapon" />
      </Stack>
    </Paper>
  );
};

export default EditEquipment;
