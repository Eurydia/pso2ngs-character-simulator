import {
  KeyboardDoubleArrowDown,
  KeyboardDoubleArrowUp,
  Remove,
} from "@mui/icons-material";
import { blue, pink } from "@mui/material/colors";

const UP_ICON = <KeyboardDoubleArrowUp htmlColor={blue["400"]} />;
const DOWN_ICON = <KeyboardDoubleArrowDown htmlColor={pink["400"]} />;

export const getIcon = (
  value: string,
  baseline: number,
  reversed: boolean = false,
) => {
  const _value = parseFloat(value);

  let greater_icon = UP_ICON;
  let lesser_icon = DOWN_ICON;

  if (reversed) {
    greater_icon = DOWN_ICON;
    lesser_icon = UP_ICON;
  }

  if (_value > baseline) {
    return greater_icon;
  }

  if (_value < baseline) {
    return lesser_icon;
  }

  return <Remove />;
};
