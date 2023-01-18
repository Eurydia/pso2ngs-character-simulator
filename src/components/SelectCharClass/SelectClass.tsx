import { ChangeEvent, FC, memo, ReactNode } from "react";
import {
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import { AssetCharacterClasses } from "../../assets";

const CLASS_OPTIONS: string[] = [
  AssetCharacterClasses.HUNTER.label,
  AssetCharacterClasses.FIGHTER.label,
  AssetCharacterClasses.RANGER.label,
  AssetCharacterClasses.GUNNER.label,
  AssetCharacterClasses.FORCE.label,
  AssetCharacterClasses.TECHTER.label,
  AssetCharacterClasses.BRAVER.label,
  AssetCharacterClasses.BOUNCER.label,
  AssetCharacterClasses.WAKER.label,
];

type SelectCharClassProps = {
  // Dynamics props
  charClass: string;

  // Static props
  startIcon: ReactNode;

  onCharClassChange: (next_class: string) => void;
};
export const SelectCharClass: FC<SelectCharClassProps> = memo(
  (props) => {
    const { startIcon, charClass, onCharClassChange } = props;

    const handlePotentialLevelChange = (
      event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ): void => {
      const value_input: string = event.target.value;
      if (!CLASS_OPTIONS.includes(value_input)) {
        return;
      }
      onCharClassChange(value_input);
    };

    return (
      <TextField
        select
        fullWidth
        value={charClass}
        onChange={handlePotentialLevelChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {startIcon}
            </InputAdornment>
          ),
        }}
      >
        {CLASS_OPTIONS.map((label, index) => {
          return (
            <MenuItem key={`${label}-${index}`} value={label}>
              <Typography>{label}</Typography>
            </MenuItem>
          );
        })}
      </TextField>
    );
  },
  (prev, next) => {
    return prev.charClass === next.charClass;
  },
);
