import { FC, memo, SyntheticEvent, ReactNode } from "react";
import {
  TextField,
  Autocomplete,
  AutocompleteChangeReason,
  InputAdornment,
} from "@mui/material";
import { PriorityHighRounded } from "@mui/icons-material";

import { AssetWeapons, Weapon } from "../../assets";

import { filterOptions } from "./helper";
import { OptionWeapon } from "./OptionWeapon";
import { TextFieldWeapon } from "./TextFieldWeapon";

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
  weapon: Weapon | null;
  onWeaponChange: (next_value: Weapon | null) => void;
};
export const AutocompleteWeapon: FC<AutocompleteWeaponProps> = memo(
  (props) => {
    const { weapon, onWeaponChange } = props;

    const handleWeaponChange = (
      event: SyntheticEvent<Element, Event>,
      value: Weapon | null,
      reason: AutocompleteChangeReason,
    ) => {
      onWeaponChange(value);
    };

    return (
      <Autocomplete
        options={AssetWeapons}
        value={weapon}
        onChange={handleWeaponChange}
        filterOptions={filterOptions}
        renderOption={(props, option, _) => {
          return <OptionWeapon LIProps={props} option={option} />;
        }}
        renderInput={(params) => {
          return (
            <TextFieldWeapon
              {...params}
              shouldShowWarning={weapon === null}
            />
          );
        }}
      />
    );
  },
  (prev, next) => {
    return prev.weapon?.label === next.weapon?.label;
  },
);
