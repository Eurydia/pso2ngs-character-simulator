import { ChangeEvent, FC, memo, ReactNode } from "react";
import {
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";

import { AssetCharacterClasses } from "../../assets";

const CLASS_OPTIONS: string[] = [
  AssetCharacterClasses.G_HUNTER.label,
  AssetCharacterClasses.G_FIGHTER.label,
  AssetCharacterClasses.G_RANGER.label,
  AssetCharacterClasses.G_GUNNER.label,
  AssetCharacterClasses.G_FORCE.label,
  AssetCharacterClasses.G_TECHTER.label,
  AssetCharacterClasses.G_BRAVER.label,
  AssetCharacterClasses.G_BOUNCER.label,
  AssetCharacterClasses.G_WAKER.label,
];

type SelectClassProps = {
  // Dynamics props
  currentClass: string;

  // Static props
  startIcon: ReactNode;

  onCurrentClassChange: (next_class: string) => void;
};
export const SelectClass: FC<SelectClassProps> = memo(
  (props) => {
    const { startIcon, currentClass, onCurrentClassChange } = props;

    const handlePotentialLevelChange = (
      event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ): void => {
      const value_input: string = event.target.value;
      if (!CLASS_OPTIONS.includes(value_input)) {
        return;
      }
      onCurrentClassChange(value_input);
    };

    return (
      <TextField
        select
        fullWidth
        value={currentClass}
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
    return prev.currentClass === next.currentClass;
  },
);
