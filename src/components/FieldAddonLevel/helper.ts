export const clampValue = (
  value: number,
  value_min: number,
  value_max: number,
): number => {
  if (value < value_min) {
    return value_min;
  }
  if (value > value_max) {
    return value_max;
  }
  return value;
};
