import { FC, useEffect, useMemo, useState } from "react";
import { Grid, Box, Stack } from "@mui/material";

import {
  Fixa,
  GroupEnumFixa,
  Potential,
  statObject,
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

import { collectStat, collectSummary } from "./helper";
import StatView from "../StatView";

interface FormWeaponProps {
  title: string;
  onStatChange: (stats: StatObject) => void;
  onSummaryChange: (summary: SummaryEquipment) => void;
}
const FormWeapon: FC<FormWeaponProps> = (props) => {
  const { onStatChange } = props;

  const [valueWeapon, setValueWeapon] = useState<Weapon | null>(null);
  const [valueFixa, setValueFixa] = useState<Fixa | null>(null);
  const [valuePotential, setValuePotential] = useState<string>("");
  const [valueLevel, setValueLevel] = useState<number>(0);
  const [valueAugments, setValueAugments] = useAugment();

  const stat: StatObject = useMemo<StatObject>(
    () =>
      collectStat(
        valueWeapon,
        valueLevel,
        valueFixa,
        valuePotential,
        valueAugments,
      ),
    [
      valueWeapon,
      valueLevel,
      valueFixa,
      valuePotential,
      valueAugments,
    ],
  );

  useEffect(() => {
    onStatChange(stat);
  }, [stat]);

  useEffect(() => {
    const summary: SummaryEquipment = collectSummary(
      valueWeapon,
      valueFixa,
      valueAugments,
    );
    props.onSummaryChange(summary);
  }, [valueWeapon, valueFixa, valueAugments]);

  const handleWeaponChange = (new_weapon: Weapon | null) => {
    setValueWeapon(new_weapon);
    setValuePotential("");
  };

  let potential: Potential | null = null;
  if (valueWeapon !== null) {
    potential = valueWeapon.potential;
  }

  return (
    <FormBase
      title={props.title}
      slotDialog={<StatView disablePadding stat={stat} />}
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
