import React, { memo, FC, SyntheticEvent, useCallback } from "react";
import {
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";

import { AssetFoods, Food } from "../../assets";

import { filterOptions } from "./helper";
import { OptionFood } from "./OptionFood";
import { TextFieldFood } from "./TextFieldFood";

type AutocompleteFoodProps = {
  // Dynamics props
  food: Food | null;

  onFoodChange: (next_food: Food | null) => void;
};
export const AutocompleteFood: FC<AutocompleteFoodProps> = memo(
  (props) => {
    const { food, onFoodChange } = props;

    const handleFoodChange = useCallback(
      (
        event: SyntheticEvent<Element, Event>,
        value: Food | null,
        reason: AutocompleteChangeReason,
      ): void => {
        onFoodChange(value);
      },
      [],
    );

    return (
      <Autocomplete
        options={AssetFoods}
        value={food}
        onChange={handleFoodChange}
        filterOptions={filterOptions}
        renderInput={(params) => {
          return <TextFieldFood {...params} />;
        }}
        renderOption={(props, option, _) => {
          return (
            <OptionFood
              key={option.label}
              LIProps={props}
              option={option}
            />
          );
        }}
      />
    );
  },
  (prev, next) => {
    return prev.food?.label === next.food?.label;
  },
);
