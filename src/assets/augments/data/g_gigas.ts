import { StatEnum, statObject } from "../../stat";
import { augment, Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

const data: Augment[] = [];

const makeAugmentGigas = (
  name: string,
  level: number,
  stat: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnumAugment.GIGAS,
    [GroupEnumAugment.GIGAS],
    (_) => statObject(stat),
  );
};

// --------------------------------------
// might | precision | technique
(() => {
  const data_bp = [6, 8, 10, 11];
  const data_hp = [5, 10, 15, 20];
  const data_weapon_up = [1.015, 1.02, 1.025, 1.03];

  const data_stats: [string, StatEnum][] = [
    ["Might", StatEnum.WEAPON_MELEE],
    ["Precision", StatEnum.WEAPON_RANGED],
    ["Technique", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    data_bp.forEach((bp, level_index) => {
      const weapon_up_value = data_weapon_up[level_index];

      data.push(
        makeAugmentGigas(`Gigas ${name}`, level_index + 1, {
          [StatEnum.CORE_BP]: bp,
          [StatEnum.CORE_HP]: data_hp[level_index],
          [weapon_up]: weapon_up_value,
        }),
      );
    });
  }
})();

// --------------------------------------
// aglai | euphroy | thali

(() => {
  const data_stats: [string, [StatEnum, StatEnum]][] = [
    ["Aglai", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_RANGED]],
    ["Euphory", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_TECHNIQUE]],
    ["Thali", [StatEnum.WEAPON_RANGED, StatEnum.WEAPON_TECHNIQUE]],
  ];

  const weapon_up_value = 1.025;

  for (const data_stat of data_stats) {
    const [name, [weapon_up_a, weapon_up_b]] = data_stat;

    data.push(
      makeAugmentGigas(`Gigas ${name}`, 0, {
        [StatEnum.CORE_BP]: 11,
        [StatEnum.CORE_HP]: 15,
        [weapon_up_a]: weapon_up_value,
        [weapon_up_b]: weapon_up_value,
      }),
    );
  }
})();

export default data;
