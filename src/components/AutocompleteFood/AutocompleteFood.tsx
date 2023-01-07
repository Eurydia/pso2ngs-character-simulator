import React, { memo, FC, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";

import { AssetFoods, Food } from "../../assets";

import { CustomOption } from "./CustomOption";
import { filterOptions } from "./helper";

type AutocompleteAugmentProps = {
  value: Food | null;
  onChange: (value: Food | null) => void;
  onEnterPress: () => void;
};
export const AutocompleteFood: FC<AutocompleteAugmentProps> = memo(
  (props) => {
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
        props.onEnterPress();
      }
    };

    return (
      <Autocomplete
        options={AssetFoods}
        value={props.value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        renderInput={(params) => (
          <TextField {...params} fullWidth placeholder="Search" />
        )}
        renderOption={(props, option, _) => (
          <CustomOption {...props} option={option} />
        )}
        filterOptions={filterOptions}
      />
    );
  },
  (prev, next) => {
    return prev.value?.label === next.value?.label;
  },
);
