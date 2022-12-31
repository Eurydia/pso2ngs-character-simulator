import { FC, memo, SyntheticEvent } from "react";
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
const AutocompleteWeapon: FC<AutocompleteWeaponProps> = memo(
  (props) => {
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
          <TextField {...params} placeholder="Weapon" />
        )}
        renderOption={(props, option, _) => (
          <CustomOption {...props} option={option} />
        )}
        filterOptions={filterOptions}
        fullWidth
      />
    );
  },
  (prev, next) => {
    return prev.value?.label === next.value?.label;
  },
);

export default AutocompleteWeapon;
