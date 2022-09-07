import {
  Delete,
  KeyboardDoubleArrowDown,
  KeyboardDoubleArrowUp,
  Remove,
} from "@mui/icons-material";
import { blue, lightGreen, pink } from "@mui/material/colors";

export const toAdd = (value: number): string => {
  return value.toString();
};

export const toPercent = (value: number): string => {
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
