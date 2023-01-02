import { StatEnum, statObject } from "../../stat";

import { augment, Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const G_DECOLD: Augment[] = [];

const makeAugmentDecold = (
  name: string,
  level: number,
  stat: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnumAugment.DECOLD,
    [GroupEnumAugment.DECOLD],
    (_) => {
      return statObject(stat);
    },
  );
};

// --------------------------------------
// standard
(() => {
  const DATA_BP: number[] = [1, 3, 5];
  const DATA_HARSH_COLD: number[] = [0.05, 0.15, 0.25];

  DATA_BP.forEach((bp, level_index) => {
    const level: number = level_index + 1;
    const harsh_cold: number = DATA_HARSH_COLD[level_index];

    const decold_augment: Augment = makeAugmentDecold(
      "Decold Standard",
      level,
      {
        [StatEnum.CORE_BP]: bp,
        [StatEnum.HARSH_COLD]: harsh_cold,
      },
    );

    G_DECOLD.push(decold_augment);
  });
})();

// --------------------------------------
// might | precicion | technique
(() => {
  const DATA_ENTRY: [string, StatEnum][] = [
    ["Might", StatEnum.WEAPON_MELEE],
    ["Precision", StatEnum.WEAPON_RANGED],
    ["Technique", StatEnum.WEAPON_TECHNIQUE],
  ];

  const WEAPON_UP: number = 1.025;
  const HARSH_COLD: number = 0.25;

  for (const entry of DATA_ENTRY) {
    const [name, stat_weapon_up] = entry;

    const decold_augment: Augment = makeAugmentDecold(
      `Decold ${name}`,
      0,
      {
        [StatEnum.CORE_BP]: 9,
        [stat_weapon_up]: WEAPON_UP,
        [StatEnum.HARSH_COLD]: HARSH_COLD,
      },
    );

    G_DECOLD.push(decold_augment);
  }
})();
