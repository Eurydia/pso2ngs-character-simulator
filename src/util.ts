import {
  StatEnum,
  StatAdd,
  StatSpecial,
  StatEnumString,
} from "./assets";

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

export const formatStat = (stat: StatEnum, value: number): string => {
  let res: string = "";

  if (StatAdd.has(stat)) {
    res = parseValue(value, 0, "add");
  } else {
    res = parseValue(value, 1, "percent");
  }

  if (StatSpecial.has(stat)) {
    res = parseValue(value, 0, "percent");
  }

  return res;
};

export const formatStatObject = (
  stats: Partial<{ [K in StatEnum]: number }>,
): [string, string][] => {
  const formatted: [string, string][] = [];

  for (const stat of Object.keys(stats)) {
    const value: number | undefined = stats[stat as StatEnum];

    if (value === undefined) {
      continue;
    }

    const f_label = StatEnumString[stat as StatEnum];
    const f_value = formatStat(stat as StatEnum, value);
    formatted.push([f_label, f_value]);
  }

  return formatted;
};
