import { StatEnum, statObject } from "../../stat";
import { augment, Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const g_super: Augment[] = [];

const makeAugmentSuper = (
  name: string,
  level: number,
  stat: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnumAugment.SUPER,
    [GroupEnumAugment.SUPER],
    (_) => statObject(stat),
  );
};

// --------------------------------------
// might | precision | technique
(() => {
  const data_stats: [string, StatEnum][] = [
    ["Might", StatEnum.WEAPON_MELEE],
    ["Precision", StatEnum.WEAPON_RANGED],
    ["Technique", StatEnum.WEAPON_TECHNIQUE],
  ];

  const weapon_up_value = 1.0225;

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    g_super.push(
      makeAugmentSuper(`Super ${name}`, 1, {
        [StatEnum.CORE_BP]: 8,
        [weapon_up]: weapon_up_value,
      }),
    );
  }
})();

// --------------------------------------
// sta | spi
(() => {
  const data_stats: [string, StatEnum][] = [
    ["mel", StatEnum.WEAPON_MELEE],
    ["ra", StatEnum.WEAPON_RANGED],
    ["tech", StatEnum.WEAPON_TECHNIQUE],
  ];

  const weapon_up_value = 1.02;

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    g_super.push(
      makeAugmentSuper(`Super Sta${name}`, 1, {
        [StatEnum.CORE_BP]: 8,
        [StatEnum.CORE_HP]: 15,
        [weapon_up]: weapon_up_value,
      }),
    );

    g_super.push(
      makeAugmentSuper(`Super Spi${name}`, 1, {
        [StatEnum.CORE_BP]: 8,
        [StatEnum.CORE_PP]: 5,
        [weapon_up]: weapon_up_value,
      }),
    );
  }
})();
