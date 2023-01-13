import React, { memo, FC, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";

import { AssetFoods, Food } from "../../assets";

import { filterOptions } from "./helper";
import { OptionFood } from "./OptionFood";
import { TextFieldFood } from "./TextFieldFood";

type AutocompleteFoodProps = {
  food: Food | null;
  onFoodChange: (next_food: Food | null) => void;
  onKeyEnterPress: () => void;
};
export const AutocompleteFood: FC<AutocompleteFoodProps> = memo(
  (props) => {
    const { food, onFoodChange, onKeyEnterPress } = props;

    const handleFoodChange = (
      event: SyntheticEvent<Element, Event>,
      value: Food | null,
      reason: AutocompleteChangeReason,
    ) => {
      onFoodChange(value);
    };

    const handleKeyDown = (
      event: React.KeyboardEvent<HTMLDivElement>,
    ) => {
      const key = event.key;
      if (key === "Enter") {
        onKeyEnterPress();
      }
    };

    return (
      <Autocomplete
        options={AssetFoods}
        value={food}
        onChange={handleFoodChange}
        onKeyDown={handleKeyDown}
        renderInput={(params) => <TextFieldFood {...params} />}
        renderOption={(props, option, _) => (
          <OptionFood LIProps={props} option={option} />
        )}
        filterOptions={filterOptions}
      />
    );
  },
  (prev, next) => {
    return prev.food?.label === next.food?.label;
  },
);
