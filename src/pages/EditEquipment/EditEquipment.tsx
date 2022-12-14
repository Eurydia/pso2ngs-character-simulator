import { FC } from "react";
import { Box, Drawer, Paper, Stack } from "@mui/material";
import { FormWeapon, FormUnit, StatView } from "../../components";
import { stat, StatEnum } from "../../assets";

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

      <Drawer
        hideBackdrop
        anchor="right"
        open={true}
        variant="permanent"
      >
        <StatView
          stat={stat({
            [StatEnum.ADV_OFF_FLOOR]: 1.5,
            [StatEnum.HARSH_COLD]: 0.7,
          })}
        />
      </Drawer>
    </Box>
  );
};

export default EditEquipment;
