import {
  ChangeEvent,
  FC,
  memo,
  ReactNode,
  SyntheticEvent,
  useCallback,
} from "react";
import {
  Autocomplete,
  AutocompleteChangeReason,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import { AssetCharClasses } from "../../assets";
import { OptionCharClass } from "./OptionCharClass";
import { TextFieldCharClass } from "./TextFieldCharClass";

const CLASS_OPTIONS: string[] = [
  AssetCharClasses.HUNTER.label,
  AssetCharClasses.FIGHTER.label,
  AssetCharClasses.RANGER.label,
  AssetCharClasses.GUNNER.label,
  AssetCharClasses.FORCE.label,
  AssetCharClasses.TECHTER.label,
  AssetCharClasses.BRAVER.label,
  AssetCharClasses.BOUNCER.label,
  AssetCharClasses.WAKER.label,
];

type AutocompleteCharClassProps = {
  // Dynamics props
  charClass: string;

  // Static props
  startIcon: ReactNode;

  onCharClassChange: (next_class: string) => void;
};
export const AutocompleteCharClass: FC<AutocompleteCharClassProps> =
  memo(
    (props) => {
      const { startIcon, charClass, onCharClassChange } = props;

      const handleCharClassChange = useCallback(
        (
          event: SyntheticEvent<Element, Event>,
          value: string | null,
          reason: AutocompleteChangeReason,
        ): void => {
          if (value === null) {
            return;
          }
          onCharClassChange(value);
        },
        [],
      );

      return (
        <Autocomplete
          disableClearable
          options={CLASS_OPTIONS}
          value={charClass}
          onChange={handleCharClassChange}
          renderOption={(props, option, _) => {
            return (
              <OptionCharClass
                key={option}
                LIProps={props}
                option={option}
              />
            );
          }}
          renderInput={(params) => {
            return (
              <TextFieldCharClass {...params} startIcon={startIcon} />
            );
          }}
        />
      );
    },
    (prev, next) => {
      return prev.charClass === next.charClass;
    },
  );
