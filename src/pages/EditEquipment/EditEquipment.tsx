import { FC, useEffect, useMemo } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { statObject, StatObject } from "../../assets";
import { useSummaryEquipment, useStatObject } from "../../hooks";
import { SummaryEquipment } from "../../types";
import { FormWeapon, FormUnit, FormBase } from "../../components";

const SummaryItem: FC<SummaryEquipment> = (props) => {
  const { equipment, fixa, augments } = props;

  return (
    <Box>
      <Typography fontWeight="bold">{equipment}</Typography>
      <Typography>{fixa}</Typography>
      {augments.map((value, index) => (
        <Typography key={`${value}-${index}`}>{value}</Typography>
      ))}
    </Box>
  );
};

type EditEquipmentProps = {
  onChange: (stat: StatObject) => void;
};
const EditEquipment: FC<EditEquipmentProps> = (props) => {
  const { onChange } = props;
  const [statWeapon, setStatWeapon] = useStatObject();
  const [statUnitA, setStatUnitA] = useStatObject();
  const [statUnitB, setStatUnitB] = useStatObject();
  const [statUnitC, setStatUnitC] = useStatObject();

  const [summaryWeapon, setSummaryWeapon] = useSummaryEquipment();
  const [summaryUnitA, setSummaryUnitA] = useSummaryEquipment();
  const [summaryUnitB, setSummaryUnitB] = useSummaryEquipment();
  const [summaryUnitC, setSummaryUnitC] = useSummaryEquipment();

  const stat: StatObject = useMemo(() => {
    const result: StatObject = statObject();

    const items: StatObject[] = [
      statWeapon,
      statUnitA,
      statUnitB,
      statUnitC,
    ];

    for (const item of items) {
      result.merge(item);
    }

    return result;
  }, [statWeapon, statUnitA, statUnitB, statUnitC]);

  useEffect(() => {
    onChange(stat);
  }, [stat]);

  const summaries = [
    summaryWeapon,
    summaryUnitA,
    summaryUnitB,
    summaryUnitC,
  ];

  return (
    <Box margin={4}>
      <Stack spacing={2}>
        <FormBase title="Summary" stat={stat}>
          <Stack spacing={2}>
            {summaries.map((summary, index) => {
              return (
                <SummaryItem key={`summary-${index}`} {...summary} />
              );
            })}
          </Stack>
        </FormBase>
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
