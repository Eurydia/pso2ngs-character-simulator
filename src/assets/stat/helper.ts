import StatEnum, {
  StatAdd,
  StatSpecial,
  StatEnumString,
} from "./statEnum";

const format = (
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

const formatStat = (stat: StatEnum, value: number): string => {
  let res: string = "";

  if (StatAdd.has(stat)) {
    res = format(value, 0, "add");
  } else {
    res = format(value, 1, "percent");
  }

  if (StatSpecial.has(stat)) {
    res = format(value, 0, "percent");
  }

  return res;
};

export const formatStatObject = (
  object: Partial<{ [K in StatEnum]: number }>,
): { label: string; value: string }[] => {
  const formatted: { label: string; value: string }[] = [];

  for (const stat of Object.keys(object)) {
    const value_unformatted: number | undefined =
      object[stat as StatEnum];

    if (value_unformatted === undefined) {
      continue;
    }

    const label = StatEnumString[stat as StatEnum];
    const value = formatStat(stat as StatEnum, value_unformatted);
    formatted.push({ label, value });
  }

  return formatted;
};
