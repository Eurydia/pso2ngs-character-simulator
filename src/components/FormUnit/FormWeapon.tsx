import { Grid, Box, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";

import { Fixa, GroupEnumFixa, Unit } from "../../assets";
import { useAugment } from "../../hooks";

import FieldEnhancement from "../FieldEnhancement";
import AutocompleteFixa from "../AutocompleteFixa";
import AutocompleteAugment from "../AutocompleteAugment";
import AutocompleteUnit from "../AutocompleteUnit";

interface FormWeaponProps {
  title: string;
}
const FormWeapon: FC<FormWeaponProps> = (props) => {
  const [valueUnit, setValueUnit] = useState<Unit | null>(null);
  const [valueFixa, setValueFixa] = useState<Fixa | null>(null);
  const [valueEnhancement, setValueEnhancement] =
    useState<string>("");
  const [valueAugments, setValueAugments] = useAugment();

  return (
    <Box>
      <Stack spacing={1}>
        <Typography fontWeight="bold" fontSize="large">
          {props.title}
        </Typography>
        <AutocompleteUnit value={valueUnit} onChange={setValueUnit} />
        <FieldEnhancement
          valueMin={0}
          valueMax={50}
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
    </Box>
  );
};

export default FormWeapon;
