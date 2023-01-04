import { FC, useEffect, useMemo, useState } from "react";
import { Stack } from "@mui/material";

import {
  ActionContext,
  Augment,
  GroupEnumFixa,
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

import { FormBase } from "../FormBase";
import { FieldLevel } from "../FieldLevel";
import { AutocompleteFixa } from "../AutocompleteFixa";
import { AutocompleteWeapon } from "../AutocompleteWeapon";
import { AutocompleteAugment } from "../AutocompleteAugment";
import { SelectPotential } from "../SelectPotential";

import { createStat, createSummary } from "./helper";
import { getActiveAugmentCount } from "../utility";
import { StatView } from "../StatView";

const CONTEXT: ActionContext = {};

type FormWeaponProps = {
  storageKey: string;
  cardTitle: string;
  onStatChange: (stats: StatObject) => void;
  onSummaryChange: (summary: SummaryEquipment) => void;
};
export const FormWeapon: FC<FormWeaponProps> = (props) => {
  const { storageKey, onStatChange, onSummaryChange } = props;

  const [weapon, potentialLevel, setWeapon, setPotentialLevel] =
    useWeapon(storageKey);
  const [fixa, setFixa] = useFixa(storageKey);
  const [weapon_level, setLevel] = useEnhancement(storageKey);
  const [augments, setAugments] = useAugments(storageKey);

  const active_augments: (Augment | null)[] = useMemo(() => {
    if (weapon === null) {
      return [];
    }
    const active_count: number = getActiveAugmentCount(weapon_level);
    return augments.slice(0, active_count);
  }, [weapon_level, augments, weapon]);

  const stat = useMemo((): StatObject => {
    return createStat(
      CONTEXT,
      weapon,
      weapon_level,
      potentialLevel,
      fixa,
      active_augments,
    );
  }, [weapon, weapon_level, fixa, potentialLevel, active_augments]);

  useEffect(() => {
    onStatChange(stat);
  }, [stat]);

  useEffect(() => {
    onSummaryChange(createSummary(weapon, fixa, active_augments));
  }, [weapon, fixa, augments, active_augments]);

  let potential_level_max: number = 0;
  let potential_name: string = "";
  if (weapon !== null) {
    potential_level_max = weapon.potential.level_max;
    potential_name = weapon.potential.name;
  }

  return (
    <FormBase
      title={props.cardTitle}
      // slot_secondary={<StatView stat={stat} maxHeight="550px" />}
      slot_secondary={
        <Stack spacing={1}>
          {augments.map((aug, index) => (
            <AutocompleteAugment
              key={`augment-${index}`}
              disabled={
                weapon === null || index >= active_augments.length
              }
              value={aug}
              onChange={(new_value) => setAugments(new_value, index)}
            />
          ))}
        </Stack>
      }
    >
      <Stack spacing={1}>
        <AutocompleteWeapon value={weapon} onChange={setWeapon} />
        <SelectPotential
          valueMax={potential_level_max}
          potentialName={potential_name}
          value={potentialLevel}
          onChange={setPotentialLevel}
        />

        <FieldLevel
          disabled={weapon === null}
          valueMin={0}
          valueMax={60}
          value={weapon_level}
          onChange={setLevel}
        />
        <AutocompleteFixa
          disabled={weapon === null}
          value={fixa}
          onChange={setFixa}
          mode={GroupEnumFixa.WEAPON}
        />
      </Stack>
    </FormBase>
  );
};
