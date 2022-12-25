import { FC, useMemo, useState } from "react";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

import { FormWeapon, FormUnit, StatView } from "../../components";
import { statObject, StatEnum, StatObject } from "../../assets";
import { SummaryEquipment } from "../../types";
import SummaryItem from "./SummaryItem";
import Summary from "./Summary";
import { collectStat } from "./helper";

const default_summary: SummaryEquipment = {
  equipment: null,
  fixa: null,
  augments: [],
};

type EditEquipmentProps = {};
const EditEquipment: FC<EditEquipmentProps> = () => {
  const [statWeapon, setStatWeapon] = useState(statObject({}));
  const [statUnitA, setStatUnitA] = useState(statObject({}));
  const [statUnitB, setStatUnitB] = useState(statObject({}));
  const [statUnitC, setStatUnitC] = useState(statObject({}));

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

  const stat: StatObject = useMemo(
    () => collectStat([statWeapon, statUnitA, statUnitB, statUnitC]),
    [statWeapon, statUnitA, statUnitB, statUnitC],
  );

  return (
    <Box marginY={4} marginX={8}>
      <Stack spacing={2}>
        <Summary
          stat={stat}
          summary={[
            summaryWeapon,
            summaryUnitA,
            summaryUnitB,
            summaryUnitC,
          ]}
        />
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
