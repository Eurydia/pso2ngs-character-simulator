import { Augment, GroupEnum as AugmentGroup } from "../../assets";

export const parseValue = (
  value: number,
  baseline: number,
  mode: "add" | "percent",
): string => {
  const sign = value > baseline ? "+" : "";

  let parsed_value = value - baseline;
  if (mode === "add") {
    return `${sign}${parsed_value}`;
  } else {
    return `${sign}${(parsed_value * 100).toPrecision(3)}%`;
  }
};
