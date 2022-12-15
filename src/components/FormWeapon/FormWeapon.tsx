import { Grid, Box, Stack, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";

import {
  Fixa,
  GroupEnumFixa,
  Potential,
  statObject,
  StatObject,
  Weapon,
} from "../../assets";
import { useAugment } from "../../hooks";

import FieldEnhancement from "../FieldEnhancement";
import AutocompleteFixa from "../AutocompleteFixa";
import AutocompleteWeapon from "../AutocompleteWeapon";
import AutocompleteAugment from "../AutocompleteAugment";
import SelectPotential from "../AutocompletePotential";
import StatView from "../StatView";
import { collectStats } from "./helper";

interface FormWeaponProps {
  title: string;
}
const FormWeapon: FC<FormWeaponProps> = (props) => {
  const [valueWeapon, setValueWeapon] = useState<Weapon | null>(null);
  const [valueFixa, setValueFixa] = useState<Fixa | null>(null);
  const [valuePotential, setValuePotential] = useState<string>("");
  const [valueEnhancement, setValueEnhancement] = useState<number>(0);
  const [valueAugments, setValueAugments] = useAugment();

  const handleWeaponChange = (new_value: Weapon | null) => {
    setValueWeapon(new_value);
    setValuePotential("");
  };

  let potential: Potential | null = null;
  if (valueWeapon !== null) {
    potential = valueWeapon.potential;
  }

  const stats_to_display = collectStats(
    valueWeapon,
    valueEnhancement,
    valueFixa,
    valuePotential,
    valueAugments,
  );

  return (
    <Box>
      <Stack spacing={1}>
        <Typography fontWeight="bold" fontSize="large">
          {props.title}
        </Typography>
        <AutocompleteWeapon
          value={valueWeapon}
          onChange={handleWeaponChange}
        />
        <FieldEnhancement
          valueMin={0}
          valueMax={60}
          value={valueEnhancement}
          onChange={setValueEnhancement}
        />
        <SelectPotential
          potential={potential}
          value={valuePotential}
          onChange={setValuePotential}
        />
        <AutocompleteFixa
          value={valueFixa}
          onChange={setValueFixa}
          mode={GroupEnumFixa.WEAPON}
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
        <StatView stat={stats_to_display} />
      </Stack>
    </Box>
  );
};

export default FormWeapon;
