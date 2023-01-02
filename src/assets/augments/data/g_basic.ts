import { ActionContext } from "../../context";
import { StatEnum, StatObject, statObject } from "../../stat";
import { augment, Augment } from "../augment";
import { GroupEnumAugment } from "../groupEnum";

export const G_BASIC: Augment[] = [];

const makeAugmentBasic = (
  name: string,
  level: number,
  stat: Partial<{ [K in StatEnum]: number }>,
) => {
  return augment(
    name,
    level,
    GroupEnumAugment.BASIC,
    [GroupEnumAugment.FUSED],
    (_) => {
      return statObject(stat);
    },
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

    const stamina_augment: Augment = makeAugmentBasic(
      "Stamina",
      level,
      {
        [StatEnum.CORE_BP]: bp,
        [StatEnum.CORE_HP]: hp,
      },
    );

    G_BASIC.push(stamina_augment);
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

    const spirit_augment: Augment = makeAugmentBasic(
      "Spirit",
      level,
      {
        [StatEnum.CORE_BP]: bp,
        [StatEnum.CORE_PP]: pp,
      },
    );

    G_BASIC.push(spirit_augment);
  });
})();

// --------------------------------------
// might | precision | technique
(() => {
  const DATA_BP: number[] = [4, 5, 6, 7];
  const DATA_WEAPON_UP: number[] = [1.01, 1.015, 1.02, 1.03];

  const DATA_STAT: [string, StatEnum][] = [
    ["Might", StatEnum.WEAPON_MELEE],
    ["Precision", StatEnum.WEAPON_RANGED],
    ["Technique", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const stat of DATA_STAT) {
    const [name, stat_weapon_up] = stat;

    DATA_BP.forEach((bp, level_index) => {
      const level: number = level_index + 1;
      const weapon_up: number = DATA_WEAPON_UP[level_index];

      const weapon_augment: Augment = makeAugmentBasic(name, level, {
        [StatEnum.CORE_BP]: bp,
        [stat_weapon_up]: weapon_up,
      });

      G_BASIC.push(weapon_augment);
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

    const deftness_augment: Augment = makeAugmentBasic(
      "Deftness",
      level,
      {
        [StatEnum.CORE_BP]: bp,
        [StatEnum.ADV_OFF_FLOOR]: floor_up,
      },
    );

    G_BASIC.push(deftness_augment);
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

    const guard_augment: Augment = makeAugmentBasic("Guard", level, {
      [StatEnum.CORE_BP]: bp,
      [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
    });

    G_BASIC.push(guard_augment);
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

    const _getStatObject = (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_BP]: bp,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_OFF_FLOOR]: floor_up,
        [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
      });
    };

    const mastery_augment = augment(
      "Mastery",
      level_index + 1,
      GroupEnumAugment.BASIC,
      [],
      _getStatObject,
    );

    G_BASIC.push(mastery_augment);
  });
})();
