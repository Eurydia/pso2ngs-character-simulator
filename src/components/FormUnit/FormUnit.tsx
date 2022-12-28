import { FC, useEffect, useMemo } from "react";
import { Grid, Box, Stack } from "@mui/material";

import { Augment, GroupEnumFixa, StatObject } from "../../assets";
import { SummaryEquipment } from "../../types";
import {
  useAugments,
  useEnhancement,
  useFixa,
  useUnit,
} from "../../hooks";

import FormBase from "../FormBase";
import FieldEnhancement from "../FieldLevel";
import AutocompleteFixa from "../AutocompleteFixa";
import AutocompleteAugment from "../AutocompleteAugment";
import AutocompleteUnit from "../AutocompleteUnit";
import { getActiveAugmentCount } from "../utility";

import { collectStat, createSummary } from "./helper";
import StatView from "../StatView";

type FormWeaponProps = {
  storageKey: string;
  title: string;
  onStatChange: (stat: StatObject) => void;
  onSummaryChange: (summary: SummaryEquipment) => void;
};
const FormWeapon: FC<FormWeaponProps> = (props) => {
  const { storageKey, onStatChange, onSummaryChange } = props;

  const [unit, setUnit] = useUnit(storageKey);
  const [fixa, setFixa] = useFixa(storageKey);
  const [level, setLevel] = useEnhancement(storageKey);
  const [augments, setAugments] = useAugments(storageKey);

  const active_augments: (Augment | null)[] = useMemo(() => {
    if (unit === null) {
      return [];
    }

    const active_count: number = getActiveAugmentCount(level);

    return augments.slice(0, active_count);
  }, [level, augments, unit]);

  const stat: StatObject = useMemo(
    () => collectStat(unit, level, fixa, active_augments),
    [unit, level, fixa, active_augments],
  );

  useEffect(() => {
    onStatChange(stat);
  }, [stat]);

  useEffect(() => {
    onSummaryChange(createSummary(unit, fixa, active_augments));
  }, [unit, fixa, augments, active_augments]);

  return (
    <FormBase title={props.title} stat={stat}>
      <Stack spacing={3}>
        <Stack spacing={1}>
          <AutocompleteUnit value={unit} onChange={setUnit} />
          <FieldEnhancement
            disabled={unit === null}
            valueMin={0}
            valueMax={60}
            value={level}
            onChange={setLevel}
          />
          <AutocompleteFixa
            disabled={unit === null}
            value={fixa}
            onChange={setFixa}
            mode={GroupEnumFixa.UNIT}
          />
        </Stack>
        <Stack spacing={1}>
          {augments.map((aug, index) => (
            <AutocompleteAugment
              key={`augment-${index}`}
              disabled={
                unit === null || index >= active_augments.length
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

export default FormWeapon;
