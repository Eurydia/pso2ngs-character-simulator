import { FC, memo, SyntheticEvent, ReactNode } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
  InputAdornment,
} from "@mui/material";
import { PriorityHigh } from "@mui/icons-material";

import { AssetWeapons, Weapon } from "../../assets";

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
        <PriorityHigh color="warning" />
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
  onChange: (value: Weapon | null) => void;
};
export const AutocompleteWeapon: FC<AutocompleteWeaponProps> = memo(
  (props) => {
    const { value, onChange } = props;

    const handleChange = (
      event: SyntheticEvent<Element, Event>,
      value: Weapon | null,
      reason: AutocompleteChangeReason,
    ) => {
      onChange(value);
    };

    return (
      <Autocomplete
        options={AssetWeapons}
        value={value}
        onChange={handleChange}
        filterOptions={filterOptions}
        renderInput={({ InputProps, ...rest }) => {
          return (
            <TextField
              {...rest}
              fullWidth
              required
              placeholder="Weapon"
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
