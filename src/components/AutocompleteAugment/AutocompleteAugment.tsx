import { FC, memo, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";

import { AssetAugments, Augment } from "../../assets";

import { filterOptions } from "./helper";
import { CustomOption } from "./CustomOption";

type AutocompleteAugmentProps = {
  disabled: boolean;
  value: Augment | null;
  onChange: (value: Augment | null) => void;
};
export const AutocompleteAugment: FC<AutocompleteAugmentProps> = memo(
  (props) => {
    const handleChange = (
      event: SyntheticEvent<Element, Event>,
      value: Augment | null,
      reason: AutocompleteChangeReason,
    ) => {
      props.onChange(value);
    };

    return (
      <Autocomplete
        disabled={props.disabled}
        options={AssetAugments}
        value={props.value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField {...params} placeholder="Augment" />
        )}
        renderOption={(props, option, _) => (
          <CustomOption {...props} option={option} />
        )}
        filterOptions={filterOptions}
        fullWidth
      />
    );
  },
  (prev, next) => {
    return (
      prev.disabled === next.disabled &&
      prev.value?.label === next.value?.label
    );
  },
);
