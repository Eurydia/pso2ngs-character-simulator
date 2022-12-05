export const clampValue = (
  value: number,
  value_min: number | undefined = undefined,
  value_max: number | undefined = undefined,
): number => {
  if (value_min !== undefined) {
    if (value < value_min) {
      return value_min;
    }
  }

  if (value_max !== undefined) {
    if (value > value_max) {
      return value_max;
    }
  }

  return value;
};
