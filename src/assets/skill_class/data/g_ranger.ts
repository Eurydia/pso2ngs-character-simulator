import { ActionContext } from "../../ContextAction";
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

// Stealth Strike
(() => {
  const SKILL_NAME: string = "Stealth Strike";

  const _getterFunctionMain = (
    ctx: ActionContext,
    level: number,
  ): StatObject => {
    return statObject({
      [StatEnum.ADV_OFF_THREAT]: 0.2,
    });
  };

  SKILL_MAIN[SKILL_NAME] = _getterFunctionMain;
})();

// Blight Rounds Self Benefit
(() => {
  const SKILL_NAME: string = "Blight Rounds Self Benefit";

  const _getterFunctionMain = (
    ctx: ActionContext,
    level: number,
  ): StatObject => {
    const DATA_WEAPON_UP: number[] = [1.08, 1.12, 1.15];

    const stat: StatObject = statObject();
    const level_index = level - 1;

    if (level_index < 0 || DATA_WEAPON_UP.length <= level_index) {
      return stat;
    }

    if (ctx.character === undefined) {
      return stat;
    }

    if (ctx.character.isAttackingBlight) {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      stat.setStat(StatEnum.WEAPON_MELEE, weapon_up);
      stat.setStat(StatEnum.WEAPON_RANGED, weapon_up);
      stat.setStat(StatEnum.WEAPON_TECHNIQUE, weapon_up);
    }

    return stat;
  };

  SKILL_MAIN[SKILL_NAME] = _getterFunctionMain;
})();

// ----------------------------------------------
// Main & Sub class skills

// Bad Condition Ward
(() => {
  const SKILL_NAME: string = "Bad Condition Ward";

  const _getterFunctionMain = (
    ctx: ActionContext,
    level: number,
  ): StatObject => {
    const DATA_AIL_RES: number[] = [
      1.25, 1.29, 1.33, 1.36, 1.39, 1, 42, 1.46, 1.48, 1.5, 1.52,
      1.54, 1.56, 1.58, 1.6,
    ];

    const stat: StatObject = statObject();
    const level_index: number = level - 1;

    if (level_index < 0 || DATA_AIL_RES.length <= level_index) {
      return stat;
    }

    const ail_res: number = DATA_AIL_RES[level_index];
    stat.setStat(StatEnum.AIL_BLIND, ail_res);
    stat.setStat(StatEnum.AIL_BURN, ail_res);
    stat.setStat(StatEnum.AIL_DOWN, ail_res);
    stat.setStat(StatEnum.AIL_FREEZE, ail_res);
    stat.setStat(StatEnum.AIL_PANIC, ail_res);
    stat.setStat(StatEnum.AIL_POISON, ail_res);
    stat.setStat(StatEnum.AIL_SHOCK, ail_res);

    return stat;
  };
  SKILL_MAIN[SKILL_NAME] = _getterFunctionMain;

  const _getterFunctionSub = (
    ctx: ActionContext,
    level: number,
  ): StatObject => {
    const DATA_AIL_RES: number[] = [
      1.05, 1.07, 1.09, 1.11, 1.13, 1.15, 1.17, 1.19, 1.22, 1.25,
      1.28, 1.31, 1.34, 1.37, 1.4,
    ];

    const stat: StatObject = statObject();
    const level_index: number = level - 1;

    if (level_index < 0 || DATA_AIL_RES.length <= level_index) {
      return stat;
    }

    const ail_res: number = DATA_AIL_RES[level_index];
    stat.setStat(StatEnum.AIL_BLIND, ail_res);
    stat.setStat(StatEnum.AIL_BURN, ail_res);
    stat.setStat(StatEnum.AIL_DOWN, ail_res);
    stat.setStat(StatEnum.AIL_FREEZE, ail_res);
    stat.setStat(StatEnum.AIL_PANIC, ail_res);
    stat.setStat(StatEnum.AIL_POISON, ail_res);
    stat.setStat(StatEnum.AIL_SHOCK, ail_res);

    return stat;
  };
  SKILL_SUB[SKILL_NAME] = _getterFunctionSub;
})();

// Bad Condition Reduction
(() => {
  const SKILL_NAME: string = "Bad Condition Reduction";

  const _getterFunctionMain = (
    ctx: ActionContext,
    level: number,
  ): StatObject => {
    const DATA_AIL_DURATION: number[] = [
      0.5, 0.46, 0.44, 0.42, 0.4, 0.38, 0.36, 0.34, 0.32, 0.3,
    ];

    const stat: StatObject = statObject();
    const level_index: number = level - 1;

    if (level_index < 0 || DATA_AIL_DURATION.length <= level_index) {
      return stat;
    }

    stat.setStat(
      StatEnum.ADV_DEF_AILMENT_DURATION,
      DATA_AIL_DURATION[level_index],
    );

    return stat;
  };
  SKILL_MAIN[SKILL_NAME] = _getterFunctionMain;

  const _getterFunctionSub = (
    ctx: ActionContext,
    level: number,
  ): StatObject => {
    const DATA_PP_RECOVERY: number[] = [
      0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5,
    ];

    const stat: StatObject = statObject();
    const level_index: number = level - 1;

    if (level_index < 0 || DATA_PP_RECOVERY.length <= level_index) {
      return stat;
    }

    stat.setStat(
      StatEnum.ADV_DEF_AILMENT_DURATION,
      DATA_PP_RECOVERY[level_index],
    );

    return stat;
  };
  SKILL_SUB[SKILL_NAME] = _getterFunctionSub;
})();

export const G_RANGER = characterClass(
  GroupEnumClass.RANGER,
  SKILL_MAIN,
  SKILL_SUB,
);
