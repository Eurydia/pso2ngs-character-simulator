import { FC, memo, SyntheticEvent, useCallback } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";

import { AssetAugments, Augment } from "../../assets";

import { filterOptions } from "./helper";
import { OptionAugment } from "./OptionAugment";
import { TextFieldAugment } from "./TextFieldAugment";

type AutocompleteAugmentProps = {
  // Dynamics props
  disabled: boolean;
  augment: Augment | null;

  onAugmentChange: (next_augment: Augment | null) => void;
};
export const AutocompleteAugment: FC<AutocompleteAugmentProps> = memo(
  (props) => {
    const { disabled, augment, onAugmentChange } = props;

    const handleAugmentChange = useCallback(
      (
        event: SyntheticEvent<Element, Event>,
        value: Augment | null,
        reason: AutocompleteChangeReason,
      ): void => {
        onAugmentChange(value);
      },
      [],
    );

    return (
      <Autocomplete
        disabled={disabled}
        options={AssetAugments}
        value={augment}
        onChange={handleAugmentChange}
        filterOptions={filterOptions}
        renderInput={(params) => {
          return <TextFieldAugment {...params} />;
        }}
        renderOption={(props, option, _) => {
          return <OptionAugment LIProps={props} option={option} />;
        }}
      />
    );
  },
  (prev, next) => {
    return (
      prev.disabled === next.disabled &&
      prev.augment?.label === next.augment?.label
    );
  },
);
