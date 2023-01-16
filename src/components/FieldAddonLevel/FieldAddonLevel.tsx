import { FC, ChangeEvent, memo, useCallback, useMemo } from "react";
import { InputAdornment, TextField, Typography } from "@mui/material";

import { clampValue } from "./helper";
import { AddonSkill } from "../../assets";

type FieldAddonLevelProps = {
  // Dynamic props
  level: number;

  //  Static props
  label: string;

  onAddonLevelChange: (next_level: number) => void;
};
export const FieldAddonLevel: FC<FieldAddonLevelProps> = memo(
  (props) => {
    const { label, level, onAddonLevelChange } = props;

    const handleLevelChange = useCallback(
      (
        event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
      ): void => {
        const value_input: string = event.target.value;
        const value_parsed: number = Number.parseInt(value_input);
        if (Number.isNaN(value_parsed)) {
          onAddonLevelChange(0);
          return;
        }

        let value_clamped: number = value_parsed;
        if (value_clamped < 0) {
          value_clamped = 0;
        }
        if (value_clamped > AddonSkill.LEVEL_MAX) {
          value_clamped = AddonSkill.LEVEL_MAX;
        }
        onAddonLevelChange(value_clamped);
      },
      [],
    );

    const value = useMemo((): string => {
      if (level === undefined) {
        return "0";
      }
      if (Number.isNaN(level)) {
        return "0";
      }
      return level.toString();
    }, [level]);

    return (
      <TextField
        fullWidth
        inputMode="numeric"
        placeholder={label}
        value={value}
        onChange={handleLevelChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">Lv. </InputAdornment>
          ),
        }}
      />
    );
  },
  (prev, next) => {
    return prev.level === next.level;
  },
);
