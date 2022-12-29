import StatEnum, { StatAdd, StatSpecial } from "./statEnum";

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
  const _value = value * 100;
  const value_parsed = _value.toPrecision(3);
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
