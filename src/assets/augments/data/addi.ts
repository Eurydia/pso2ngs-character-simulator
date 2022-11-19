import { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const data: Augment[] = [];

const makeAugmentAddi = (
  name: string,
  level: number,
  stats: Partial<{ [K in StatEnum]: number }>,
) => {
  return augment(
    name,
    level,
    GroupEnum.ADDI,
    [GroupEnum.ADDI],
    stats,
  );
};

// --------------------------------------
// double
(() => {
  const data_stats: [string, StatEnum][] = [
    ["mel", StatEnum.WEAPON_MELEE],
    ["ra", StatEnum.WEAPON_RANGED],
    ["tech", StatEnum.WEAPON_TECHNIQUE],
  ];

  const weapon_up_value = 1.025;

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    data.push(
      makeAugmentAddi(`addi deft${name}`, 0, {
        [StatEnum.CORE_BP]: 10,
      }),
    );

    data.push(
      makeAugmentAddi(`addi gua${name}`, 0, {
        [StatEnum.CORE_BP]: 10,
        [weapon_up]: weapon_up_value,
        [StatEnum.ADV_DEF_DAMAGE_RES]: 1.025,
      }),
    );

    data.push(
      makeAugmentAddi(`addi spi${name}`, 0, {
        [StatEnum.CORE_BP]: 10,
        [StatEnum.CORE_PP]: 6,
        [weapon_up]: weapon_up_value,
      }),
    );

    data.push(
      makeAugmentAddi(`addi sta${name}`, 0, {
        [StatEnum.CORE_BP]: 10,
        [StatEnum.CORE_HP]: 20,
        [weapon_up]: weapon_up_value,
      }),
    );

    data.push(
      makeAugmentAddi(`addi staspi${name}`, 0, {
        [StatEnum.CORE_BP]: 10,
        [StatEnum.CORE_HP]: 10,
        [StatEnum.CORE_PP]: 3,
        [weapon_up]: weapon_up_value,
      }),
    );

    data.push(
      makeAugmentAddi(`addi ward${name}`, 0, {
        [StatEnum.CORE_BP]: 10,
        [weapon_up]: weapon_up_value,
        [StatEnum.AIL_BLIND]: 1.2,
        [StatEnum.AIL_BURN]: 1.2,
        [StatEnum.AIL_FREEZE]: 1.2,
        [StatEnum.AIL_PANIC]: 1.2,
        [StatEnum.AIL_PHYDOWN]: 1.2,
        [StatEnum.AIL_POISON]: 1.2,
        [StatEnum.AIL_SHOCK]: 1.2,
      }),
    );
  }
})();

// --------------------------------------
// triple
(() => {
  const data_stats: [string, [StatEnum, StatEnum]][] = [
    ["melra", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_TECHNIQUE]],
    ["meltech", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_RANGED]],
    ["ratech", [StatEnum.WEAPON_RANGED, StatEnum.WEAPON_TECHNIQUE]],
  ];

  const weapon_up_value = 1.03;

  for (const data_stat of data_stats) {
    const [name, [weapon_up_a, weapon_up_b]] = data_stat;

    data.push(
      makeAugmentAddi(`addi deft${name}`, 0, {
        [StatEnum.CORE_BP]: 0,
        [weapon_up_a]: weapon_up_value,
        [weapon_up_b]: weapon_up_value,
        [StatEnum.ADV_OFF_FLOOR]: 1.0275,
      }),
    );

    data.push(
      makeAugmentAddi(`addi gua${name}`, 0, {
        [StatEnum.CORE_BP]: 0,
        [weapon_up_a]: weapon_up_value,
        [weapon_up_b]: weapon_up_value,
        [StatEnum.ADV_DEF_DAMAGE_RES]: 1.025,
        [StatEnum.ADV_OFF_FLOOR]: 1.01,
      }),
    );

    data.push(
      makeAugmentAddi(`addi spi${name}`, 0, {
        [StatEnum.CORE_BP]: 0,
        [StatEnum.CORE_PP]: 6,
        [weapon_up_a]: weapon_up_value,
        [weapon_up_b]: weapon_up_value,
        [StatEnum.ADV_OFF_FLOOR]: 1.01,
      }),
    );

    data.push(
      makeAugmentAddi(`addi sta${name}`, 0, {
        [StatEnum.CORE_BP]: 0,
        [StatEnum.CORE_HP]: 20,
        [weapon_up_a]: weapon_up_value,
        [weapon_up_b]: weapon_up_value,
        [StatEnum.ADV_OFF_FLOOR]: 1.01,
      }),
    );

    data.push(
      makeAugmentAddi(`addi staspi${name}`, 0, {
        [StatEnum.CORE_BP]: 0,
        [StatEnum.CORE_HP]: 10,
        [StatEnum.CORE_PP]: 3,
        [weapon_up_a]: weapon_up_value,
        [weapon_up_b]: weapon_up_value,
        [StatEnum.ADV_OFF_FLOOR]: 1.01,
      }),
    );

    data.push(
      makeAugmentAddi(`addi ward${name}`, 0, {
        [StatEnum.CORE_BP]: 0,
        [weapon_up_a]: weapon_up_value,
        [weapon_up_b]: weapon_up_value,
        [StatEnum.AIL_BLIND]: 1.2,
        [StatEnum.AIL_BURN]: 1.2,
        [StatEnum.AIL_FREEZE]: 1.2,
        [StatEnum.AIL_PANIC]: 1.2,
        [StatEnum.AIL_PHYDOWN]: 1.2,
        [StatEnum.AIL_POISON]: 1.2,
        [StatEnum.AIL_SHOCK]: 1.2,
        [StatEnum.ADV_OFF_FLOOR]: 1.01,
      }),
    );
  }
})();

export default data;
