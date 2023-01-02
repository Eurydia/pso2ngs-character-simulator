import { FC, memo, SyntheticEvent } from "react";
import {
  Autocomplete,
  AutocompleteChangeReason,
  TextField,
} from "@mui/material";

import { Weapon } from "../../assets";

import { CustomOption } from "./CustomOption";

type AutocompletePotentialProps = {
  weapon: Weapon | null;
  value: string;
  onChange: (value: string) => void;
};
export const AutocompletePotential: FC<AutocompletePotentialProps> =
  memo(
    (props) => {
      const { weapon } = props;

      let options: string[] = [];
      if (weapon !== null) {
        options = weapon.potential.keys;
      }

      const handleChange = (
        event: SyntheticEvent<Element, Event>,
        value: string | null,
        reason: AutocompleteChangeReason,
      ) => {
        if (value === null) {
          props.onChange("");
          return;
        }

        props.onChange(value);
      };

      return (
        <Autocomplete
          disabled={props.weapon === null}
          value={props.value}
          options={options}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField {...params} placeholder="Potential" />
          )}
          renderOption={(props, option, _) => (
            <CustomOption {...props} option={option} />
          )}
        />
      );
    },
    (prev, next) => {
      return (
        prev.value === next.value &&
        prev.weapon?.label === next.weapon?.label
      );
    },
  );
