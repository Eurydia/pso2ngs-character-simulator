import { FC, memo, SyntheticEvent, ReactNode } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
  InputAdornment,
} from "@mui/material";
import { PriorityHighRounded } from "@mui/icons-material";

import { AssetWeapons, Weapon } from "../../assets";

import { WeaponOption } from "./WeaponOption";
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
  value: Weapon | null;
  onValueChange: (next_value: Weapon | null) => void;
};
export const AutocompleteWeapon: FC<AutocompleteWeaponProps> = memo(
  (props) => {
    const { value, onValueChange } = props;

    const handleChange = (
      event: SyntheticEvent<Element, Event>,
      value: Weapon | null,
      reason: AutocompleteChangeReason,
    ) => {
      onValueChange(value);
    };

    return (
      <Autocomplete
        options={AssetWeapons}
        value={value}
        onChange={handleChange}
        filterOptions={filterOptions}
        renderOption={(props, option, _) => {
          return <WeaponOption {...props} option={option} />;
        }}
        renderInput={({ InputProps, ...rest }) => {
          return (
            <TextField
              {...rest}
              fullWidth
              placeholder="Weapon*"
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
      />
    );
  },
  (prev, next) => {
    return prev.value?.label === next.value?.label;
  },
);
