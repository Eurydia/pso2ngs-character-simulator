import { FC, useEffect, useMemo, useState } from "react";
import { Box, Stack } from "@mui/material";

import { FormWeapon, FormUnit } from "../../components";
import { statObject, StatObject } from "../../assets";

import Summary from "./Summary";
import { SummaryEquipment } from "../../types";

const useSummaryEquipment = (): [
  SummaryEquipment,
  (summary: SummaryEquipment) => void,
] => {
  const [value, setValue] = useState<SummaryEquipment>({
    equipment: null,
    fixa: null,
    augments: [],
  });

  return [value, setValue];
};

type EditEquipmentProps = {
  onChange: (stat: StatObject) => void;
};
const EditEquipment: FC<EditEquipmentProps> = (props) => {
  const { onChange } = props;
  const [statWeapon, setStatWeapon] = useState(statObject({}));
  const [statUnitA, setStatUnitA] = useState(statObject({}));
  const [statUnitB, setStatUnitB] = useState(statObject({}));
  const [statUnitC, setStatUnitC] = useState(statObject({}));

  const [summaryWeapon, setSummaryWeapon] = useSummaryEquipment();
  const [summaryUnitA, setSummaryUnitA] = useSummaryEquipment();
  const [summaryUnitB, setSummaryUnitB] = useSummaryEquipment();
  const [summaryUnitC, setSummaryUnitC] = useSummaryEquipment();

  const stat: StatObject = useMemo(() => {
    const result: StatObject = statObject();

    for (const obj of [statWeapon, statUnitA, statUnitB, statUnitC]) {
      result.merge(obj);
    }

    return result;
  }, [statWeapon, statUnitA, statUnitB, statUnitC]);

  useEffect(() => {
    onChange(stat);
  }, [stat]);

  return (
    <Box margin={4}>
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
          cardTitle="Weapon"
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
