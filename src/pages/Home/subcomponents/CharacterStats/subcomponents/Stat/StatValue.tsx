import { Typography } from "@mui/material";
import { FC } from "react";

export const toAdd = (value: number): string => {
  return value.toString();
};

export const toPercent = (value: number): string => {
  const _value = Math.round(value * 10000) / 100;

  const parsed = `${_value}%`;
  return parsed;
};

interface StatValueProps {
  value: number;
  mode: "add" | "percent";
}
const StatValue: FC<StatValueProps> = (props) => {
  const parsed_value =
    props.mode === "add"
      ? toAdd(props.value)
      : toPercent(props.value);

  return <Typography>{parsed_value}</Typography>;
};
export default StatValue;
