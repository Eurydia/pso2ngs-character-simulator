import { Grid, Box, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";

import { Fixa, GroupEnumFixa, Potential, Weapon } from "../../assets";
import { useAugment } from "../../hooks";

import FieldEnhancement from "../FieldEnhancement";
import AutocompleteFixa from "../AutocompleteFixa";
import AutocompleteWeapon from "../AutocompleteWeapon";
import AutocompleteAugment from "../AutocompleteAugment";
import SelectPotential from "../SelectPotential";

interface FormWeaponProps {
  title: string;
}
const FormWeapon: FC<FormWeaponProps> = (props) => {
  const [valueWeapon, setValueWeapon] = useState<Weapon | null>(null);
  const [valueFixa, setValueFixa] = useState<Fixa | null>(null);
  const [valuePotential, setValuePotential] = useState<string>("");
  const [valueEnhancement, setValueEnhancement] =
    useState<string>("");
  const [valueAugments, setValueAugments] = useAugment();

  let potential: Potential | null = null;
  if (valueWeapon !== null) {
    potential = valueWeapon.potential;
  }

  return (
    <Box>
      <Stack spacing={1}>
        <Typography fontWeight="bold" fontSize="large">
          {props.title}
        </Typography>
        <AutocompleteWeapon
          value={valueWeapon}
          onChange={setValueWeapon}
        />
        <FieldEnhancement
          value={valueEnhancement}
          onChange={setValueEnhancement}
          valueMin={0}
          valueMax={50}
        />
        <AutocompleteFixa
          value={valueFixa}
          onChange={setValueFixa}
          mode={GroupEnumFixa.WEAPON}
        />
        <SelectPotential
          potential={potential}
          value={valuePotential}
          onChange={setValuePotential}
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
