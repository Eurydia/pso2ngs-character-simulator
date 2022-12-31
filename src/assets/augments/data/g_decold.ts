import { StatEnum } from "../../stat";

import { augment, Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

const data: Augment[] = [];

const makeAugmentDecold = (
  name: string,
  level: number,
  stats: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnumAugment.DECOLD,
    [GroupEnumAugment.DECOLD],
    stats,
  );
};

// --------------------------------------
// standard
(() => {
  const data_bp = [1, 3, 5];
  const data_cold_res = [0.05, 0.15, 0.25];

  data_bp.forEach((bp, level_index) => {
    data.push(
      makeAugmentDecold("Decold Standard", level_index + 1, {
        [StatEnum.CORE_BP]: bp,
        [StatEnum.HARSH_COLD]: data_cold_res[level_index],
      }),
    );
  });
})();

// --------------------------------------
// might | precicion | technique
(() => {
  const data_stats: [string, StatEnum][] = [
    ["Might", StatEnum.WEAPON_MELEE],
    ["Precision", StatEnum.WEAPON_RANGED],
    ["Technique", StatEnum.WEAPON_TECHNIQUE],
  ];

  const weapon_up_value = 1.025;

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    data.push(
      makeAugmentDecold(`Decold ${name}`, 0, {
        [StatEnum.CORE_BP]: 9,
        [weapon_up]: weapon_up_value,
        [StatEnum.HARSH_COLD]: 0.25,
      }),
    );
  }
})();

export default data;
