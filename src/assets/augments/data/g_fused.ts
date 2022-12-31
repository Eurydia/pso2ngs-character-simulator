import { StatEnum, statObject } from "../../stat";
import { augment, Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const g_fused: Augment[] = [];

const makeAugmentFused = (
  name: string,
  level: number,
  stat: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnumAugment.FUSED,
    [GroupEnumAugment.BASIC, GroupEnumAugment.FUSED],
    (_) => statObject(stat),
  );
};

// --------------------------------------
// fused
(() => {
  const data_stats: [string, StatEnum][] = [
    ["Might", StatEnum.WEAPON_MELEE],
    ["Precision", StatEnum.WEAPON_RANGED],
    ["Technique", StatEnum.WEAPON_TECHNIQUE],
  ];

  const weapon_up_value = 1.02;

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    g_fused.push(
      makeAugmentFused(`Sta ${name}`, 0, {
        [StatEnum.CORE_BP]: 8,
        [StatEnum.CORE_HP]: 15,
        [weapon_up]: weapon_up_value,
      }),
    );

    g_fused.push(
      makeAugmentFused(`Spi ${name}`, 0, {
        [StatEnum.CORE_BP]: 8,
        [StatEnum.CORE_PP]: 5,
        [weapon_up]: weapon_up_value,
      }),
    );

    g_fused.push(
      makeAugmentFused(`Deft ${name}`, 0, {
        [StatEnum.CORE_BP]: 8,
        [weapon_up]: weapon_up_value,
        [StatEnum.ADV_OFF_FLOOR]: 1.02,
      }),
    );

    g_fused.push(
      makeAugmentFused(`Gua ${name}`, 0, {
        [StatEnum.CORE_BP]: 8,
        [weapon_up]: weapon_up_value,
        [StatEnum.ADV_DEF_DAMAGE_RES]: 1.02,
      }),
    );
  }
})();
