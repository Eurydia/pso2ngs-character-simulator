export const formatStatAdd = (value: number): string => {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value}`;
};

export const formatStatPercent = (value: number): string => {
  const sign = value > 1 ? "+" : "";
  const _value = (value - 1) * 100;
  const value_parsed = _value.toPrecision(3);
  return `${sign}${value_parsed}%`;
};

export const formatStatPercentSpecial = (value: number): string => {
  const sign = value > 0 ? "+" : "";
  const _value = value * 100;
  const value_parsed = _value.toPrecision(3);
  return `${sign}${value_parsed}%`;
};
