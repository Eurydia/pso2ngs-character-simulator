import { FC, useEffect } from "react";
import { Box, Stack } from "@mui/material";

import { statObject, StatObject } from "../../assets";
import {
  useUnit,
  useEnhancement,
  useFixa,
  useAugments,
  useWeapon,
} from "../../hooks";
import {
  FormWeapon,
  FormUnit,
  FormBase,
  StatView,
} from "../../components";

import { createStatUnit, createStatWeapon } from "./helper";

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
  onStatChange: (stat: StatObject | (() => StatObject)) => void;
};
const EditEquipment: FC<EditEquipmentProps> = (props) => {
  const { onStatChange } = props;

  const KEY_WEAPON = "eq-w";
  const [weapon, potentialLevel, setWeapon, setPotentialLevel] =
    useWeapon(KEY_WEAPON, `${KEY_WEAPON}-pl`);
  const [weaponLevel, setWeaponLevel] = useEnhancement(
    `${KEY_WEAPON}-l`,
  );
  const [fixa, setFixa] = useFixa(`${KEY_WEAPON}-f`);
  const [augments, setAugments] = useAugments(`${KEY_WEAPON}-a`);

  const KEY_UNIT_A: string = "eq-ua";
  const [unitA, setUnitA] = useUnit(KEY_UNIT_A);
  const [unitLevelA, setUnitLevelA] = useEnhancement(
    `${KEY_UNIT_A}-l`,
  );
  const [unitFixaA, setUnitFixaA] = useFixa(`${KEY_UNIT_A}-f`);
  const [unitAugmentA, setUnitAugmentA] = useAugments(
    `${KEY_UNIT_A}-a`,
  );

  const KEY_UNIT_B: string = "eq-ub";
  const [unitB, setUnitB] = useUnit(KEY_UNIT_B);
  const [unitLevelB, setUnitLevelB] = useEnhancement(
    `${KEY_UNIT_B}-l`,
  );
  const [unitFixaB, setUnitFixaB] = useFixa(`${KEY_UNIT_B}-f`);
  const [unitAugmentB, setUnitAugmentB] = useAugments(
    `${KEY_UNIT_B}-a`,
  );

  const KEY_UNIT_C: string = "eq-uc";
  const [unitC, setUnitC] = useUnit(KEY_UNIT_C);
  const [unitLevelC, setUnitLevelC] = useEnhancement(
    `${KEY_UNIT_C}-l`,
  );
  const [unitFixaC, setUnitFixaC] = useFixa(`${KEY_UNIT_C}-f`);
  const [unitAugmentC, setUnitAugmentC] = useAugments(
    `${KEY_UNIT_C}-a`,
  );

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

  const stat_weapon = createStatWeapon(
    {},
    weapon,
    weaponLevel,
    potentialLevel,
    fixa,
    augments,
  );
  const stat_unit_a = createStatUnit(
    {},
    unitA,
    unitLevelA,
    unitFixaA,
    unitAugmentA,
  );
  const stat_unit_b = createStatUnit(
    {},
    unitB,
    unitLevelB,
    unitFixaB,
    unitAugmentB,
  );
  const stat_unit_c = createStatUnit(
    {},
    unitC,
    unitLevelC,
    unitFixaC,
    unitAugmentC,
  );

  useEffect(() => {
    onStatChange(() => {
      let stat_total = StatObject.merge(stat_unit_a, stat_unit_b);
      stat_total = StatObject.merge(stat_total, stat_unit_c);
      stat_total = StatObject.merge(stat_total, stat_weapon);
      return stat_total;
    });
  }, [stat_unit_a, stat_unit_b, stat_unit_c, stat_weapon]);

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
          cardTitle="Weapon"
          stat={stat_weapon}
          weapon={weapon}
          weaponLevel={weaponLevel}
          potentialLevel={potentialLevel}
          fixa={fixa}
          augments={augments}
          onWeaponChange={setWeapon}
          onWeaponLevelChange={setWeaponLevel}
          onPotentialLevelChange={setPotentialLevel}
          onFixaChange={setFixa}
          onAugmentChange={setAugments}
        />
        <FormUnit
          cardTitle="Unit A"
          stat={stat_unit_a}
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
          stat={stat_unit_b}
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
          stat={stat_unit_c}
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
