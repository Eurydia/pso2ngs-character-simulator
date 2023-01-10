import { FC, memo, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
  Typography,
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
    const { disabled, value, onChange } = props;

    const handleChange = (
      event: SyntheticEvent<Element, Event>,
      value: Augment | null,
      reason: AutocompleteChangeReason,
    ) => {
      onChange(value);
    };

    return (
      <Autocomplete
        disabled={disabled}
        options={AssetAugments}
        value={value}
        onChange={handleChange}
        filterOptions={filterOptions}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              fullWidth
              placeholder="Augment"
              sx={{
                textDecorationLine: disabled
                  ? "line-through"
                  : "none",
              }}
            />
          );
        }}
        renderOption={(props, option, _) => {
          return <CustomOption {...props} option={option} />;
        }}
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
