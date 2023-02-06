import { ActionContext } from "../../ContextAction";
import { StatEnum, StatObject, statObject } from "../../stat";
import { Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const G_SOUL: Augment[] = [];

const makeAugmentSoul = (
  name: string,
  level: number,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
  searchable_terms: string[],
): Augment => {
  return Augment.create(
    name,
    level,
    GroupEnumAugment.SOUL,
    [GroupEnumAugment.SOUL],
    getAwareStatObject,
    searchable_terms,
  );
};

// --------------------------------------
// alt
(() => {
  const DATA_BP: number[] = [5, 7, 9];
  const DATA_HP: number[] = [5, 10, 15];
  const DATA_DAMAGE_RES: number[] = [1.01, 1.02, 1.025];
  DATA_BP.forEach((bp, level_index) => {
    const level: number = level_index + 1;
    const hp: number = DATA_HP[level_index];
    const damage_res: number = DATA_DAMAGE_RES[level_index];
    const soul_augment: Augment = makeAugmentSoul(
      "Alt Soul",
      level,
      (_: ActionContext): StatObject => {
        return statObject({
          [StatEnum.CORE_BP]: bp,
          [StatEnum.CORE_HP]: hp,
          [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
        });
      },
      [StatEnum.CORE_HP, StatEnum.ADV_DEF_DAMAGE_RES],
    );
    G_SOUL.push(soul_augment);
  });
})();

// --------------------------------------
// dolz
(() => {
  const DATA_BP: number[] = [5, 6, 7];
  const DATA_PP: number[] = [5, 5, 5];
  const DATA_FLOOR_UP: number[] = [1.01, 1.02, 1.025];

  DATA_BP.forEach((bp, level_index) => {
    const level: number = level_index + 1;
    const pp: number = DATA_PP[level_index];
    const floor_up: number = DATA_FLOOR_UP[level_index];

    const soul_augment: Augment = makeAugmentSoul(
      "Dolz Soul",
      level,
      (_: ActionContext): StatObject => {
        return statObject({
          [StatEnum.CORE_BP]: bp,
          [StatEnum.CORE_HP]: pp,
          [StatEnum.ADV_OFF_FLOOR]: floor_up,
        });
      },
      [StatEnum.CORE_PP, StatEnum.ADV_OFF_FLOOR],
    );
    G_SOUL.push(soul_augment);
  });
})();

// --------------------------------------
// form | form machini | form sand
(() => {
  const DATA_BP: number[] = [6, 8, 9, 10];
  const DATA_WEAPON_UP: number[] = [1.02, 1.02, 1.02, 1.025];
  const DATA_DAMAGE_RES: number[] = [1, 1.02, 1.025, 1.025];
  const DATA_ENTRY: [string, StatEnum][] = [
    ["Forms", StatEnum.WEAPON_MELEE],
    ["Forms Machini", StatEnum.WEAPON_RANGED],
    ["Forms Sand", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const entry of DATA_ENTRY) {
    const [name, stat_weapon_up] = entry;
    DATA_BP.forEach((bp, level_index) => {
      const level: number = level_index + 1;
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const damage_res: number = DATA_DAMAGE_RES[level_index];

      const soul_augment: Augment = makeAugmentSoul(
        `${name} Soul`,
        level,
        (_: ActionContext): StatObject => {
          return statObject({
            [StatEnum.CORE_BP]: bp,
            [stat_weapon_up]: weapon_up,
            [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
          });
        },
        [stat_weapon_up, StatEnum.ADV_DEF_DAMAGE_RES],
      );
      G_SOUL.push(soul_augment);
    });
  }
})();

// --------------------------------------
// daityl | pettas | nex
(() => {
  const DATA_BP: number[] = [7, 8, 10, 11];
  const DATA_PP: number[] = [5, 5, 5, 5];
  const DATA_WEAPON_UP: number[] = [1.01, 1.02, 1.025, 1.03];
  const DATA_ENTRY: [string, StatEnum][] = [
    ["Daityl", StatEnum.WEAPON_MELEE],
    ["Pettas", StatEnum.WEAPON_RANGED],
    ["Nex", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const entry of DATA_ENTRY) {
    const [name, stat_weapon_up] = entry;
    DATA_BP.forEach((bp, level_index) => {
      const level: number = level_index + 1;
      const pp: number = DATA_PP[level_index];
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const soul_augment: Augment = makeAugmentSoul(
        `${name} Soul`,
        level,
        (_: ActionContext): StatObject => {
          return statObject({
            [StatEnum.CORE_BP]: bp,
            [StatEnum.CORE_HP]: pp,
            [stat_weapon_up]: weapon_up,
          });
        },
        [StatEnum.CORE_HP, stat_weapon_up],
      );

      G_SOUL.push(soul_augment);
    });
  }
})();

// --------------------------------------
// dust | ragras | renus
(() => {
  const DATA_BP: number[] = [7, 8, 10, 11];
  const DATA_HP: number[] = [15, 15, 15, 15];
  const DATA_WEAPON_UP: number[] = [1.01, 1.02, 1.025, 1.03];
  const DATA_ENTRY: [string, StatEnum][] = [
    ["Dust", StatEnum.WEAPON_MELEE],
    ["Ragras", StatEnum.WEAPON_RANGED],
    ["Renus", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const entry of DATA_ENTRY) {
    const [name, stat_weapon_up] = entry;
    DATA_BP.forEach((bp, level_index) => {
      const level: number = level_index + 1;
      const hp: number = DATA_HP[level_index];
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const soul_augment: Augment = makeAugmentSoul(
        `${name} Soul`,
        level,
        (_: ActionContext): StatObject => {
          return statObject({
            [StatEnum.CORE_BP]: bp,
            [StatEnum.CORE_HP]: hp,
            [stat_weapon_up]: weapon_up,
          });
        },
        [StatEnum.CORE_HP, stat_weapon_up],
      );
      G_SOUL.push(soul_augment);
    });
  }
})();

// --------------------------------------
// eradi
(() => {
  const DATA_BP: number[] = [7, 8, 10, 11];
  const DATA_HP: number[] = [10, 10, 10, 10];
  const DATA_PP: number[] = [4, 4, 4, 4];
  const DATA_WEAPON_UP: number[] = [1.0125, 1.0175, 1.0225, 1.0275];

  DATA_BP.forEach((bp, level_index) => {
    const level: number = level_index + 1;
    const hp: number = DATA_HP[level_index];
    const pp: number = DATA_PP[level_index];
    const weapon_up: number = DATA_WEAPON_UP[level_index];

    const soul_augment: Augment = makeAugmentSoul(
      "Eradi Soul",
      level,
      (_: ActionContext): StatObject => {
        return statObject({
          [StatEnum.CORE_BP]: bp,
          [StatEnum.CORE_HP]: hp,
          [StatEnum.CORE_PP]: pp,
          [StatEnum.WEAPON_MELEE]: weapon_up,
          [StatEnum.WEAPON_RANGED]: weapon_up,
          [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        });
      },
      [
        StatEnum.CORE_HP,
        StatEnum.CORE_PP,
        StatEnum.WEAPON_MELEE,
        StatEnum.WEAPON_RANGED,
        StatEnum.WEAPON_TECHNIQUE,
      ],
    );
    G_SOUL.push(soul_augment);
  });
})();

// --------------------------------------
// frostyl | crocys | ams
(() => {
  const DATA_BP: number[] = [7, 8, 10, 11];
  const DATA_HP: number[] = [10, 10, 10, 10];
  const DATA_PP: number[] = [3, 3, 3, 3];
  const DATA_WEAPON_UP: number[] = [1.01, 1.02, 1.025, 1.03];
  const DATA_ENTRY: [string, StatEnum][] = [
    ["Frostyl", StatEnum.WEAPON_MELEE],
    ["Crocys", StatEnum.WEAPON_RANGED],
    ["Ams", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const entry of DATA_ENTRY) {
    const [name, stat_weapon_up] = entry;
    DATA_BP.forEach((bp, level_index) => {
      const level: number = level_index + 1;
      const hp: number = DATA_HP[level_index];
      const pp: number = DATA_PP[level_index];
      const wepaon_up = DATA_WEAPON_UP[level_index];

      const soul_augment: Augment = makeAugmentSoul(
        `${name} Soul`,
        level,
        (_: ActionContext): StatObject => {
          return statObject({
            [StatEnum.CORE_BP]: bp,
            [StatEnum.CORE_HP]: hp,
            [StatEnum.CORE_PP]: pp,
            [stat_weapon_up]: wepaon_up,
          });
        },
        [StatEnum.CORE_HP, StatEnum.CORE_PP, stat_weapon_up],
      );
      G_SOUL.push(soul_augment);
    });
  }
})();

// --------------------------------------
// aglai P H X | euphroy P H X | thali P H X
(() => {
  const DATA_ENTRY: [string, [StatEnum, StatEnum]][] = [
    ["Aglai", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_RANGED]],
    ["Euphroy", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_TECHNIQUE]],
    ["Thali", [StatEnum.WEAPON_RANGED, StatEnum.WEAPON_TECHNIQUE]],
  ];

  const WEAPON_UP: number = 1.025;

  for (const entry of DATA_ENTRY) {
    const [name, [stat_weapon_up_a, stat_weapon_up_b]] = entry;

    // p
    G_SOUL.push(
      makeAugmentSoul(
        `${name} Soul P`,
        0,
        (_: ActionContext): StatObject => {
          return statObject({
            [StatEnum.CORE_BP]: 11,
            [StatEnum.CORE_PP]: 5,
            [stat_weapon_up_a]: WEAPON_UP,
            [stat_weapon_up_b]: WEAPON_UP,
          });
        },
        [StatEnum.CORE_PP, stat_weapon_up_a, stat_weapon_up_b],
      ),
    );

    // h
    G_SOUL.push(
      makeAugmentSoul(
        `${name} Soul H`,
        0,
        (_: ActionContext): StatObject => {
          return statObject({
            [StatEnum.CORE_BP]: 11,
            [StatEnum.CORE_HP]: 15,
            [stat_weapon_up_a]: WEAPON_UP,
            [stat_weapon_up_b]: WEAPON_UP,
          });
        },
        [StatEnum.CORE_HP, stat_weapon_up_a, stat_weapon_up_b],
      ),
    );

    // x
    G_SOUL.push(
      makeAugmentSoul(
        `${name} Soul X`,
        0,
        (_: ActionContext): StatObject => {
          return statObject({
            [StatEnum.CORE_BP]: 11,
            [StatEnum.CORE_HP]: 10,
            [StatEnum.CORE_PP]: 3,
            [stat_weapon_up_a]: WEAPON_UP,
            [stat_weapon_up_b]: WEAPON_UP,
          });
        },
        [
          StatEnum.CORE_HP,
          StatEnum.CORE_PP,
          stat_weapon_up_a,
          stat_weapon_up_b,
        ],
      ),
    );
  }
})();

// --------------------------------------
// Freid  | Doldor  | Nils
(() => {
  const DATA_BP: number[] = [7, 8, 10, 11];
  const DATA_HP: number[] = [15, 15, 15, 15];
  const DATA_PP: number[] = [5, 5, 5, 5];
  const DATA_WEAPON_UP: number[] = [1.01, 1.02, 1.025, 1.03];
  const DATA_AIL_RES: number[] = [0.9, 0.9, 0.9, 0.9];
  const DATA_ENTRY: [string, StatEnum][] = [
    ["Freid", StatEnum.WEAPON_MELEE],
    ["Doldor", StatEnum.WEAPON_RANGED],
    ["Nils", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const entry of DATA_ENTRY) {
    const [name, stat_weapon_up] = entry;
    DATA_BP.forEach((bp, level_index) => {
      const level: number = level_index + 1;
      const hp: number = DATA_HP[level_index];
      const pp: number = DATA_PP[level_index];
      const wepaon_up: number = DATA_WEAPON_UP[level_index];
      const ail_res: number = DATA_AIL_RES[level_index];

      const soul_augment: Augment = makeAugmentSoul(
        `${name} Soul`,
        level,
        (_: ActionContext): StatObject => {
          return statObject({
            [StatEnum.CORE_BP]: bp,
            [StatEnum.CORE_HP]: hp,
            [StatEnum.CORE_PP]: pp,
            [stat_weapon_up]: wepaon_up,
            [StatEnum.AIL_BLIND]: ail_res,
            [StatEnum.AIL_BURN]: ail_res,
            [StatEnum.AIL_FREEZE]: ail_res,
            [StatEnum.AIL_PANIC]: ail_res,
            [StatEnum.AIL_DOWN]: ail_res,
            [StatEnum.AIL_POISON]: ail_res,
            [StatEnum.AIL_SHOCK]: ail_res,
          });
        },
        [
          StatEnum.CORE_HP,
          StatEnum.CORE_PP,
          stat_weapon_up,
          StatEnum.AIL_BLIND,
          StatEnum.AIL_BURN,
          StatEnum.AIL_FREEZE,
          StatEnum.AIL_PANIC,
          StatEnum.AIL_DOWN,
          StatEnum.AIL_POISON,
          StatEnum.AIL_SHOCK,
        ],
      );
      G_SOUL.push(soul_augment);
    });
  }
})();

// --------------------------------------
// Aegis
(() => {
  const DATA_BP: number[] = [0, 0, 0, 0];
  const DATA_HP: number[] = [5, 5, 5, 5];
  const DATA_PP: number[] = [2, 2, 2, 2];
  const DATA_WEAPON_UP: number[] = [1.01, 1.02, 1.025, 1.03];

  DATA_BP.forEach((bp, level_index) => {
    const level: number = level_index + 1;
    const hp: number = DATA_HP[level_index];
    const pp: number = DATA_PP[level_index];
    const wepaon_up: number = DATA_WEAPON_UP[level_index];

    const soul_augment: Augment = makeAugmentSoul(
      "Aegis Soul",
      level,
      (_: ActionContext): StatObject => {
        return statObject({
          [StatEnum.CORE_BP]: bp,
          [StatEnum.CORE_HP]: hp,
          [StatEnum.CORE_PP]: pp,
          [StatEnum.WEAPON_MELEE]: wepaon_up,
          [StatEnum.WEAPON_RANGED]: wepaon_up,
          [StatEnum.WEAPON_TECHNIQUE]: wepaon_up,
        });
      },
      [
        StatEnum.CORE_HP,
        StatEnum.CORE_PP,
        StatEnum.WEAPON_MELEE,
        StatEnum.WEAPON_RANGED,
        StatEnum.WEAPON_TECHNIQUE,
      ],
    );
    G_SOUL.push(soul_augment);
  });
})();
