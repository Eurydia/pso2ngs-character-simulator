import { FC, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";
import { filterOptions, renderOption } from "./helper";
import { WeaponPotential } from "../../assets";

interface AutocompleteWeaponPotentialProps {
  options: WeaponPotential[];
  value: WeaponPotential | null;
  onChange: (value: WeaponPotential | null) => void;
}
const AutocompleteWeaponPotential: FC<
  AutocompleteWeaponPotentialProps
> = (props) => {
  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: WeaponPotential | null,
    reason: AutocompleteChangeReason,
  ) => {
    props.onChange(value);
  };

  return (
    <Autocomplete
      options={props.options}
      value={props.value}
      onChange={handleChange}
      groupBy={(option) => option.group}
      renderInput={(params) => (
        <TextField {...params} fullWidth label="WeaponPotential" />
      )}
      renderOption={renderOption}
      filterOptions={filterOptions}
    />
  );
};

export default AutocompleteWeaponPotential;
