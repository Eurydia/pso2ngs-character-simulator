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

  const [weapon, setWeapon] = useWeapon(storageKey);
  const [fixa, setFixa] = useFixa(storageKey);
  const [level, setLevel] = useEnhancement(storageKey);
  const [augments, setAugments] = useAugments(storageKey);

  const [potentialLevel, setPotentialLevel] = useState<number>(0);

  const active_augments: (Augment | null)[] = useMemo(() => {
    if (weapon === null) {
      return [];
    }
    const active_count: number = getActiveAugmentCount(level);
    return augments.slice(0, active_count);
  }, [level, augments, weapon]);

  const stat: StatObject = useMemo<StatObject>(() => {
    return createStat(
      CONTEXT,
      weapon,
      level,
      fixa,
      potentialLevel,
      active_augments,
    );
  }, [weapon, level, fixa, potentialLevel, active_augments]);

  useEffect(() => {
    onStatChange(stat);
  }, [stat]);

  useEffect(() => {
    onSummaryChange(createSummary(weapon, fixa, active_augments));
  }, [weapon, fixa, augments, active_augments]);

  const handleWeaponChange = (new_weapon: Weapon | null) => {
    setWeapon(new_weapon);
    setPotentialLevel(0);
  };

  let potential_max_level: number = 0;
  let potential_name: string = "";
  if (weapon !== null) {
    potential_max_level = weapon.potential.keys.length;
    potential_name = weapon.potential.name;
  }

  return (
    <FormBase
      title={props.cardTitle}
      slot_secondary={<StatView stat={stat} maxHeight="550px" />}
    >
      <Stack spacing={3}>
        <Stack spacing={1}>
          <AutocompleteWeapon
            value={weapon}
            onChange={handleWeaponChange}
          />
          <SelectPotential
            valueMax={potential_max_level}
            potentialName={potential_name}
            value={potentialLevel}
            onChange={setPotentialLevel}
          />

          <FieldLevel
            disabled={weapon === null}
            valueMin={0}
            valueMax={60}
            value={level}
            onChange={setLevel}
          />
          <AutocompleteFixa
            disabled={weapon === null}
            value={fixa}
            onChange={setFixa}
            mode={GroupEnumFixa.WEAPON}
          />
        </Stack>
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
      </Stack>
    </FormBase>
  );
};
