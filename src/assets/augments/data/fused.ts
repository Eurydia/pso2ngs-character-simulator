import { StatObject } from "../../../types";
import { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const data: Augment[] = [];

const makeAugmentFused = (
  name: string,
  level: number,
  stats: StatObject,
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
    ["Might", StatEnum.WEAPON_MELEE],
    ["Precision", StatEnum.WEAPON_RANGED],
    ["Technique", StatEnum.WEAPON_TECHNIQUE],
  ];

  const weapon_up_value = 1.02;

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    data.push(
      makeAugmentFused(`Sta ${name}`, 0, {
        [StatEnum.CORE_BP]: 8,
        [StatEnum.CORE_HP]: 15,
        [weapon_up]: weapon_up_value,
      }),
    );

    data.push(
      makeAugmentFused(`Spi ${name}`, 0, {
        [StatEnum.CORE_BP]: 8,
        [StatEnum.CORE_PP]: 5,
        [weapon_up]: weapon_up_value,
      }),
    );

    data.push(
      makeAugmentFused(`Deft ${name}`, 0, {
        [StatEnum.CORE_BP]: 8,
        [weapon_up]: weapon_up_value,
        [StatEnum.ADV_OFF_FLOOR]: 1.02,
      }),
    );

    data.push(
      makeAugmentFused(`Gua ${name}`, 0, {
        [StatEnum.CORE_BP]: 8,
        [weapon_up]: weapon_up_value,
        [StatEnum.ADV_DEF_DAMAGE_RES]: 1.02,
      }),
    );
  }
})();

export default data;
