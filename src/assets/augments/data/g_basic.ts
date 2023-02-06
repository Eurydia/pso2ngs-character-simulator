import { ActionContext } from "../../ContextAction";
import { StatEnum, StatObject, statObject } from "../../stat";
import { Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const G_BASIC: Augment[] = [];

const makeAugmentBasic = (
  name: string,
  level: number,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
  searchable_terms: string[],
) => {
  return Augment.create(
    name,
    level,
    GroupEnumAugment.BASIC,
    [GroupEnumAugment.FUSED],
    getAwareStatObject,
    searchable_terms,
  );
};

// --------------------------------------
// stamina
(() => {
  const DATA_BP: number[] = [3, 4, 5];
  const DATA_HP: number[] = [5, 10, 15];
  DATA_BP.forEach((bp, level_index) => {
    const level: number = level_index + 1;
    const hp: number = DATA_HP[level_index];
    const basic_augment: Augment = makeAugmentBasic(
      "Stamina",
      level,
      (_: ActionContext): StatObject => {
        return statObject({
          [StatEnum.CORE_BP]: bp,
          [StatEnum.CORE_HP]: hp,
        });
      },
      [StatEnum.CORE_HP],
    );
    G_BASIC.push(basic_augment);
  });
})();

// --------------------------------------
// spirit
(() => {
  const DATA_BP: number[] = [2, 3, 4];
  const DATA_PP: number[] = [3, 4, 5];
  DATA_BP.forEach((bp, level_index) => {
    const level: number = level_index + 1;
    const pp: number = DATA_PP[level_index];
    const basic_augment: Augment = makeAugmentBasic(
      "Spirit",
      level,
      (_: ActionContext): StatObject => {
        return statObject({
          [StatEnum.CORE_BP]: bp,
          [StatEnum.CORE_PP]: pp,
        });
      },
      [StatEnum.CORE_PP],
    );
    G_BASIC.push(basic_augment);
  });
})();

// --------------------------------------
// might | precision | technique
(() => {
  const DATA_BP: number[] = [4, 5, 6, 7];
  const DATA_WEAPON_UP: number[] = [1.01, 1.015, 1.02, 1.03];
  const DATA_ENTRY: [string, StatEnum][] = [
    ["Might", StatEnum.WEAPON_MELEE],
    ["Precision", StatEnum.WEAPON_RANGED],
    ["Technique", StatEnum.WEAPON_TECHNIQUE],
  ];
  for (const entry of DATA_ENTRY) {
    const [name, stat_weapon_up] = entry;
    DATA_BP.forEach((bp, level_index) => {
      const level: number = level_index + 1;
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const basic_augment: Augment = makeAugmentBasic(
        name,
        level,
        (_: ActionContext): StatObject => {
          return statObject({
            [StatEnum.CORE_BP]: bp,
            [stat_weapon_up]: weapon_up,
          });
        },
        [stat_weapon_up],
      );
      G_BASIC.push(basic_augment);
    });
  }
})();

// --------------------------------------
// deftness
(() => {
  const DATA_BP: number[] = [3, 4, 5, 6];
  const DATA_FLOOR_up: number[] = [1.01, 1.015, 1.02, 1.03];
  DATA_BP.forEach((bp, level_index) => {
    const level: number = level_index + 1;
    const floor_up: number = DATA_FLOOR_up[level_index];
    const basic_augment: Augment = makeAugmentBasic(
      "Deftness",
      level,
      (_: ActionContext): StatObject => {
        return statObject({
          [StatEnum.CORE_BP]: bp,
          [StatEnum.ADV_OFF_FLOOR]: floor_up,
        });
      },
      [StatEnum.ADV_OFF_FLOOR],
    );
    G_BASIC.push(basic_augment);
  });
})();

// --------------------------------------
// guard
(() => {
  const DATA_BP = [2, 3, 4, 5];
  const DATA_DAMAGE_RES = [1.01, 1.015, 1.02, 1.03];
  DATA_BP.forEach((bp, level_index) => {
    const level: number = level_index + 1;
    const damage_res: number = DATA_DAMAGE_RES[level_index];
    const basic_augment: Augment = makeAugmentBasic(
      "Guard",
      level,
      (_: ActionContext): StatObject => {
        return statObject({
          [StatEnum.CORE_BP]: bp,
          [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
        });
      },
      [StatEnum.ADV_DEF_DAMAGE_RES],
    );
    G_BASIC.push(basic_augment);
  });
})();

// --------------------------------------
// mastery
(() => {
  const DATA_BP = [6, 8, 10, 12];
  const DATA_WEAPON_UP = [1.01, 1.015, 1.02, 1.025];
  const DATA_FLOOR_UP = [1.01, 1.015, 1.02, 1.025];
  const DATA_DAMAGE_RES = [1.01, 1.015, 1.02, 1.025];
  DATA_BP.forEach((bp, level_index) => {
    const weapon_up = DATA_WEAPON_UP[level_index];
    const floor_up = DATA_FLOOR_UP[level_index];
    const damage_res = DATA_DAMAGE_RES[level_index];
    const basic_augment = Augment.create(
      "Mastery",
      level_index + 1,
      GroupEnumAugment.BASIC,
      [],
      (_: ActionContext): StatObject => {
        return statObject({
          [StatEnum.CORE_BP]: bp,
          [StatEnum.WEAPON_MELEE]: weapon_up,
          [StatEnum.WEAPON_RANGED]: weapon_up,
          [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
          [StatEnum.ADV_OFF_FLOOR]: floor_up,
          [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
        });
      },
      [
        StatEnum.WEAPON_MELEE,
        StatEnum.WEAPON_RANGED,
        StatEnum.WEAPON_TECHNIQUE,
        StatEnum.ADV_OFF_FLOOR,
        StatEnum.ADV_DEF_DAMAGE_RES,
      ],
    );
    G_BASIC.push(basic_augment);
  });
})();
