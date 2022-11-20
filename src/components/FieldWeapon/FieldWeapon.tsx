import { FC, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";
import { AssetWeapons, Weapon } from "../../assets";
import { filterOptions, renderOption } from "./helper";

interface FieldWeaponProps {
  value: Weapon | null;
  onChange: (value: Weapon | null) => void;
}
const FieldWeapon: FC<FieldWeaponProps> = (props) => {
  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: Weapon | null,
    reason: AutocompleteChangeReason,
  ) => {
    props.onChange(value);
  };

  return (
    <Autocomplete
      options={AssetWeapons}
      value={props.value}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField {...params} fullWidth label="Weapon" />
      )}
      renderOption={renderOption}
      filterOptions={filterOptions}
      groupBy={(option) => option.group}
    />
  );
};

export default FieldWeapon;
