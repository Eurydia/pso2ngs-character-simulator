import { FC, memo, SyntheticEvent } from "react";
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
const AutocompleteWeapon: FC<AutocompleteWeaponProps> = memo(
  (props) => {
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
        renderInput={(params) => <TextField {...params} />}
        renderOption={(props, option, _) => (
          <CustomOption {...props} option={option} />
        )}
        filterOptions={filterOptions}
        fullWidth
        placeholder="Unit"
      />
    );
  },
  (prev, next) => {
    return prev.value?.label === next.value?.label;
  },
);

export default AutocompleteWeapon;
