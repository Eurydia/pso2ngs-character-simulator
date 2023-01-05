import { StatEnum, StatAdd, StatSpecial } from "./statEnum";

const formatStatAdd = (value: number): string => {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value}`;
};

const formatStatPercent = (value: number): string => {
  const sign = value > 1 ? "+" : "";
  const _value = (value - 1) * 100;
  const value_parsed = _value.toPrecision(3);
  return `${sign}${value_parsed}%`;
};

const formatStatPercentSpecial = (value: number): string => {
  const sign = value > 0 ? "+" : "";
  const _value = value * 100;
  const value_parsed = _value.toPrecision(3);
  return `${sign}${value_parsed}%`;
};

export const formatStat = (stat: StatEnum, value: number): string => {
  if (StatAdd.has(stat)) {
    return formatStatAdd(value);
  }

  if (StatSpecial.has(stat)) {
    return formatStatPercentSpecial(value);
  }

  return formatStatPercent(value);
};
