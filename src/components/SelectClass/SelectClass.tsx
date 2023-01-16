import { ChangeEvent, FC, memo, ReactNode, useMemo } from "react";
import {
  Box,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { CharacterClass } from "../../assets";

const CLASS_OPTIONS: string[] = [
  "Hunter",
  "Fighter",
  "Ranger",
  "Gunner",
  "Force",
  "Techter",
  "Braver",
  "Bouncer",
  "Waker",
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
