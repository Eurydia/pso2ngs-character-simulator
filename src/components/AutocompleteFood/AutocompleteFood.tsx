import React, { FC, SyntheticEvent } from "react";
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
  onChange: (value: Food | null) => void;
  onAdd: () => void;
};
const AutocompleteAugment: FC<AutocompleteAugmentProps> = (props) => {
  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    value: Food | null,
    reason: AutocompleteChangeReason,
  ) => {
    props.onChange(value);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    const key = event.key;

    if (key === "Enter") {
      props.onAdd();
    }
  };

  return (
    <Autocomplete
      options={AssetFoods}
      value={props.value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      renderInput={(params) => <TextField {...params} />}
      renderOption={(props, option, _) => (
        <CustomOption {...props} option={option} />
      )}
      filterOptions={filterOptions}
      fullWidth
      placeholder="Search"
    />
  );
};

export default AutocompleteAugment;
