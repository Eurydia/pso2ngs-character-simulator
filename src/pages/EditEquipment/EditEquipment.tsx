import { FC, useEffect, useMemo, useState } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";

import { statObject, StatObject } from "../../assets";
import {
  useSummaryEquipment,
  useStatObject,
  useUnit,
  useEnhancement,
  useFixa,
  useAugments,
} from "../../hooks";
import {
  FormWeapon,
  FormUnit,
  FormBase,
  StatView,
} from "../../components";

import { createStatSummaryUnit } from "./helper";

// const SummaryItem: FC<SummaryEquipment> = (props) => {
//   const { equipment, fixa, augments } = props;

//   return (
//     <Box>
//       <Typography fontWeight="bold">{equipment}</Typography>
//       <Typography>{fixa}</Typography>
//       {augments.map((value, index) => (
//         <Typography key={`${value}-${index}`}>{value}</Typography>
//       ))}
//     </Box>
//   );
// };

// type SummaryProps = { items: SummaryEquipment[] };
// const Summary: FC<SummaryProps> = (props) => {
//   const { items } = props;
//   return (
//     <Box>
//       <Grid container spacing={2} columns={{ sm: 2 }}>
//         {items.map((item, index) => {
//           if (item.equipment === null) {
//             return null;
//           }

//           return (
//             <Grid key={`summary-${index}`} item xs={1}>
//               <SummaryItem {...item} />
//             </Grid>
//           );
//         })}
//       </Grid>
//     </Box>
//   );
// };

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

  // const [formDataUnitA, setFormDataA] =
  //   useFormDataUnit("gear-unit-a");
  // const [formDataUnitB, setFormDataB] =
  //   useFormDataUnit("gear-unit-b");
  // const [formDataUnitC, setFormDataC] =
  //   useFormDataUnit("gear-unit-c");

  const KEY_UNIT_A: string = "equipment-unit-a";
  const [unitA, setUnitA] = useUnit(KEY_UNIT_A);
  const [unitLevelA, setUnitLevelA] = useEnhancement(KEY_UNIT_A);
  const [unitFixaA, setUnitFixaA] = useFixa(KEY_UNIT_A);
  const [unitAugmentA, setUnitAugmentA] = useAugments(KEY_UNIT_A);

  const KEY_UNIT_B: string = "equipment-unit-b";
  const [unitB, setUnitB] = useUnit(KEY_UNIT_B);
  const [unitLevelB, setUnitLevelB] = useEnhancement(KEY_UNIT_B);
  const [unitFixaB, setUnitFixaB] = useFixa(KEY_UNIT_B);
  const [unitAugmentB, setUnitAugmentB] = useAugments(KEY_UNIT_B);

  const KEY_UNIT_C: string = "equipment-unit-c";
  const [unitC, setUnitC] = useUnit(KEY_UNIT_C);
  const [unitLevelC, setUnitLevelC] = useEnhancement(KEY_UNIT_C);
  const [unitFixaC, setUnitFixaC] = useFixa(KEY_UNIT_C);
  const [unitAugmentC, setUnitAugmentC] = useAugments(KEY_UNIT_C);

  const handleSyncUnitA = () => {
    setUnitB(unitA);
    setUnitLevelB(unitLevelA);
    setUnitFixaB(unitFixaA);

    setUnitC(unitA);
    setUnitLevelC(unitLevelA);
    setUnitFixaC(unitFixaA);

    unitAugmentA.forEach((augment, augment_index) => {
      setUnitAugmentB(augment, augment_index);
      setUnitAugmentC(augment, augment_index);
    });
  };

  const handleSyncUnitB = () => {
    setUnitA(unitB);
    setUnitLevelA(unitLevelB);
    setUnitFixaA(unitFixaB);

    setUnitC(unitB);
    setUnitLevelC(unitLevelB);
    setUnitFixaC(unitFixaB);

    unitAugmentB.forEach((augment, augment_index) => {
      setUnitAugmentA(augment, augment_index);
      setUnitAugmentC(augment, augment_index);
    });
  };

  const handleSyncUnitC = () => {
    setUnitA(unitC);
    setUnitLevelA(unitLevelC);
    setUnitFixaA(unitFixaC);

    setUnitB(unitC);
    setUnitLevelB(unitLevelC);
    setUnitFixaB(unitFixaC);

    unitAugmentC.forEach((augment, augment_index) => {
      setUnitAugmentA(augment, augment_index);
      setUnitAugmentC(augment, augment_index);
    });
  };

  // const stat: StatObject = useMemo(() => {
  //   const result: StatObject = statObject();

  //   const items: StatObject[] = [
  //     statWeapon,
  //     statUnitA,
  //     statUnitB,
  //     statUnitC,
  //   ];

  //   for (const item of items) {
  //     result.merge(item);
  //   }

  //   return result;
  // }, [statWeapon, statUnitA, statUnitB, statUnitC]);

  // useEffect(() => {
  //   onChange(stat);
  // }, [stat]);

  // const summaries = [
  //   summaryWeapon,
  //   summaryUnitA,
  //   summaryUnitB,
  //   summaryUnitC,
  // ];

  const statSummaryUnitA = createStatSummaryUnit(
    {},
    unitA,
    unitLevelA,
    unitFixaA,
    unitAugmentA,
  );
  const statSummaryUnitB = createStatSummaryUnit(
    {},
    unitB,
    unitLevelB,
    unitFixaB,
    unitAugmentB,
  );
  const statSummaryUnitC = createStatSummaryUnit(
    {},
    unitC,
    unitLevelC,
    unitFixaC,
    unitAugmentC,
  );

  return (
    <Box margin={4}>
      <Stack spacing={2}>
        <FormBase
          title="Summary"
          slotHeaderAction={null}
          slotPrimary={null}
          slotSecondary={
            <StatView maxHeight="400px" stat={statObject()} />
          }
        />
        <FormWeapon
          storageKey="equipment-weapon"
          cardTitle="Weapon"
          onStatChange={setStatWeapon}
          // onSummaryChange={setSummaryWeapon}
        />
        <FormUnit
          cardTitle="Unit A"
          stat={statSummaryUnitA}
          onSync={handleSyncUnitA}
          unit={unitA}
          unitLevel={unitLevelA}
          fixa={unitFixaA}
          augments={unitAugmentA}
          onUnitChange={setUnitA}
          onUnitLevelChange={setUnitLevelA}
          onFixaChange={setUnitFixaA}
          onAugmentChange={setUnitAugmentA}
        />
        <FormUnit
          cardTitle="Unit B"
          stat={statSummaryUnitB}
          onSync={handleSyncUnitB}
          unit={unitB}
          unitLevel={unitLevelB}
          fixa={unitFixaB}
          augments={unitAugmentB}
          onUnitChange={setUnitB}
          onUnitLevelChange={setUnitLevelB}
          onFixaChange={setUnitFixaB}
          onAugmentChange={setUnitAugmentB}
        />
        <FormUnit
          cardTitle="Unit C"
          stat={statSummaryUnitC}
          onSync={handleSyncUnitC}
          unit={unitC}
          unitLevel={unitLevelC}
          fixa={unitFixaC}
          augments={unitAugmentC}
          onUnitChange={setUnitC}
          onUnitLevelChange={setUnitLevelC}
          onFixaChange={setUnitFixaC}
          onAugmentChange={setUnitAugmentC}
        />
      </Stack>
    </Box>
  );
};

export default EditEquipment;
