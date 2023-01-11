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

// ----------------------------------------------
// Main & Sub class skills

// Attack PP Recovery
(() => {
  const SKILL_NAME: string = "Attack PP Recovery";

  const _getterFunctionMain = (
    ctx: ActionContext,
    level: number,
  ): StatObject => {
    const DATA_PP_RECOVERY: number[] = [
      1.2, 1.22, 1.23, 1.24, 1.25, 1.26, 1.27, 1.28, 1.29, 1.3, 1.31,
      1.32, 1.33, 1.34, 1.35,
    ];

    const stat: StatObject = statObject();
    const level_index: number = level - 1;

    if (level_index < 0 || DATA_PP_RECOVERY.length <= level_index) {
      return stat;
    }

    if (ctx.character === undefined) {
      return stat;
    }

    if (ctx.character.isAttacking) {
      const pp_recovery: number = DATA_PP_RECOVERY[level_index];
      stat.setStat(StatEnum.ADV_PP_ACTIVE_RECOVERY, pp_recovery);
      stat.setStat(StatEnum.ADV_PP_NATURAL_RECOVERY, pp_recovery);
    }

    return stat;
  };
  SKILL_MAIN[SKILL_NAME] = _getterFunctionMain;

  const _getterFunctionSub = (
    ctx: ActionContext,
    level: number,
  ): StatObject => {
    const DATA_PP_RECOVERY: number[] = [
      1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.2, 1.21,
      1.22, 1.23, 1.24, 1.25,
    ];

    const stat: StatObject = statObject();
    const level_index: number = level - 1;

    if (level_index < 0 || DATA_PP_RECOVERY.length <= level_index) {
      return stat;
    }

    if (ctx.character === undefined) {
      return stat;
    }

    if (ctx.character.isAttacking) {
      const pp_recovery: number = DATA_PP_RECOVERY[level_index];
      stat.setStat(StatEnum.ADV_PP_ACTIVE_RECOVERY, pp_recovery);
      stat.setStat(StatEnum.ADV_PP_NATURAL_RECOVERY, pp_recovery);
    }

    return stat;
  };
  SKILL_SUB[SKILL_NAME] = _getterFunctionSub;
})();

// Overwhelm
(() => {
  const SKILL_NAME: string = "Overwhelm";

  const _getterFunctionMain = (
    ctx: ActionContext,
    level: number,
  ): StatObject => {
    const DATA_PP_RECOVERY: number[] = [
      1.2, 1.22, 1.23, 1.24, 1.25, 1.26, 1.27, 1.28, 1.29, 1.3,
    ];

    const stat: StatObject = statObject();
    const level_index: number = level - 1;

    if (level_index < 0 || DATA_PP_RECOVERY.length <= level_index) {
      return stat;
    }

    if (ctx.character === undefined) {
      return stat;
    }

    if (ctx.target === undefined) {
      return stat;
    }

    if (ctx.character.isAttacking && ctx.target.isNonBoss) {
      const pp_recovery: number = DATA_PP_RECOVERY[level_index];
      stat.setStat(StatEnum.ADV_PP_ACTIVE_RECOVERY, pp_recovery);
      stat.setStat(StatEnum.ADV_PP_NATURAL_RECOVERY, pp_recovery);
    }

    return stat;
  };
  SKILL_MAIN[SKILL_NAME] = _getterFunctionMain;

  const _getterFunctionSub = (
    ctx: ActionContext,
    level: number,
  ): StatObject => {
    const DATA_PP_RECOVERY: number[] = [
      1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.2,
    ];

    const stat: StatObject = statObject();
    const level_index: number = level - 1;

    if (level_index < 0 || DATA_PP_RECOVERY.length <= level_index) {
      return stat;
    }

    if (ctx.character === undefined) {
      return stat;
    }

    if (ctx.target === undefined) {
      return stat;
    }

    if (ctx.character.isAttacking && ctx.target.isNonBoss) {
      const pp_recovery: number = DATA_PP_RECOVERY[level_index];
      stat.setStat(StatEnum.ADV_PP_ACTIVE_RECOVERY, pp_recovery);
      stat.setStat(StatEnum.ADV_PP_NATURAL_RECOVERY, pp_recovery);
    }

    return stat;
  };
  SKILL_SUB[SKILL_NAME] = _getterFunctionSub;
})();

export const G_GUNNER = characterClass(
  GroupEnumClass.GUNNER,
  SKILL_MAIN,
  SKILL_SUB,
);
