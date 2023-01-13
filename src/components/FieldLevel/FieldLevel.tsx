import { FC, ChangeEvent, memo, useCallback, useMemo } from "react";
import { TextField } from "@mui/material";

import { clampValue } from "./helper";

type FieldLevelProps = {
  // Dynamic props
  level: number;
  disabled: boolean;
  levelMax: number;

  //  Static props
  label: string;
  levelMin: number;

  onLevelChange: (next_level: number) => void;
};
export const FieldLevel: FC<FieldLevelProps> = memo(
  (props) => {
    const {
      disabled,
      label,
      level,
      levelMax,
      levelMin,
      onLevelChange,
    } = props;

    const handleLevelChange = (
      event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ): void => {
      const value_input: string = event.target.value;
      const value_parsed: number = Number.parseInt(value_input);
      if (Number.isNaN(value_parsed)) {
        onLevelChange(0);
        return;
      }
      const value_clamped: number = clampValue(
        value_parsed,
        levelMin,
        levelMax,
      );
      onLevelChange(value_clamped);
    };

    const value = useMemo(() => {
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
