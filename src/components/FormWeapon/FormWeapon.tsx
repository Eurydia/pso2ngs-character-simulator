import { FC, useEffect, useMemo, useState } from "react";
import { Grid, Box, Stack } from "@mui/material";

import {
  Fixa,
  GroupEnumFixa,
  Potential,
  StatObject,
  Weapon,
} from "../../assets";
import { useAugment, useFixa, useWeapon } from "../../hooks";
import { SummaryEquipment } from "../../types";

import FormBase from "../FormBase";
import FieldEnhancement from "../FieldLevel";
import AutocompleteFixa from "../AutocompleteFixa";
import AutocompleteWeapon from "../AutocompleteWeapon";
import AutocompleteAugment from "../AutocompleteAugment";
import SelectPotential from "../AutocompletePotential";
import StatView from "../StatView";

import { collectStat, createSummary } from "./helper";

interface FormWeaponProps {
  storageKey: string;
  title: string;
  onStatChange: (stats: StatObject) => void;
  onSummaryChange: (summary: SummaryEquipment) => void;
}
const FormWeapon: FC<FormWeaponProps> = (props) => {
  const { storageKey, onStatChange, onSummaryChange } = props;

  const [weapon, setWeapon] = useWeapon(storageKey);
  const [fixa, setFixa] = useFixa(storageKey);
  const [potential, setPotential] = useState<string>("");
  const [level, setLevel] = useState<number>(0);
  const [augments, setAugments] = useAugment(storageKey);

  const stat: StatObject = useMemo<StatObject>(
    () => collectStat(weapon, level, fixa, potential, augments),
    [weapon, level, fixa, potential, augments],
  );

  useEffect(() => {
    onStatChange(stat);
  }, [stat]);

  useEffect(() => {
    onSummaryChange(createSummary(weapon, fixa, augments));
  }, [weapon, fixa, augments]);

  const handleWeaponChange = (new_weapon: Weapon | null) => {
    setWeapon(new_weapon);
    setPotential("");
  };

  return (
    <FormBase title={props.title} stat={stat}>
      <Stack spacing={1}>
        <AutocompleteWeapon
          value={weapon}
          onChange={handleWeaponChange}
        />
        <FieldEnhancement
          valueMin={0}
          valueMax={60}
          value={level}
          onChange={setLevel}
        />
        <SelectPotential
          potential={weapon === null ? null : weapon.potential}
          value={potential}
          onChange={setPotential}
        />
        <AutocompleteFixa
          value={fixa}
          onChange={setFixa}
          mode={GroupEnumFixa.WEAPON}
        />
        <Box>
          <Grid container spacing={1} columns={{ xs: 1, sm: 2 }}>
            {augments.map((aug, index) => (
              <Grid key={`augment-${index}`} item xs={1}>
                <AutocompleteAugment
                  value={aug}
                  onChange={(new_value) =>
                    setAugments(new_value, index)
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
