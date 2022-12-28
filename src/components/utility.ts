export const getActiveAugmentCount = (level: number): number => {
  if (level >= 50) {
    return 5;
  }

  if (level >= 40) {
    return 4;
  }

  if (level >= 20) {
    return 3;
  }
  return 2;
};
