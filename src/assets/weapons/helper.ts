export const calcBonusATK = (
  level: number,
  growth_rate: [number, number][],
): number => {
  let bonus = 0;

  for (let i = growth_rate.length - 1; i >= 0; i--) {
    const [breakpoint_level, breakpoint_bonus] = growth_rate[i];

    if (level >= breakpoint_level) {
      bonus += breakpoint_bonus;

      if (i < growth_rate.length - 1) {
        const [breakpoint_next_level, breakpoint_next_bonus] =
          growth_rate[i + 1];

        const level_delta = level - breakpoint_level;
        const breakpoint_level_delta =
          breakpoint_next_level - breakpoint_level;
        const breakpoint_bonus_delta =
          breakpoint_next_bonus - breakpoint_bonus;

        bonus +=
          (level_delta / breakpoint_level_delta) *
          breakpoint_bonus_delta;
      }
      break;
    }
    if (level < breakpoint_level && i === 0) {
      bonus = (level / breakpoint_level) * breakpoint_bonus;
    }
  }
  return Math.round(bonus);
};
