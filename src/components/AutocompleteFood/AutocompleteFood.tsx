import { FC, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";

import { AssetFoods, Food } from "../../assets";

import CustomOption from "./CustomOption";
import { filterOptions } from "./helper";

type AutocompleteAugmentProps = {
  value: Food | null;
  // onChange: (value: Food | null) => void;
};
const AutocompleteAugment: FC<AutocompleteAugmentProps> = (props) => {
  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: Food | null,
    reason: AutocompleteChangeReason,
  ) => {
    // props.onChange(value);
  };

  return (
    <Autocomplete
      options={AssetFoods}
      value={props.value}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField {...params} fullWidth placeholder="Augment" />
      )}
      renderOption={(props, option, _) => (
        <CustomOption {...props} option={option} />
      )}
      filterOptions={filterOptions}
    />
  );
};

export default AutocompleteAugment;
