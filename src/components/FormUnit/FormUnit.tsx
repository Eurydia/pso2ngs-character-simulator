import { FC, useState } from "react";
import { Grid, Box, Stack } from "@mui/material";

import { Fixa, GroupEnumFixa, Unit } from "../../assets";
import { useAugment } from "../../hooks";

import FieldEnhancement from "../FieldEnhancement";
import AutocompleteFixa from "../AutocompleteFixa";
import AutocompleteAugment from "../AutocompleteAugment";
import AutocompleteUnit from "../AutocompleteUnit";
import FormBase from "../FormBase";

import { collectStats } from "./helper";
import StatView from "../StatView";

type FormWeaponProps = {
  title: string;
};
const FormWeapon: FC<FormWeaponProps> = (props) => {
  const [valueUnit, setValueUnit] = useState<Unit | null>(null);
  const [valueFixa, setValueFixa] = useState<Fixa | null>(null);
  const [valueLevel, setValueLevel] = useState<number>(0);
  const [valueAugments, setValueAugments] = useAugment();

  const stats_to_display = collectStats(
    valueUnit,
    valueLevel,
    valueFixa,
    valueAugments,
  );

  return (
    <FormBase
      title={props.title}
      slotDialog={<StatView disablePadding stat={stats_to_display} />}
    >
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
