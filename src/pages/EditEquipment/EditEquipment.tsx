import { FC, useState } from "react";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

import { FormWeapon, FormUnit, StatView } from "../../components";
import { statObject, StatEnum, StatObject } from "../../assets";
import { SummaryEquipment } from "../../types";
import SummaryEquipmentItem from "./SummaryEquipment";

type EditEquipmentProps = {};
const EditEquipment: FC<EditEquipmentProps> = () => {
  const [statWeapon, setStatWeapon] = useState<StatObject>(
    statObject({}),
  );

  const [summaryWeapon, setSummaryWeapon] =
    useState<SummaryEquipment>({ augments: [], equipment: "sdadad" });

  return (
    <Box marginY={4} marginX={8}>
      <Stack spacing={2}>
        <Paper>
          <SummaryEquipmentItem {...summaryWeapon} />
        </Paper>

        <FormWeapon
          title="Weapon"
          onStatChange={setStatWeapon}
          onSummaryChange={setSummaryWeapon}
        />
        <FormUnit title="Unit #1" />
        <FormUnit title="Unit #2" />
        <FormUnit title="Unit #3" />
      </Stack>
    </Box>
  );
};

export default EditEquipment;
