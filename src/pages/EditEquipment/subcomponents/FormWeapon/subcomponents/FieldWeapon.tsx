import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";

interface FieldWeaponProps {
  value?: string | null;
  onChange?: (value: string | null) => void;
}
const FieldWeapon: FC<FieldWeaponProps> = (props) => {
  return (
    <Autocomplete
      options={[]}
      renderInput={(params) => (
        <TextField {...params} fullWidth label="Weapon" />
      )}
    />
  );
};

export default FieldWeapon;
