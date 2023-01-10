import { FC, memo, SyntheticEvent } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
  Typography,
} from "@mui/material";

import { Fixa, AssetFixas, GroupEnumFixa } from "../../assets";

import { filterOptions } from "./helper";
import { CustomOption } from "./CustomOption";

type AutocompleteFixaProps = {
  mode: GroupEnumFixa;
  disabled: boolean;
  value: Fixa | null;
  onChange: (value: Fixa | null) => void;
};
export const AutocompleteFixa: FC<AutocompleteFixaProps> = memo(
  (props) => {
    const { disabled, value, onChange } = props;

    const handleChange = (
      event: SyntheticEvent<Element, Event>,
      value: Fixa | null,
      reason: AutocompleteChangeReason,
    ) => {
      onChange(value);
    };

    const options: Fixa[] = AssetFixas.filter((fixa) => {
      return fixa.group === props.mode;
    });

    return (
      <Autocomplete
        disabled={disabled}
        options={options}
        value={value}
        onChange={handleChange}
        filterOptions={filterOptions}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              fullWidth
              placeholder="Fixa"
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
