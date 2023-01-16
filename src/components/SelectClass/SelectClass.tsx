import { ChangeEvent, FC, memo, useMemo } from "react";
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
  label: string;

  onCurrentClassChange: (next_class: string) => void;
};
export const SelectClass: FC<SelectClassProps> = memo(
  (props) => {
    const { label, currentClass, onCurrentClassChange } = props;

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
        variant="filled"
        label={label}
        value={currentClass}
        onChange={handlePotentialLevelChange}
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
