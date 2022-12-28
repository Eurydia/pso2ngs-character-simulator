import { FC, useEffect, useMemo } from "react";
import { Grid, Box, Stack } from "@mui/material";

import { GroupEnumFixa, StatObject } from "../../assets";
import { SummaryEquipment } from "../../types";
import {
  useAugments,
  useEnhancement,
  useFixa,
  useUnit,
} from "../../hooks";

import FieldEnhancement from "../FieldLevel";
import AutocompleteFixa from "../AutocompleteFixa";
import AutocompleteAugment from "../AutocompleteAugment";
import AutocompleteUnit from "../AutocompleteUnit";
import FormBase from "../FormBase";

import { collectStat, createSummary } from "./helper";
import { getActiveAugmentCount } from "../utility";

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

  const active_augments: number = getActiveAugmentCount(level);

  const stat = useMemo(
    () =>
      collectStat(
        unit,
        level,
        fixa,
        augments.slice(0, active_augments),
      ),
    [unit, level, fixa, augments],
  );

  useEffect(() => {
    onStatChange(stat);
  }, [stat]);

  useEffect(() => {
    onSummaryChange(
      createSummary(unit, fixa, augments.slice(0, active_augments)),
    );
  }, [unit, fixa, augments]);

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
              valueMin={0}
              valueMax={60}
              value={level}
              onChange={setLevel}
            />
            <AutocompleteFixa
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
