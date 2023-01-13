import React, { memo, FC, SyntheticEvent, useCallback } from "react";
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
  // Dynamics props
  food: Food | null;

  onFoodChange: (next_food: Food | null) => void;
  onKeyEnterPress: () => void;
};
export const AutocompleteFood: FC<AutocompleteFoodProps> = memo(
  (props) => {
    const { food, onFoodChange, onKeyEnterPress } = props;

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

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>): void => {
        const key = event.key;
        if (key === "Enter") {
          onKeyEnterPress();
        }
      },
      [],
    );

    return (
      <Autocomplete
        options={AssetFoods}
        value={food}
        onChange={handleFoodChange}
        onKeyDown={handleKeyDown}
        filterOptions={filterOptions}
        renderInput={(params) => <TextFieldFood {...params} />}
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
