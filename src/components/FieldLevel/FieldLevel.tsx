import { FC, ChangeEvent, memo } from "react";
import { TextField } from "@mui/material";

import { clampValue } from "./helper";

type FieldLevelProps = {
  label: string;
  disabled: boolean;
  levelMin: number;
  levelMax: number;
  level: number;
  onLevelChange: (next_level: number) => void;
};
export const FieldLevel: FC<FieldLevelProps> = memo(
  (props) => {
    const {
      label,
      disabled,
      level,
      levelMax,
      levelMin,
      onLevelChange,
    } = props;

    const handleLevelChange = (
      event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
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

    let value: string = "0";
    if (!Number.isNaN(level)) {
      value = level.toString();
    }

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
      prev.levelMax === next.levelMax &&
      prev.levelMin === next.levelMin
    );
  },
);
