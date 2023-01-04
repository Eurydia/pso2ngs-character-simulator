import { FC, useEffect, useMemo } from "react";
import { Box, Button, Stack } from "@mui/material";

import {
  ActionContext,
  Augment,
  GroupEnumFixa,
  StatObject,
} from "../../assets";
import { SummaryEquipment } from "../../types";
import {
  useAugments,
  useEnhancement,
  useFixa,
  useUnit,
} from "../../hooks";

import { FormBase } from "../FormBase";
import { AutocompleteUnit } from "../AutocompleteUnit";
import { FieldLevel } from "../FieldLevel";
import { AutocompleteFixa } from "../AutocompleteFixa";
import { AutocompleteAugment } from "../AutocompleteAugment";
import { getActiveAugmentCount } from "../utility";

import { createStat, createSummary } from "./helper";
import { StatView } from "../StatView";
import { Sync } from "@mui/icons-material";

const CONTEXT: ActionContext = {};

type FormUnitProps = {
  storageKey: string;
  title: string;
  onStatChange: (stat: StatObject) => void;
  onSummaryChange: (summary: SummaryEquipment) => void;
};
export const FormUnit: FC<FormUnitProps> = (props) => {
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

  const stat: StatObject = useMemo(() => {
    return createStat(CONTEXT, unit, level, fixa, active_augments);
  }, [unit, level, fixa, active_augments]);

  useEffect(() => {
    onStatChange(stat);
  }, [stat]);

  useEffect(() => {
    onSummaryChange(createSummary(unit, fixa, active_augments));
  }, [unit, fixa, augments, active_augments]);

  return (
    <FormBase
      title={props.title}
      slotSecondary={<StatView stat={stat} maxHeight="500px" />}
    >
      <Stack spacing={3}>
        <Stack spacing={1}>
          <AutocompleteUnit value={unit} onChange={setUnit} />
          <FieldLevel
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
          {augments.map((augment, index) => {
            const disabled =
              unit === null || index >= active_augments.length;
            return (
              <AutocompleteAugment
                key={`augment-${index}`}
                disabled={disabled}
                value={augment}
                onChange={(new_value) =>
                  setAugments(new_value, index)
                }
              />
            );
          })}
        </Stack>
      </Stack>
    </FormBase>
  );
};
