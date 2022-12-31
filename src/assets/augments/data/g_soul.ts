import { StatEnum, statObject } from "../../stat";
import { augment, Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

const data: Augment[] = [];
const makeAugmentSoul = (
  name: string,
  level: number,
  stat: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return augment(
    name,
    level,
    GroupEnumAugment.SOUL,
    [GroupEnumAugment.SOUL],
    (_) => statObject(stat),
  );
};

// --------------------------------------
// alt
(() => {
  const data_bp = [5, 7, 9];
  const data_hp = [5, 10, 15];
  const data_damage_res = [1.01, 1.02, 1.025];

  data_bp.forEach((bp, level_index) => {
    data.push(
      makeAugmentSoul("Alts Soul", level_index + 1, {
        [StatEnum.CORE_BP]: bp,
        [StatEnum.CORE_HP]: data_hp[level_index],
        [StatEnum.ADV_DEF_DAMAGE_RES]: data_damage_res[level_index],
      }),
    );
  });
})();

// --------------------------------------
// dolz
(() => {
  const data_bp = [5, 6, 7];
  const data_pp = [5, 5, 5];
  const data_floor = [1.01, 1.02, 1.025];

  data_bp.forEach((bp, level_index) => {
    data.push(
      makeAugmentSoul("Dolz Soul", level_index + 1, {
        [StatEnum.CORE_BP]: bp,
        [StatEnum.CORE_HP]: data_pp[level_index],
        [StatEnum.ADV_OFF_FLOOR]: data_floor[level_index],
      }),
    );
  });
})();

// --------------------------------------
// form | form machini | form sand
(() => {
  const data_bp = [6, 8, 9, 10];
  const data_weapon_up = [1.02, 1.02, 1.02, 1.025];
  const data_damage_res = [1, 1.02, 1.025, 1.025];

  const data_stats: [string, StatEnum][] = [
    ["Forms", StatEnum.WEAPON_MELEE],
    ["Forms Machini", StatEnum.WEAPON_RANGED],
    ["Forms Sand", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    data_bp.forEach((bp, level_index) => {
      const weapon_up_value = data_weapon_up[level_index];

      data.push(
        makeAugmentSoul(`${name} Soul`, level_index + 1, {
          [StatEnum.CORE_BP]: bp,
          [weapon_up]: weapon_up_value,
          [StatEnum.ADV_DEF_DAMAGE_RES]: data_damage_res[level_index],
        }),
      );
    });
  }
})();

// --------------------------------------
// daityl | pettas | nex
(() => {
  const data_bp = [7, 8, 10, 11];
  const data_pp = [5, 5, 5, 5];
  const data_weapon_up = [1.01, 1.02, 1.025, 1.03];

  const data_stats: [string, StatEnum][] = [
    ["Daityl", StatEnum.WEAPON_MELEE],
    ["Pettas", StatEnum.WEAPON_RANGED],
    ["Nex", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    data_bp.forEach((bp, level_index) => {
      const weapon_up_value = data_weapon_up[level_index];

      data.push(
        makeAugmentSoul(`${name} Soul`, level_index + 1, {
          [StatEnum.CORE_BP]: bp,
          [StatEnum.CORE_HP]: data_pp[level_index],
          [weapon_up]: weapon_up_value,
        }),
      );
    });
  }
})();

// --------------------------------------
// dust | ragras | renus
(() => {
  const data_bp = [7, 8, 10, 11];
  const data_hp = [15, 15, 15, 15];
  const data_weapon_up = [1.01, 1.02, 1.025, 1.03];

  const data_stats: [string, StatEnum][] = [
    ["Dust", StatEnum.WEAPON_MELEE],
    ["Ragras", StatEnum.WEAPON_RANGED],
    ["Renus", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    data_bp.forEach((bp, level_index) => {
      const weapon_up_value = data_weapon_up[level_index];

      data.push(
        makeAugmentSoul(`${name} Soul`, level_index, {
          [StatEnum.CORE_BP]: bp,
          [StatEnum.CORE_HP]: data_hp[level_index],
          [weapon_up]: weapon_up_value,
        }),
      );
    });
  }
})();

// --------------------------------------
// eradi
(() => {
  const data_bp = [7, 8, 10, 11];
  const data_hp = [10, 10, 10, 10];
  const data_pp = [4, 4, 4, 4];
  const data_weapon_up = [1.0125, 1.0175, 1.0225, 1.0275];

  data_bp.forEach((bp, level_index) => {
    const weapon_up_value = data_weapon_up[level_index];

    data.push(
      makeAugmentSoul("Eradi Soul", level_index + 1, {
        [StatEnum.CORE_BP]: bp,
        [StatEnum.CORE_HP]: data_hp[level_index],
        [StatEnum.CORE_PP]: data_pp[level_index],
        [StatEnum.WEAPON_MELEE]: weapon_up_value,
        [StatEnum.WEAPON_RANGED]: weapon_up_value,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up_value,
      }),
    );
  });
})();

// --------------------------------------
// frostyl | crocys | ams
(() => {
  const data_bp = [7, 8, 10, 11];
  const data_hp = [10, 10, 10, 10];
  const data_pp = [3, 3, 3, 3];
  const data_weapon_up = [1.01, 1.02, 1.025, 1.03];

  const data_stats: [string, StatEnum][] = [
    ["Frostyl", StatEnum.WEAPON_MELEE],
    ["Crocys", StatEnum.WEAPON_RANGED],
    ["Ams", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    data_bp.forEach((bp, level_index) => {
      const wepaon_up_value = data_weapon_up[level_index];

      data.push(
        makeAugmentSoul(`${name} Soul`, level_index + 1, {
          [StatEnum.CORE_BP]: bp,
          [StatEnum.CORE_HP]: data_hp[level_index],
          [StatEnum.CORE_PP]: data_pp[level_index],
          [weapon_up]: wepaon_up_value,
        }),
      );
    });
  }
})();

// --------------------------------------
// aglai P H X | euphroy P H X | thali P H X
(() => {
  const data_stats: [string, [StatEnum, StatEnum]][] = [
    ["Aglai", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_RANGED]],
    ["Euphroy", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_TECHNIQUE]],
    ["Thali", [StatEnum.WEAPON_RANGED, StatEnum.WEAPON_TECHNIQUE]],
  ];

  const weapon_up_value = 1.025;

  for (const data_stat of data_stats) {
    const [name, [weapon_up_a, weapon_up_b]] = data_stat;

    // p
    data.push(
      makeAugmentSoul(`${name} Soul P`, 0, {
        [StatEnum.CORE_BP]: 11,
        [StatEnum.CORE_PP]: 5,
        [weapon_up_a]: weapon_up_value,
        [weapon_up_b]: weapon_up_value,
      }),
    );

    // h
    data.push(
      makeAugmentSoul(`${name} Soul H`, 0, {
        [StatEnum.CORE_BP]: 11,
        [StatEnum.CORE_HP]: 15,
        [weapon_up_a]: weapon_up_value,
        [weapon_up_b]: weapon_up_value,
      }),
    );

    // x
    data.push(
      makeAugmentSoul(`${name} Soul X`, 0, {
        [StatEnum.CORE_BP]: 11,
        [StatEnum.CORE_HP]: 10,
        [StatEnum.CORE_PP]: 3,
        [weapon_up_a]: weapon_up_value,
        [weapon_up_b]: weapon_up_value,
      }),
    );
  }
})();

// --------------------------------------
// Freid  | Doldor  | Nils
(() => {
  const data_bp = [7, 8, 10, 11];
  const data_hp = [15, 15, 15, 15];
  const data_pp = [5, 5, 5, 5];
  const data_weapon_up = [1.01, 1.02, 1.025, 1.03];
  const data_ail_res = [0.9, 0.9, 0.9, 0.9];

  const data_stats: [string, StatEnum][] = [
    ["Freid", StatEnum.WEAPON_MELEE],
    ["Doldor", StatEnum.WEAPON_RANGED],
    ["Nils", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    data_bp.forEach((bp, level_index) => {
      const wepaon_up_value = data_weapon_up[level_index];
      const ail_res_value = data_ail_res[level_index];

      data.push(
        makeAugmentSoul(`${name} Soul`, level_index + 1, {
          [StatEnum.CORE_BP]: bp,
          [StatEnum.CORE_HP]: data_hp[level_index],
          [StatEnum.CORE_PP]: data_pp[level_index],
          [weapon_up]: wepaon_up_value,
          [StatEnum.AIL_BLIND]: ail_res_value,
          [StatEnum.AIL_BURN]: ail_res_value,
          [StatEnum.AIL_FREEZE]: ail_res_value,
          [StatEnum.AIL_PANIC]: ail_res_value,
          [StatEnum.AIL_PHYDOWN]: ail_res_value,
          [StatEnum.AIL_POISON]: ail_res_value,
          [StatEnum.AIL_SHOCK]: ail_res_value,
        }),
      );
    });
  }
})();

export default data;
