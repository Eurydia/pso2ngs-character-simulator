export const calcBonusAtk = (
  level: number,
  growth_rate: [number, number][],
): number => {
  let fallback: number = 0;

  for (const entry of growth_rate) {
    const [gr_level, gr_bonus] = entry;

    if (level > gr_level) {
      fallback = gr_bonus;
      continue;
    }

    // exact match
    if (level === gr_level) {
      return gr_bonus;
    }

    if (level < gr_level) {
      return Math.round((level / gr_level) * gr_bonus);
    }
  }

  return fallback;
};
