import {
  FC,
  ChangeEvent,
  memo,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import { InputAdornment, TextField, Typography } from "@mui/material";

import { clampValue } from "./helper";

type FieldNumberProps = {
  // Dynamic props
  value: number;
  disabled: boolean;
  valueMax: number;
  valueMin: number;

  //  Static props
  startAdornment: ReactNode;

  onValueChange: (next_value: number) => void;
};
export const FieldNumber: FC<FieldNumberProps> = memo(
  (props) => {
    const {
      startAdornment,
      disabled,
      value,
      valueMax,
      valueMin,
      onValueChange,
    } = props;

    const handleLevelChange = useCallback(
      (
        event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
      ): void => {
        const value_input: string = event.target.value;
        const value_filtered: string = value_input
          .replace(/[^0-9]+/, "")
          .trim();
        const value_parsed: number = Number.parseInt(value_filtered);
        if (Number.isNaN(value_parsed)) {
          onValueChange(valueMin);
          return;
        }
        const value_clamped: number = clampValue(
          value_parsed,
          valueMin,
          valueMax,
        );
        onValueChange(value_clamped);
      },
      [valueMax, valueMin],
    );

    const value_string = useMemo((): string => {
      if (Number.isNaN(value)) {
        return valueMin.toString();
      }
      return value.toString();
    }, [value]);

    return (
      <TextField
        fullWidth
        inputMode="numeric"
        disabled={disabled}
        value={value_string}
        onChange={handleLevelChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {startAdornment}
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
      prev.value === next.value &&
      prev.valueMax === next.valueMax &&
      prev.valueMin === next.valueMin
    );
  },
);
