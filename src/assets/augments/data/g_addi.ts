import { StatEnum, statObject } from "../../stat";
import { Augment, augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const G_ADDI: Augment[] = [];

const makeAugmentAddi = (
  name: string,
  level: number,
  stat: Partial<{ [K in StatEnum]: number }>,
) => {
  return augment(
    name,
    level,
    GroupEnumAugment.ADDI,
    [GroupEnumAugment.ADDI],
    (_) => {
      return statObject(stat);
    },
  );
};

// --------------------------------------
// double
(() => {
  const DATA_STAT: [string, StatEnum][] = [
    ["mel", StatEnum.WEAPON_MELEE],
    ["ra", StatEnum.WEAPON_RANGED],
    ["tech", StatEnum.WEAPON_TECHNIQUE],
  ];

  const WEAPON_UP: number = 1.025;

  for (const stat of DATA_STAT) {
    const [suffix, stat_weapon_up] = stat;

    G_ADDI.push(
      makeAugmentAddi(`Addi Deft${suffix}`, 0, {
        [StatEnum.CORE_BP]: 10,
        [stat_weapon_up]: WEAPON_UP,
        [StatEnum.ADV_OFF_FLOOR]: 1.025,
      }),
    );

    G_ADDI.push(
      makeAugmentAddi(`Addi Gua${suffix}`, 0, {
        [StatEnum.CORE_BP]: 10,
        [stat_weapon_up]: WEAPON_UP,
        [StatEnum.ADV_DEF_DAMAGE_RES]: 1.025,
      }),
    );

    G_ADDI.push(
      makeAugmentAddi(`Addi Spi${suffix}`, 0, {
        [StatEnum.CORE_BP]: 10,
        [StatEnum.CORE_PP]: 6,
        [stat_weapon_up]: WEAPON_UP,
      }),
    );

    G_ADDI.push(
      makeAugmentAddi(`Addi Sta${suffix}`, 0, {
        [StatEnum.CORE_BP]: 10,
        [StatEnum.CORE_HP]: 20,
        [stat_weapon_up]: WEAPON_UP,
      }),
    );

    G_ADDI.push(
      makeAugmentAddi(`Addi Staspi${suffix}`, 0, {
        [StatEnum.CORE_BP]: 10,
        [StatEnum.CORE_HP]: 10,
        [StatEnum.CORE_PP]: 3,
        [stat_weapon_up]: WEAPON_UP,
      }),
    );

    G_ADDI.push(
      makeAugmentAddi(`Addi Ward${suffix}`, 0, {
        [StatEnum.CORE_BP]: 10,
        [stat_weapon_up]: WEAPON_UP,
        [StatEnum.AIL_BLIND]: 1.2,
        [StatEnum.AIL_BURN]: 1.2,
        [StatEnum.AIL_FREEZE]: 1.2,
        [StatEnum.AIL_PANIC]: 1.2,
        [StatEnum.AIL_DOWN]: 1.2,
        [StatEnum.AIL_POISON]: 1.2,
        [StatEnum.AIL_SHOCK]: 1.2,
      }),
    );
  }
})();

// --------------------------------------
// triple
(() => {
  const DATA_STAT: [string, [StatEnum, StatEnum]][] = [
    ["melra", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_TECHNIQUE]],
    ["meltech", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_RANGED]],
    ["ratech", [StatEnum.WEAPON_RANGED, StatEnum.WEAPON_TECHNIQUE]],
  ];

  const WEAPON_UP = 1.03;

  for (const stat of DATA_STAT) {
    const [suffix, [stat_weapon_up_a, stat_weapon_up_b]] = stat;

    G_ADDI.push(
      makeAugmentAddi(`Addi Deft${suffix}`, 0, {
        [StatEnum.CORE_BP]: 12,
        [stat_weapon_up_a]: WEAPON_UP,
        [stat_weapon_up_b]: WEAPON_UP,
        [StatEnum.ADV_OFF_FLOOR]: 1.0275,
      }),
    );

    G_ADDI.push(
      makeAugmentAddi(`Addi Gua${suffix}`, 0, {
        [StatEnum.CORE_BP]: 12,
        [stat_weapon_up_a]: WEAPON_UP,
        [stat_weapon_up_b]: WEAPON_UP,
        [StatEnum.ADV_DEF_DAMAGE_RES]: 1.025,
        [StatEnum.ADV_OFF_FLOOR]: 1.01,
      }),
    );

    G_ADDI.push(
      makeAugmentAddi(`Addi Spi${suffix}`, 0, {
        [StatEnum.CORE_BP]: 12,
        [StatEnum.CORE_PP]: 6,
        [stat_weapon_up_a]: WEAPON_UP,
        [stat_weapon_up_b]: WEAPON_UP,
        [StatEnum.ADV_OFF_FLOOR]: 1.01,
      }),
    );

    G_ADDI.push(
      makeAugmentAddi(`Addi Sta${suffix}`, 0, {
        [StatEnum.CORE_BP]: 12,
        [StatEnum.CORE_HP]: 20,
        [stat_weapon_up_a]: WEAPON_UP,
        [stat_weapon_up_b]: WEAPON_UP,
        [StatEnum.ADV_OFF_FLOOR]: 1.01,
      }),
    );

    G_ADDI.push(
      makeAugmentAddi(`Addi Staspi${suffix}`, 0, {
        [StatEnum.CORE_BP]: 12,
        [StatEnum.CORE_HP]: 10,
        [StatEnum.CORE_PP]: 3,
        [stat_weapon_up_a]: WEAPON_UP,
        [stat_weapon_up_b]: WEAPON_UP,
        [StatEnum.ADV_OFF_FLOOR]: 1.01,
      }),
    );

    G_ADDI.push(
      makeAugmentAddi(`Addi Ward${suffix}`, 0, {
        [StatEnum.CORE_BP]: 12,
        [stat_weapon_up_a]: WEAPON_UP,
        [stat_weapon_up_b]: WEAPON_UP,
        [StatEnum.AIL_BLIND]: 1.2,
        [StatEnum.AIL_BURN]: 1.2,
        [StatEnum.AIL_FREEZE]: 1.2,
        [StatEnum.AIL_PANIC]: 1.2,
        [StatEnum.AIL_DOWN]: 1.2,
        [StatEnum.AIL_POISON]: 1.2,
        [StatEnum.AIL_SHOCK]: 1.2,
        [StatEnum.ADV_OFF_FLOOR]: 1.01,
      }),
    );
  }
})();
