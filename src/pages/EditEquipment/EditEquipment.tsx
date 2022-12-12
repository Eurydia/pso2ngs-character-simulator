import { FC } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Drawer,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { FormWeapon, FormUnit, StatView } from "../../components";
import { StatEnum } from "../../assets";

type EditEquipmentProps = {};
const EditEquipment: FC<EditEquipmentProps> = () => {
  return (
    <Box>
      <Paper sx={{ padding: 4, margin: 4 }}>
        <Stack spacing={2}>
          <StatView
            {...{
              [StatEnum.ADV_OFF_FLOOR]: 1.5,
              [StatEnum.HARSH_COLD]: 0.7,
            }}
          />
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
