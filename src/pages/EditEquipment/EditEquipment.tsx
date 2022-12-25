import { FC, useState } from "react";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

import { FormWeapon, FormUnit, StatView } from "../../components";
import { statObject, StatEnum, StatObject } from "../../assets";
import { SummaryEquipment } from "../../types";
import SummaryItem from "./SummaryItem";

const default_summary: SummaryEquipment = {
  equipment: null,
  fixa: null,
  augments: [],
};

type EditEquipmentProps = {};
const EditEquipment: FC<EditEquipmentProps> = () => {
  const [statWeapon, setStatWeapon] = useState<StatObject>(
    statObject({}),
  );
  const [statUnitA, setStatUnitA] = useState<StatObject>(
    statObject({}),
  );
  const [statUnitB, setStatUnitB] = useState<StatObject>(
    statObject({}),
  );
  const [statUnitC, setStatUnitC] = useState<StatObject>(
    statObject({}),
  );

  const [summaryWeapon, setSummaryWeapon] =
    useState<SummaryEquipment>({ ...default_summary });
  const [summaryUnitA, setSummaryUnitA] = useState<SummaryEquipment>({
    ...default_summary,
  });
  const [summaryUnitB, setSummaryUnitB] = useState<SummaryEquipment>({
    ...default_summary,
  });
  const [summaryUnitC, setSummaryUnitC] = useState<SummaryEquipment>({
    ...default_summary,
  });

  return (
    <Box marginY={4} marginX={8}>
      <Stack spacing={2}>
        <Paper>
          <Box padding={2}>
            <Grid container columns={{ xs: 1, md: 2 }} spacing={2}>
              <Grid item xs={1}>
                <SummaryItem {...summaryWeapon} />
              </Grid>
              <Grid item xs={1}>
                <SummaryItem {...summaryUnitA} />
              </Grid>
              <Grid item xs={1}>
                <SummaryItem {...summaryUnitB} />
              </Grid>
              <Grid item xs={1}>
                <SummaryItem {...summaryUnitC} />
              </Grid>
            </Grid>
          </Box>
        </Paper>

        <FormWeapon
          title="Weapon"
          onStatChange={setStatWeapon}
          onSummaryChange={setSummaryWeapon}
        />
        <FormUnit
          title="Unit A"
          onStatChange={setStatUnitA}
          onSummaryChange={setSummaryUnitA}
        />
        <FormUnit
          title="Unit B"
          onStatChange={setStatUnitB}
          onSummaryChange={setSummaryUnitB}
        />
        <FormUnit
          title="Unit C"
          onStatChange={setStatUnitC}
          onSummaryChange={setSummaryUnitC}
        />
      </Stack>
    </Box>
  );
};

export default EditEquipment;
