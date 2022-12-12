import {
  KeyboardDoubleArrowDown,
  KeyboardDoubleArrowUp,
  Remove,
} from "@mui/icons-material";
import { blue, pink } from "@mui/material/colors";

const UP_ICON = <KeyboardDoubleArrowUp htmlColor={blue["400"]} />;
const DOWN_ICON = <KeyboardDoubleArrowDown htmlColor={pink["400"]} />;

export const getIcon = (
  value: number,
  baseline: number,
  reversed: boolean = false,
) => {
  let greater_icon = UP_ICON;
  let lesser_icon = DOWN_ICON;

  if (reversed) {
    greater_icon = DOWN_ICON;
    lesser_icon = UP_ICON;
  }

  let icon = <Remove />;

  if (value > baseline) {
    icon = greater_icon;
  } else if (value < baseline) {
    icon = lesser_icon;
  }

  return icon;
};
