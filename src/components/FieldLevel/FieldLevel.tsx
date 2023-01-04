import { FC, ChangeEvent, memo } from "react";
import { TextField } from "@mui/material";

import { clampValue } from "./helper";

type FieldLevelProps = {
  disabled: boolean;
  valueMin: number | null;
  valueMax: number | null;
  value: number;
  onChange: (value: number) => void;
};
export const FieldLevel: FC<FieldLevelProps> = memo(
  (props) => {
    const handleChange = (
      event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
      const value_input: string = event.target.value;

      if (Number.isNaN(value_input)) {
        return;
      }

      const value_clamped: number = clampValue(
        Number.parseInt(value_input),
        props.valueMin,
        props.valueMax,
      );

      props.onChange(value_clamped);
    };

    return (
      <TextField
        disabled={props.disabled}
        value={props.value.toString()}
        onChange={handleChange}
        fullWidth
        inputMode="numeric"
        placeholder="Enhancement"
      />
    );
  },
  (prev, next) => {
    return (
      prev.disabled === next.disabled && prev.value === next.value
    );
  },
);
