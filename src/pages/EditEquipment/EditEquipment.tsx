import { FC, useMemo, useState } from "react";
import { Box, Stack } from "@mui/material";

import { FormWeapon, FormUnit } from "../../components";
import { statObject, StatObject } from "../../assets";
import { SummaryEquipment } from "../../types";

import Summary from "./Summary";
import { collectStat } from "./helper";

const useSummary = () => {
  return useState<SummaryEquipment>({
    equipment: null,
    fixa: null,
    augments: [],
  });
};

type EditEquipmentProps = {};
const EditEquipment: FC<EditEquipmentProps> = () => {
  const [statWeapon, setStatWeapon] = useState(statObject({}));
  const [statUnitA, setStatUnitA] = useState(statObject({}));
  const [statUnitB, setStatUnitB] = useState(statObject({}));
  const [statUnitC, setStatUnitC] = useState(statObject({}));

  const [summaryWeapon, setSummaryWeapon] = useSummary();
  const [summaryUnitA, setSummaryUnitA] = useSummary();
  const [summaryUnitB, setSummaryUnitB] = useSummary();
  const [summaryUnitC, setSummaryUnitC] = useSummary();

  const stat: StatObject = useMemo(
    () => collectStat([statWeapon, statUnitA, statUnitB, statUnitC]),
    [statWeapon, statUnitA, statUnitB, statUnitC],
  );

  return (
    <Box marginY={4} marginX={8}>
      <Stack spacing={2}>
        <Summary
          stat={stat}
          items={[
            summaryWeapon,
            summaryUnitA,
            summaryUnitB,
            summaryUnitC,
          ]}
        />
        <FormWeapon
          storageKey="equipment-weapon"
          title="Weapon"
          onStatChange={setStatWeapon}
          onSummaryChange={setSummaryWeapon}
        />
        <FormUnit
          storageKey="equipment-unit-a"
          title="Unit A"
          onStatChange={setStatUnitA}
          onSummaryChange={setSummaryUnitA}
        />
        <FormUnit
          storageKey="equipment-unit-b"
          title="Unit B"
          onStatChange={setStatUnitB}
          onSummaryChange={setSummaryUnitB}
        />
        <FormUnit
          storageKey="equipment-unit-c"
          title="Unit C"
          onStatChange={setStatUnitC}
          onSummaryChange={setSummaryUnitC}
        />
      </Stack>
    </Box>
  );
};

export default EditEquipment;
