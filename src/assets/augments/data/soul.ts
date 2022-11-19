import { StatEnum } from "../../stat";
import augment, { Augment } from "../augment";
import GroupEnum from "../groupEnum";

const data: Augment[] = [];
const makeAugmentSoul = (
  name: string,
  level: number,
  stats: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnum.SOUL,
    [GroupEnum.SOUL],
    stats,
  );
};

// --------------------------------------
// alt
(() => {
  const data_bp = [5, 7, 9];
  const data_hp = [5, 10, 15];
  const data_damage_res = [1.01, 1.02, 1.025];

  for (
    let level_index = 0;
    level_index < data_bp.length;
    level_index++
  ) {
    data.push(
      makeAugmentSoul("alts soul", level_index + 1, {
        [StatEnum.CORE_BP]: data_bp[level_index],
        [StatEnum.CORE_HP]: data_hp[level_index],
        [StatEnum.ADV_DEF_DAMAGE_RES]: data_damage_res[level_index],
      }),
    );
  }
})();

// --------------------------------------
// dolz
(() => {
  const data_bp = [5, 6, 7];
  const data_pp = [5, 5, 5];
  const data_floor = [1.01, 1.02, 1.025];

  for (
    let level_index = 0;
    level_index < data_bp.length;
    level_index++
  ) {
    data.push(
      makeAugmentSoul("dolz soul", level_index + 1, {
        [StatEnum.CORE_BP]: data_bp[level_index],
        [StatEnum.CORE_HP]: data_pp[level_index],
        [StatEnum.ADV_OFF_FLOOR]: data_floor[level_index],
      }),
    );
  }
})();

