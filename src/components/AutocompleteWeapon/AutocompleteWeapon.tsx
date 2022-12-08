import { FC, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";
import { AssetWeapons, Weapon } from "../../assets";

import CustomOption from "./CustomOption";
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
        <TextField
          {...params}
          fullWidth
          name="autocomplete-weapon"
          placeholder="Weapon"
          size="small"
        />
      )}
      renderOption={(props, option, _) => (
        <CustomOption {...props} option={option} />
      )}
      filterOptions={filterOptions}
    />
  );
};

export default AutocompleteWeapon;
