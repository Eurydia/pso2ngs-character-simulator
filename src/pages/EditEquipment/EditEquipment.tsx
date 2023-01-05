import { FC, useEffect, useMemo, useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

import { statObject, StatObject, Unit } from "../../assets";
import {
  useSummaryEquipment,
  useStatObject,
  useFormDataUnit,
} from "../../hooks";
import { FormDataUnit, SummaryEquipment } from "../../types";
import {
  FormWeapon,
  FormUnit,
  FormBase,
  StatView,
} from "../../components";

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

type SummaryProps = { items: SummaryEquipment[] };
const Summary: FC<SummaryProps> = (props) => {
  const { items } = props;
  return (
    <Box>
      <Grid container spacing={2} columns={{ sm: 2 }}>
        {items.map((item, index) => {
          if (item.equipment === null) {
            return null;
          }

          return (
            <Grid key={`summary-${index}`} item xs={1}>
              <SummaryItem {...item} />
            </Grid>
          );
        })}
      </Grid>
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

  const [formDataUnitA, setFormDataA] =
    useFormDataUnit("gear-unit-a");
  const [formDataUnitB, setFormDataB] =
    useFormDataUnit("gear-unit-b");
  const [formDataUnitC, setFormDataC] =
    useFormDataUnit("gear-unit-c");

  const handleSyncUnitA = () => {
    setFormDataB(formDataUnitA);
    setFormDataC(formDataUnitA);
  };

  const handleSyncUnitB = () => {
    setFormDataA(formDataUnitB);
    setFormDataC(formDataUnitB);
  };

  const handleSyncUnitC = () => {
    setFormDataA(formDataUnitC);
    setFormDataB(formDataUnitC);
  };

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
        <FormBase
          title="Summary"
          slotHeaderAction={null}
          slotSecondary={<StatView maxHeight="400px" stat={stat} />}
          slotPrimary={<Summary items={summaries} />}
        />
        <FormWeapon
          storageKey="equipment-weapon"
          cardTitle="Weapon"
          onStatChange={setStatWeapon}
          onSummaryChange={setSummaryWeapon}
        />
        <FormUnit
          cardTitle="Unit A"
          onSync={handleSyncUnitA}
          {...formDataUnitA}
        />
        <FormUnit
          cardTitle="Unit B"
          onSync={handleSyncUnitB}
          {...formDataUnitB}
        />
        <FormUnit
          cardTitle="Unit C"
          onSync={handleSyncUnitC}
          {...formDataUnitC}
        />
      </Stack>
    </Box>
  );
};

export default EditEquipment;
