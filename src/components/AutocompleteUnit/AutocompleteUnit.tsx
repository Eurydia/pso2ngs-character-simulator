import { FC, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";
import { AssetUnits, Unit } from "../../assets";

import CustomOption from "./CustomOption";
import { filterOptions } from "./helper";

type AutocompleteWeaponProps = {
  value: Unit | null;
  onChange: (value: Unit | null) => void;
};
const AutocompleteWeapon: FC<AutocompleteWeaponProps> = (props) => {
  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: Unit | null,
    reason: AutocompleteChangeReason,
  ) => {
    props.onChange(value);
  };

  return (
    <Autocomplete
      options={AssetUnits}
      value={props.value}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField {...params} fullWidth placeholder="Unit" />
      )}
      renderOption={(props, option, _) => (
        <CustomOption {...props} option={option} />
      )}
      filterOptions={filterOptions}
    />
  );
};

export default AutocompleteWeapon;
