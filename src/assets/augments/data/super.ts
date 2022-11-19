import { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const data: Augment[] = [];

const makeAugmentSuper = (
  name: string,
  level: number,
  stats: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnum.SUPER,
    [GroupEnum.SUPER],
    stats,
  );
};

// --------------------------------------
// might | precision | technique
(() => {
  const data_stats: [string, StatEnum][] = [
    ["might", StatEnum.WEAPON_MELEE],
    ["precision", StatEnum.WEAPON_RANGED],
    ["technique", StatEnum.WEAPON_TECHNIQUE],
  ];

  const weapon_up_value = 1.0225;

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    data.push(
      makeAugmentSuper(`super ${name}`, 1, {
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

    data.push(
      makeAugmentSuper(`super sta${name}`, 1, {
        [StatEnum.CORE_BP]: 8,
        [StatEnum.CORE_HP]: 15,
        [weapon_up]: weapon_up_value,
      }),
    );

    data.push(
      makeAugmentSuper(`super spi${name}`, 1, {
        [StatEnum.CORE_BP]: 8,
        [StatEnum.CORE_PP]: 5,
        [weapon_up]: weapon_up_value,
      }),
    );
  }
})();

export default data;
