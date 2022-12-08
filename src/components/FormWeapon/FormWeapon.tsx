import { Box, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";

import { Augment, Fixa, GroupEnumFixa, Weapon } from "../../assets";

import FieldEnhancement from "../FieldEnhancement";
import AutocompleteFixa from "../AutocompleteFixa";
import AutocompleteWeapon from "../AutocompleteWeapon";
import AutocompleteAugment from "../AutocompleteAugment";

interface FormWeaponProps {
  title: string;
}
const FormWeapon: FC<FormWeaponProps> = (props) => {
  const [valueWeapon, setValueWeapon] = useState<Weapon | null>(null);
  const [valueFixa, setValueFixa] = useState<Fixa | null>(null);
  const [valueEnhancement, setValueEnhancement] =
    useState<string>("");

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
      </Stack>
    </Box>
  );
};

export default FormWeapon;
