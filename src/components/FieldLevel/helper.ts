export const clampValue = (
  value: number,
  value_min: number | null = null,
  value_max: number | null = null,
): number => {
  if (value_min !== null && value < value_min) {
    return value_min;
  }

  if (value_max !== null && value > value_max) {
    return value_max;
  }

  return value;
};
