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

  const stat = useMemo(
    () => collectStat(unit, level, fixa, augments),
    [unit, level, fixa, augments],
  );

  useEffect(() => {
    onStatChange(stat);
  }, [stat]);

  useEffect(() => {
    onSummaryChange(createSummary(unit, fixa, augments));
  }, [unit, fixa, augments]);

  return (
    <FormBase
      title={props.title}
      dialogTitle={`Stats for ${props.title}`}
      dialogStat={stat}
    >
      <Stack spacing={2}>
        <Box>
          <Stack spacing={2}>
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
