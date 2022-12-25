// export const calcBonusATK = (
//   level: number,
//   growth_rate: [number, number][],
// ): number => {
//   let bonus = 0;

//   for (let i = growth_rate.length - 1; i >= 0; i--) {
//     const [breakpoint_level, breakpoint_bonus] = growth_rate[i];

//     if (level >= breakpoint_level) {
//       bonus += breakpoint_bonus;

//       if (i < growth_rate.length - 1) {
//         const [breakpoint_next_level, breakpoint_next_bonus] =
//           growth_rate[i + 1];

//         const level_delta = level - breakpoint_level;
//         const breakpoint_level_delta =
//           breakpoint_next_level - breakpoint_level;
//         const breakpoint_bonus_delta =
//           breakpoint_next_bonus - breakpoint_bonus;

//         bonus +=
//           (level_delta / breakpoint_level_delta) *
//           breakpoint_bonus_delta;
//       }
//       break;
//     }
//     if (level < breakpoint_level && i === 0) {
//       bonus = (level / breakpoint_level) * breakpoint_bonus;
//     }
//   }
//   return Math.round(bonus);
// };

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
