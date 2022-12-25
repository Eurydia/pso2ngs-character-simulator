import { FC, useEffect, useState } from "react";
import { Grid, Box, Stack } from "@mui/material";

import {
  Fixa,
  GroupEnumFixa,
  Potential,
  StatObject,
  Weapon,
} from "../../assets";
import { useAugment } from "../../hooks";
import { SummaryEquipment } from "../../types";

import FormBase from "../FormBase";
import FieldEnhancement from "../FieldEnhancement";
import AutocompleteFixa from "../AutocompleteFixa";
import AutocompleteWeapon from "../AutocompleteWeapon";
import AutocompleteAugment from "../AutocompleteAugment";
import SelectPotential from "../AutocompletePotential";

import { collectStats } from "./helper";
import StatView from "../StatView";

interface FormWeaponProps {
  title: string;
  onChange: (stats: StatObject, summary: SummaryEquipment) => void;
}
const FormWeapon: FC<FormWeaponProps> = (props) => {
  const [valueWeapon, setValueWeapon] = useState<Weapon | null>(null);
  const [valueFixa, setValueFixa] = useState<Fixa | null>(null);
  const [valuePotential, setValuePotential] = useState<string>("");
  const [valueLevel, setValueLevel] = useState<number>(0);
  const [valueAugments, setValueAugments] = useAugment();

  const handleWeaponChange = (new_value: Weapon | null) => {
    setValueWeapon(new_value);
    setValuePotential("");
  };

  // useEffect(() => {
  //   const next_summary: SummaryEquipment = {
  //     equipment: "-",
  //     fixa: "-",
  //     augments: [],
  //   };

  //   if (valueWeapon !== null) {
  //     next_summary.equipment = valueWeapon.label;
  //   }

  //   if (valueFixa !== null) {
  //     next_summary.fixa = valueFixa.label;
  //   }

  //   const summary_augment: string[] = [];
  //   for (const augment of valueAugments) {
  //     if (augment === null) {
  //       continue;
  //     }
  //     summary_augment.push(augment.label);
  //   }
  //   next_summary.augments = summary_augment;

  //   const next_stats: StatObject = collectStats(
  //     valueWeapon,
  //     valueEnhancement,
  //     valueFixa,
  //     valuePotential,
  //     valueAugments,
  //   );

  //   props.onChange(next_stats, next_summary);
  // }, [
  //   valueWeapon,
  //   valueFixa,
  //   valuePotential,
  //   valueEnhancement,
  //   valueAugments,
  // ]);

  let potential: Potential | null = null;
  if (valueWeapon !== null) {
    potential = valueWeapon.potential;
  }

  const stats_to_display: StatObject = collectStats(
    valueWeapon,
    valueLevel,
    valueFixa,
    valuePotential,
    valueAugments,
  );

  return (
    <FormBase
      title={props.title}
      slotDialog={<StatView disablePadding stat={stats_to_display} />}
    >
      <Stack spacing={1}>
        <AutocompleteWeapon
          value={valueWeapon}
          onChange={handleWeaponChange}
        />
        <FieldEnhancement
          valueMin={0}
          valueMax={60}
          value={valueLevel}
          onChange={setValueLevel}
        />
        <SelectPotential
          potential={potential}
          value={valuePotential}
          onChange={setValuePotential}
        />
        <AutocompleteFixa
          value={valueFixa}
          onChange={setValueFixa}
          mode={GroupEnumFixa.WEAPON}
        />
        <Box>
          <Grid container spacing={1} columns={{ xs: 1, sm: 2 }}>
            {valueAugments.map((aug, index) => (
              <Grid key={`augment-${index}`} item xs={1}>
                <AutocompleteAugment
                  value={aug}
                  onChange={(new_value) =>
                    setValueAugments(new_value, index)
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </FormBase>
  );
};

export default FormWeapon;
