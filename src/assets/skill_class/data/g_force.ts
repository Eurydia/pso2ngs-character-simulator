import { ActionContext } from "../../../contexts/ContextAction";
import { StatEnum, statObject, StatObject } from "../../stat";

import { GroupEnumClass } from "../GroupEnum";
import { characterClass } from "../class_skill";

const SKILL_MAIN: {
  [K: string]: (ctx: ActionContext, level: number) => StatObject;
} = {};

const SKILL_SUB: {
  [K: string]: (ctx: ActionContext, level: number) => StatObject;
} = {};

// ----------------------------------------------
// Main class exclusive skills

// // Photon Flare
// (() => {
//   const SKILL_NAME: string = "Photon Flare";

//   const _getterFunction = (
//     ctx: ActionContext,
//     level: number,
//   ): StatObject => {
//     return statObject({
//       [StatEnum.CORE_PP]: 50,
//       [StatEnum.WEAPON_MELEE]: 1.2,
//       [StatEnum.WEAPON_RANGED]: 1.2,
//       [StatEnum.WEAPON_TECHNIQUE]: 1.2,
//     });
//   };
//   SKILL_MAIN[SKILL_NAME] = _getterFunction;
// })();

// ----------------------------------------------
// Main & Sub class skills

// PP Conversion
(() => {
  const SKILL_NAME: string = "PP Conversion";

  const _getterFunctionMain = (
    ctx: ActionContext,
    level: number,
  ): StatObject => {
    const DATA_PP_RECOVERY: number[] = [6.0, 6.3, 6.6, 6.8, 7.0];
    const DATA_HP_BOOST: number[] = [0.8, 0.8, 0.8, 0.8, 0.8];

    const stat: StatObject = statObject();
    const level_index: number = level - 1;

    if (level_index < 0 || DATA_PP_RECOVERY.length <= level_index) {
      return stat;
    }

    const pp_recovery: number = DATA_PP_RECOVERY[level_index];
    const hp_boost: number = DATA_HP_BOOST[level_index];
    stat.setStat(StatEnum.ADV_PP_ACTIVE_RECOVERY, pp_recovery);
    stat.setStat(StatEnum.ADV_PP_NATURAL_RECOVERY, pp_recovery);
    stat.setStat(StatEnum.ADV_HP_BOOST, hp_boost);
    return stat;
  };
  SKILL_MAIN[SKILL_NAME] = _getterFunctionMain;

  const _getterFunctionSub = (
    ctx: ActionContext,
    level: number,
  ): StatObject => {
    const DATA_PP_RECOVERY: number[] = [4.0, 4.5, 5.0, 5.5, 6.0];
    const DATA_HP_BOOST: number[] = [0.8, 0.8, 0.8, 0.8, 0.8];

    const stat: StatObject = statObject();
    const level_index: number = level - 1;

    if (level_index < 0 || DATA_PP_RECOVERY.length <= level_index) {
      return stat;
    }

    const pp_recovery: number = DATA_PP_RECOVERY[level_index];
    const hp_boost: number = DATA_HP_BOOST[level_index];
    stat.setStat(StatEnum.ADV_PP_ACTIVE_RECOVERY, pp_recovery);
    stat.setStat(StatEnum.ADV_PP_NATURAL_RECOVERY, pp_recovery);
    stat.setStat(StatEnum.ADV_HP_BOOST, hp_boost);
    return stat;
  };
  SKILL_SUB[SKILL_NAME] = _getterFunctionSub;
})();

// PP Recovery Boost
(() => {
  const SKILL_NAME: string = "PP Recovery Boost";

  const _getterFunctionMain = (
    ctx: ActionContext,
    level: number,
  ): StatObject => {
    const DATA_PP_RECOVERY: number[] = [
      1.5, 1.56, 1.62, 1.66, 1.72, 1.78, 1.84, 1.9, 1.95, 2.0, 2.02,
      2.04, 2.06, 2.08, 2.1,
    ];

    const stat: StatObject = statObject();
    const level_index: number = level - 1;
    if (level_index < 0 || DATA_PP_RECOVERY.length <= level_index) {
      return stat;
    }
    const pp_recovery: number = DATA_PP_RECOVERY[level_index];
    stat.setStat(StatEnum.ADV_PP_NATURAL_RECOVERY, pp_recovery);
    return stat;
  };
  SKILL_MAIN[SKILL_NAME] = _getterFunctionMain;

  const _getterFunctionSub = (
    ctx: ActionContext,
    level: number,
  ): StatObject => {
    const DATA_PP_RECOVERY: number[] = [
      1.1, 1.14, 1.18, 1.22, 1.26, 1.3, 1.35, 1.4, 1.45, 1.5, 1.52,
      1.54, 1.56, 1.58, 1.6,
    ];
    const stat: StatObject = statObject();
    const level_index: number = level - 1;
    if (level_index < 0 || DATA_PP_RECOVERY.length <= level_index) {
      return stat;
    }
    const pp_recovery: number = DATA_PP_RECOVERY[level_index];
    stat.setStat(StatEnum.ADV_PP_NATURAL_RECOVERY, pp_recovery);
    return stat;
  };
  SKILL_SUB[SKILL_NAME] = _getterFunctionSub;
})();

export const G_FORCE = characterClass(
  GroupEnumClass.FORCE,
  SKILL_MAIN,
  SKILL_SUB,
);
