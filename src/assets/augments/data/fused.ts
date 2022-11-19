import { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const data: Augment[] = [];

const makeAugmentFused = (
  name: string,
  level: number,
  stats: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnum.FUSED,
    [GroupEnum.BASIC, GroupEnum.FUSED],
    stats,
  );
};

// --------------------------------------
// fused
(() => {
  const data_stats: [string, StatEnum][] = [
    ["might", StatEnum.WEAPON_MELEE],
    ["precision", StatEnum.WEAPON_RANGED],
    ["technique", StatEnum.WEAPON_TECHNIQUE],
  ];

  const weapon_up_value = 1.02;

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    data.push(
      makeAugmentFused(`sta ${name}`, 0, {
        [StatEnum.CORE_BP]: 8,
        [StatEnum.CORE_HP]: 15,
        [weapon_up]: weapon_up_value,
      }),
    );

    data.push(
      makeAugmentFused(`spi ${name}`, 0, {
        [StatEnum.CORE_BP]: 8,
        [StatEnum.CORE_PP]: 5,
        [weapon_up]: weapon_up_value,
      }),
    );

    data.push(
      makeAugmentFused(`deft ${name}`, 0, {
        [StatEnum.CORE_BP]: 8,
        [weapon_up]: weapon_up_value,
        [StatEnum.ADV_OFF_FLOOR]: 1.02,
      }),
    );

    data.push(
      makeAugmentFused(`gua ${name}`, 0, {
        [StatEnum.CORE_BP]: 8,
        [weapon_up]: weapon_up_value,
        [StatEnum.ADV_DEF_DAMAGE_RES]: 1.02,
      }),
    );
  }
})();

export default data;
