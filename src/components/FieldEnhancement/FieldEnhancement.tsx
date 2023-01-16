import { FC, ChangeEvent, memo, useCallback, useMemo } from "react";
import { InputAdornment, TextField, Typography } from "@mui/material";

import { clampValue } from "./helper";
import { AddRounded } from "@mui/icons-material";

type FieldEnhancementProps = {
  // Dynamic props
  level: number;
  disabled: boolean;
  levelMax: number;

  //  Static props
  label: string;
  levelMin: number;

  onEnhancementChange: (next_enhancement: number) => void;
};
export const FieldEnhancement: FC<FieldEnhancementProps> = memo(
  (props) => {
    const {
      disabled,
      label,
      level,
      levelMax,
      levelMin,
      onEnhancementChange,
    } = props;

    const handleLevelChange = useCallback(
      (
        event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
      ): void => {
        const value_input: string = event.target.value;
        const value_parsed: number = Number.parseInt(value_input);
        if (Number.isNaN(value_parsed)) {
          onEnhancementChange(0);
          return;
        }
        const value_clamped: number = clampValue(
          value_parsed,
          levelMin,
          levelMax,
        );
        onEnhancementChange(value_clamped);
      },
      [levelMax, levelMin],
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
        disabled={disabled}
        value={value}
        onChange={handleLevelChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Typography>+</Typography>
            </InputAdornment>
          ),
        }}
        sx={{
          textDecorationLine: props.disabled
            ? "line-through"
            : "none",
        }}
      />
    );
  },
  (prev, next) => {
    return (
      prev.disabled === next.disabled &&
      prev.level === next.level &&
      prev.levelMax === next.levelMax
    );
  },
);
