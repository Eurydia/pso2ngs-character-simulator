import { FC, memo, SyntheticEvent, ReactNode } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
  InputAdornment,
} from "@mui/material";
import { PriorityHighRounded } from "@mui/icons-material";

import { AssetUnits, Unit } from "../../assets";

import { CustomOption } from "./CustomOption";
import { filterOptions } from "./helper";

type EndAdornmentProps = {
  shouldShowWarning: boolean;
  defaultAdornment: ReactNode | ReactNode[];
};
const EndAdornment: FC<EndAdornmentProps> = (props) => {
  const { shouldShowWarning, defaultAdornment } = props;
  if (shouldShowWarning) {
    return (
      <InputAdornment position="end">
        <PriorityHighRounded fontSize="large" color="warning" />
        {defaultAdornment}
      </InputAdornment>
    );
  }
  return (
    <InputAdornment position="end">{defaultAdornment}</InputAdornment>
  );
};

type AutocompleteWeaponProps = {
  value: Unit | null;
  onChange: (value: Unit | null) => void;
};
export const AutocompleteUnit: FC<AutocompleteWeaponProps> = memo(
  (props) => {
    const { value, onChange } = props;

    const handleChange = (
      event: SyntheticEvent<Element, Event>,
      value: Unit | null,
      reason: AutocompleteChangeReason,
    ) => {
      onChange(value);
    };

    return (
      <Autocomplete
        options={AssetUnits}
        value={value}
        onChange={handleChange}
        filterOptions={filterOptions}
        renderInput={({ InputProps, ...rest }) => {
          return (
            <TextField
              {...rest}
              fullWidth
              placeholder="Unit*"
              InputProps={{
                ...InputProps,
                endAdornment: (
                  <EndAdornment
                    shouldShowWarning={value === null}
                    defaultAdornment={InputProps.endAdornment}
                  />
                ),
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
    return prev.value?.label === next.value?.label;
  },
);
