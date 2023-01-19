import { FC, memo, SyntheticEvent, useCallback } from "react";
import {
  Autocomplete,
  AutocompleteChangeReason,
} from "@mui/material";

import { AssetWeapons, Weapon } from "../../assets";

import { filterOptions } from "./helper";
import { OptionWeapon } from "./OptionWeapon";
import { TextFieldWeapon } from "./TextFieldWeapon";

type AutocompleteWeaponProps = {
  // Dynamic props
  charLevel: number;
  weapon: Weapon | null;

  onWeaponChange: (next_value: Weapon | null) => void;
};
export const AutocompleteWeapon: FC<AutocompleteWeaponProps> = memo(
  (props) => {
    const { charLevel, weapon, onWeaponChange } = props;

    const handleWeaponChange = useCallback(
      (
        event: SyntheticEvent<Element, Event>,
        value: Weapon | null,
        reason: AutocompleteChangeReason,
      ): void => {
        onWeaponChange(value);
      },
      [],
    );

    return (
      <Autocomplete
        options={AssetWeapons}
        value={weapon}
        onChange={handleWeaponChange}
        filterOptions={filterOptions}
        getOptionDisabled={(option) => {
          return option.level_required > charLevel;
        }}
        renderOption={(props, option, _) => {
          return (
            <OptionWeapon
              key={option.label}
              LIProps={props}
              option={option}
            />
          );
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
    return (
      prev.charLevel === next.charLevel &&
      prev.weapon?.label === next.weapon?.label
    );
  },
);
