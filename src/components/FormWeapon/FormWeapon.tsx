import { FC, useEffect, useMemo, useState } from "react";
import { Grid, Box, Stack } from "@mui/material";

import {
  GroupEnumFixa,
  Potential,
  StatObject,
  Weapon,
} from "../../assets";
import {
  useAugments,
  useEnhancement,
  useFixa,
  useWeapon,
} from "../../hooks";
import { SummaryEquipment } from "../../types";

import FormBase from "../FormBase";
import FieldEnhancement from "../FieldLevel";
import AutocompleteFixa from "../AutocompleteFixa";
import AutocompleteWeapon from "../AutocompleteWeapon";
import AutocompleteAugment from "../AutocompleteAugment";
import SelectPotential from "../AutocompletePotential";

import { collectStat, createSummary } from "./helper";
import { getActiveAugmentCount } from "../utility";

interface FormWeaponProps {
  storageKey: string;
  cardTitle: string;
  onStatChange: (stats: StatObject) => void;
  onSummaryChange: (summary: SummaryEquipment) => void;
}
const FormWeapon: FC<FormWeaponProps> = (props) => {
  const { storageKey, onStatChange, onSummaryChange } = props;

  const [weapon, setWeapon] = useWeapon(storageKey);
  const [fixa, setFixa] = useFixa(storageKey);
  const [level, setLevel] = useEnhancement(storageKey);
  const [augments, setAugments] = useAugments(storageKey);

  const [potentialString, setPotentialString] = useState<string>("");

  const active_augments: number = getActiveAugmentCount(level);

  const stat: StatObject = useMemo<StatObject>(
    () =>
      collectStat(
        weapon,
        level,
        fixa,
        potentialString,
        augments.slice(0, active_augments),
      ),
    [weapon, level, fixa, potentialString, augments],
  );

  useEffect(() => {
    onStatChange(stat);
  }, [stat]);

  useEffect(() => {
    onSummaryChange(
      createSummary(weapon, fixa, augments.slice(0, active_augments)),
    );
  }, [weapon, fixa, augments, active_augments]);

  const handleWeaponChange = (new_weapon: Weapon | null) => {
    setWeapon(new_weapon);
    setPotentialString("");
  };

  return (
    <FormBase
      title={props.cardTitle}
      dialogTitle={`Stats for ${props.cardTitle}`}
      dialogStat={stat}
    >
      <Stack spacing={3}>
        <Box>
          <Stack spacing={1}>
            <AutocompleteWeapon
              value={weapon}
              onChange={handleWeaponChange}
            />
            <SelectPotential
              weapon={weapon}
              value={potentialString}
              onChange={setPotentialString}
            />
            <FieldEnhancement
              disable={weapon === null}
              valueMin={0}
              valueMax={60}
              value={level}
              onChange={setLevel}
            />
            <AutocompleteFixa
              value={fixa}
              onChange={setFixa}
              mode={GroupEnumFixa.WEAPON}
            />
          </Stack>
        </Box>
        <Box>
          <Grid
            container
            spacing={1}
            columns={{ xs: 1, sm: 1, md: 1, lg: 2 }}
          >
            {augments.map((aug, index) => (
              <Grid key={`augment-${index}`} item xs={1}>
                <AutocompleteAugment
                  disabled={index >= active_augments}
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
