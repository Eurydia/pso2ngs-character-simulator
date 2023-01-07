import { FC, useEffect, useMemo } from "react";
import { Box, Fab, Stack } from "@mui/material";
import { atom, useSetAtom } from "jotai";

import { ActionContext, StatObject } from "../../assets";
import { useFormUnit, useFormWeapon } from "../../hooks";
import {
  FormWeapon,
  FormUnit,
  FormBase,
  StatView,
} from "../../components";

import { FormDataUnit, FormDataWeapon } from "../../types";

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

type PageEditEquipmentProps = {
  ctx: ActionContext;
  stat: StatObject;
  onStatChange: (value: StatObject) => void;
};
export const PageEditEquipment: FC<PageEditEquipmentProps> = (
  props,
) => {
  const { ctx, stat, onStatChange } = props;

  const [weapon, setWeapon] = useFormWeapon("eq-w");
  const [unitA, setUnitA] = useFormUnit("eq-ua");
  const [unitB, setUnitB] = useFormUnit("eq-ub");
  const [unitC, setUnitC] = useFormUnit("eq-uc");

  const stat_weapon = FormDataWeapon.getStatObject(ctx, weapon);
  const stat_unit_a = FormDataUnit.getStatObject(ctx, unitA);
  const stat_unit_b = FormDataUnit.getStatObject(ctx, unitB);
  const stat_unit_c = FormDataUnit.getStatObject(ctx, unitC);

  const handleStatChange = () => {
    let result = StatObject.merge(stat_weapon, stat_unit_a);
    result = StatObject.merge(result, stat_unit_b);
    result = StatObject.merge(result, stat_unit_c);
    onStatChange(result);
  };

  const handleWeaponChange = (
    data: FormDataWeapon | ((prev: FormDataWeapon) => FormDataWeapon),
  ) => {
    setWeapon(data);
    handleStatChange();
  };

  const handleUnitChangeA = (
    data: FormDataUnit | ((prev: FormDataUnit) => FormDataUnit),
  ): void => {
    setUnitA(data);
    handleStatChange();
  };

  const handleUnitChangeB = (
    data: FormDataUnit | ((prev: FormDataUnit) => FormDataUnit),
  ): void => {
    setUnitB(data);
    handleStatChange();
  };

  const handleUnitChangeC = (
    data: FormDataUnit | ((prev: FormDataUnit) => FormDataUnit),
  ): void => {
    setUnitC(data);
    handleStatChange();
  };

  const handleSyncUnitA = () => {
    handleUnitChangeB(unitA);
    handleUnitChangeC(unitA);
  };

  const handleSyncUnitB = () => {
    handleUnitChangeA(unitB);
    handleUnitChangeC(unitB);
  };

  const handleSyncUnitC = () => {
    handleUnitChangeA(unitC);
    handleUnitChangeB(unitC);
  };

  return (
    <Box margin={4}>
      <Fab
        sx={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
        }}
      >
        x
      </Fab>
      <Stack spacing={2}>
        <FormBase
          title="Summary"
          slotHeaderAction={null}
          slotPrimary={null}
          slotSecondary={<StatView maxHeight="400px" stat={stat} />}
        />
        <FormWeapon
          cardTitle="Weapon"
          stat={stat_weapon}
          formValue={weapon}
          onFormValueChange={handleWeaponChange}
        />
        <FormUnit
          cardTitle="Unit A"
          stat={stat_unit_a}
          formValue={unitA}
          onFormValueChange={handleUnitChangeA}
          onSync={handleSyncUnitA}
        />
        <FormUnit
          cardTitle="Unit B"
          stat={stat_unit_b}
          formValue={unitB}
          onFormValueChange={handleUnitChangeB}
          onSync={handleSyncUnitB}
        />
        <FormUnit
          cardTitle="Unit C"
          stat={stat_unit_c}
          formValue={unitC}
          onFormValueChange={handleUnitChangeC}
          onSync={handleSyncUnitC}
        />
      </Stack>
    </Box>
  );
};
