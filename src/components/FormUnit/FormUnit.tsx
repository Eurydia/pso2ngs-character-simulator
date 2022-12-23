import { FC, useState } from "react";
import { Grid, Box, Stack, Typography } from "@mui/material";

import { Fixa, GroupEnumFixa, Unit } from "../../assets";
import { useAugment } from "../../hooks";

import FieldEnhancement from "../FieldEnhancement";
import AutocompleteFixa from "../AutocompleteFixa";
import AutocompleteAugment from "../AutocompleteAugment";
import AutocompleteUnit from "../AutocompleteUnit";
import FormBase from "../FormBase";

import { collectStats } from "./helper";

type FormWeaponProps = {
  title: string;
};
const FormWeapon: FC<FormWeaponProps> = (props) => {
  const [valueUnit, setValueUnit] = useState<Unit | null>(null);
  const [valueFixa, setValueFixa] = useState<Fixa | null>(null);
  const [valueEnhancement, setValueEnhancement] = useState<number>(0);
  const [valueAugments, setValueAugments] = useAugment();

  return (
    <FormBase title={props.title}>
      <Stack spacing={1}>
        <AutocompleteUnit value={valueUnit} onChange={setValueUnit} />
        <FieldEnhancement
          valueMin={0}
          valueMax={60}
          value={valueEnhancement}
          onChange={setValueEnhancement}
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
