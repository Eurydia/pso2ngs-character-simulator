import {
  KeyboardDoubleArrowDown,
  KeyboardDoubleArrowUp,
  Remove,
} from "@mui/icons-material";
import { blue, pink } from "@mui/material/colors";

export const parseAdd = (value: number): string => {
  return value.toString();
};

export const parsePercent = (value: number): string => {
  const _value = Math.round(value * 10000) / 100;

  const parsed = `${_value}%`;
  return parsed;
};

export const getIcon = (
  value: number,
  baseline: number,
  reversed: boolean = false,
) => {
  const up_icon = <KeyboardDoubleArrowUp htmlColor={blue["400"]} />;
  const down_icon = (
    <KeyboardDoubleArrowDown htmlColor={pink["400"]} />
  );
  let greater_icon = up_icon;
  let lesser_icon = down_icon;

  if (reversed) {
    greater_icon = down_icon;
    lesser_icon = up_icon;
  }

  let icon = <Remove />;

  if (value > baseline) {
    icon = greater_icon;
  } else if (value < baseline) {
    icon = lesser_icon;
  }

  return icon;
};

export const maybeToNumber = (
  value: number | undefined,
  fallback: number,
): number => {
  if (value === undefined) {
    return fallback;
  }

  return value;
};
