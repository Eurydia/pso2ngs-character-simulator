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
    <FormBase
      title={props.title}
      dialogTitle={`Stats for ${props.title}`}
      dialogStat={stat}
    >
      <Stack spacing={3}>
        <Box>
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
                  disabled={
                    unit === null || index >= active_augments.length
                  }
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