// --------------------------------------
// form | form machini | form sand
(() => {
  const data_bp = [6, 8, 9];
  const data_weapon_up = [1.02, 1.02, 1.02];
  const data_damage_res = [1, 1.02, 1.025];

  const data_stats: [string, StatEnum][] = [
    ["forms", StatEnum.WEAPON_MELEE],
    ["forms machini", StatEnum.WEAPON_RANGED],
    ["forms sand", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    for (
      let level_index = 0;
      level_index < data_bp.length;
      level_index++
    ) {
      const weapon_up_value = data_weapon_up[level_index];

      data.push(
        makeAugmentSoul(`${name} soul`, level_index + 1, {
          [StatEnum.CORE_BP]: data_bp[level_index],
          [weapon_up]: weapon_up_value,
          [StatEnum.ADV_DEF_DAMAGE_RES]: data_damage_res[level_index],
        }),
      );
    }
  }
})();

// --------------------------------------
// daityl | pettas | nex
(() => {
  const data_bp = [7, 8, 10, 11];
  const data_pp = [5, 5, 5, 5];
  const data_weapon_up = [1.01, 1.02, 1.025, 1.03];

  const data_stats: [string, StatEnum][] = [
    ["daityl", StatEnum.WEAPON_MELEE],
    ["pettas", StatEnum.WEAPON_RANGED],
    ["nex", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    for (
      let level_index = 0;
      level_index < data_bp.length;
      level_index++
    ) {
      const weapon_up_value = data_weapon_up[level_index];

      data.push(
        makeAugmentSoul(`${name} soul`, level_index + 1, {
          [StatEnum.CORE_BP]: data_bp[level_index],
          [StatEnum.CORE_HP]: data_pp[level_index],
          [weapon_up]: weapon_up_value,
        }),
      );
    }
  }
})();

// --------------------------------------
// dust | ragras | renus
(() => {
  const data_bp = [7, 8, 10, 11];
  const data_hp = [15, 15, 15, 15];
  const data_weapon_up = [1.01, 1.02, 1.025, 1.03];

  const data_stats: [string, StatEnum][] = [
    ["dust", StatEnum.WEAPON_MELEE],
    ["ragras", StatEnum.WEAPON_RANGED],
    ["renus", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    for (
      let level_index = 0;
      level_index < data_bp.length;
      level_index++
    ) {
      const weapon_up_value = data_weapon_up[level_index];

      data.push(
        makeAugmentSoul(`${name} soul`, level_index, {
          [StatEnum.CORE_BP]: data_bp[level_index],
          [StatEnum.CORE_HP]: data_hp[level_index],
          [weapon_up]: data_weapon_up[level_index],
        }),
      );
    }
  }
})();

// --------------------------------------
// eradi
(() => {
  const data_bp = [7, 8, 10, 11];
  const data_hp = [10, 10, 10, 10];
  const data_pp = [4, 4, 4, 4];
  const data_weapon_up = [1.0125, 1.0175, 1.0225, 1.0275];

  for (
    let level_index = 0;
    level_index < data_bp.length;
    level_index++
  ) {
    const weapon_up_value = data_weapon_up[level_index];

    data.push(
      makeAugmentSoul("eradi soul", level_index + 1, {
        [StatEnum.CORE_BP]: data_bp[level_index],
        [StatEnum.CORE_HP]: data_hp[level_index],
        [StatEnum.CORE_PP]: data_pp[level_index],
        [StatEnum.WEAPON_MELEE]: weapon_up_value,
        [StatEnum.WEAPON_RANGED]: weapon_up_value,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up_value,
      }),
    );
  }
})();

// --------------------------------------
// frostyl | crocys | ams
(() => {
  const data_bp = [7, 8, 10, 11];
  const data_hp = [10, 10, 10, 10];
  const data_pp = [3, 3, 3, 3];
  const data_weapon_up = [1.01, 1.02, 1.025, 1.03];

  const data_stats: [string, StatEnum][] = [
    ["frostyl", StatEnum.WEAPON_MELEE],
    ["crocys", StatEnum.WEAPON_RANGED],
    ["ams", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    for (
      let level_index = 0;
      level_index < data_bp.length;
      level_index++
    ) {
      const wepaon_up_value = data_weapon_up[level_index];

      data.push(
        makeAugmentSoul(`${name} soul`, level_index + 1, {
          [StatEnum.CORE_BP]: data_bp[level_index],
          [StatEnum.CORE_HP]: data_hp[level_index],
          [StatEnum.CORE_PP]: data_pp[level_index],
          [weapon_up]: wepaon_up_value,
        }),
      );
    }
  }
})();

// --------------------------------------
// aglai P H X | euphroy P H X | thali P H X

(() => {
  const data_stats: [string, [StatEnum, StatEnum]][] = [
    ["aglai", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_RANGED]],
    ["euphroy", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_TECHNIQUE]],
    ["thali", [StatEnum.WEAPON_RANGED, StatEnum.WEAPON_TECHNIQUE]],
  ];

  const weapon_up_value = 1.025;

  for (const data_stat of data_stats) {
    const [name, [weapon_up_a, weapon_up_b]] = data_stat;

    // p
    data.push(
      makeAugmentSoul(`${name} soul p`, 0, {
        [StatEnum.CORE_BP]: 11,
        [StatEnum.CORE_PP]: 5,
        [weapon_up_a]: weapon_up_value,
        [weapon_up_b]: weapon_up_value,
      }),
    );

    // h
    data.push(
      makeAugmentSoul(`${name} soul h`, 0, {
        [StatEnum.CORE_BP]: 11,
        [StatEnum.CORE_HP]: 15,
        [weapon_up_a]: weapon_up_value,
        [weapon_up_b]: weapon_up_value,
      }),
    );

    // x
    data.push(
      makeAugmentSoul(`${name} soul x`, 0, {
        [StatEnum.CORE_BP]: 11,
        [StatEnum.CORE_HP]: 10,
        [StatEnum.CORE_PP]: 3,
        [weapon_up_a]: weapon_up_value,
        [weapon_up_b]: weapon_up_value,
      }),
    );
  }
})();

export default data;
