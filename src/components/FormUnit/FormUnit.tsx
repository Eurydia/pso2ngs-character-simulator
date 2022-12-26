import { FC, useEffect, useMemo, useState } from "react";
import { Grid, Box, Stack } from "@mui/material";

import { Fixa, GroupEnumFixa, StatObject, Unit } from "../../assets";
import { SummaryEquipment } from "../../types";
import { useAugment } from "../../hooks";

import FieldEnhancement from "../FieldEnhancement";
import AutocompleteFixa from "../AutocompleteFixa";
import AutocompleteAugment from "../AutocompleteAugment";
import AutocompleteUnit from "../AutocompleteUnit";
import FormBase from "../FormBase";
import StatView from "../StatView";

import { collectStat, collectSummary } from "./helper";

type FormWeaponProps = {
  storageKey: string;
  title: string;
  onStatChange: (stat: StatObject) => void;
  onSummaryChange: (summary: SummaryEquipment) => void;
};
const FormWeapon: FC<FormWeaponProps> = (props) => {
  const { storageKey, onStatChange, onSummaryChange } = props;

  const [valueUnit, setValueUnit] = useState<Unit | null>(null);
  const [valueFixa, setValueFixa] = useState<Fixa | null>(null);
  const [valueLevel, setValueLevel] = useState<number>(0);
  const [valueAugments, setValueAugments] = useAugment(storageKey);

  const stat = useMemo(
    () =>
      collectStat(valueUnit, valueLevel, valueFixa, valueAugments),
    [valueUnit, valueLevel, valueFixa, valueAugments],
  );

  useEffect(() => {
    onStatChange(stat);
  }, [stat]);

  useEffect(() => {
    onSummaryChange(
      collectSummary(valueUnit, valueFixa, valueAugments),
    );
  }, [valueUnit, valueFixa, valueAugments]);

  return (
    <FormBase title={props.title} stat={stat}>
      <Stack spacing={1}>
        <AutocompleteUnit value={valueUnit} onChange={setValueUnit} />
        <FieldEnhancement
          valueMin={0}
          valueMax={60}
          value={valueLevel}
          onChange={setValueLevel}
        />
        <AutocompleteFixa
          value={valueFixa}
          onChange={setValueFixa}
          mode={GroupEnumFixa.UNIT}
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
