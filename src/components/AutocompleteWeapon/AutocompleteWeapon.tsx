import { FC, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";
import { AssetWeapons, Weapon } from "../../assets";

import AutocompleteOption from "./AutocompleteOption";
import { filterOptions } from "./helper";

type AutocompleteWeaponProps = {
  value: Weapon | null;
  onChange: (value: Weapon | null) => void;
};
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
      renderInput={(params) => (
        <TextField {...params} fullWidth label="Weapon" />
      )}
      renderOption={(props, option, _) => (
        <AutocompleteOption {...props} option={option} />
      )}
      filterOptions={filterOptions}
    />
  );
};

export default AutocompleteWeapon;
