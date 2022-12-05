import { FC, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";
import { AssetWeapons, Weapon } from "../../assets";
import { filterOptions, renderOption } from "./helper";

interface AutocompleteWeaponProps {
  value: Weapon | null;
  onChange: (value: Weapon | null) => void;
}
const AutocompleteWeapon: FC<AutocompleteWeaponProps> = (props) => {
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
      groupBy={(option) => option.group}
      renderInput={(params) => (
        <TextField {...params} fullWidth label="Weapon" />
      )}
      renderOption={renderOption}
      filterOptions={filterOptions}
    />
  );
};

export default AutocompleteWeapon;
