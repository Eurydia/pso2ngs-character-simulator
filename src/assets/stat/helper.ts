import StatEnum, {
  StatAdd,
  StatSpecial,
  StatEnumString,
} from "./statEnum";

const formatAdd = (value: number): string => {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value}`;
};

const formatPercent = (value: number): string => {
  const sign = value > 1 ? "+" : "";
  const _value = (value - 1) * 100;
  const value_parsed = _value.toPrecision(3);
  return `${sign}${value_parsed}%`;
};

const formatPercentSpecial = (value: number): string => {
  const sign = value > 0 ? "+" : "";
  const value_parsed = value.toPrecision(3);
  return `${sign}${value_parsed}%`;
};

export const formatStat = (stat: StatEnum, value: number): string => {
  if (StatAdd.has(stat)) {
    return formatAdd(value);
  }

  if (StatSpecial.has(stat)) {
    return formatPercentSpecial(value);
  }

  return formatPercent(value);
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
