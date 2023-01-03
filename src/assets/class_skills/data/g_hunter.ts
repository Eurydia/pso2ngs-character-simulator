import { ActionContext } from "../../context";
import { StatEnum, statObject, StatObject } from "../../stat";
import { GroupEnumClass } from "../GroupEnum";
import { characterClass } from "../class_skill";

const SKILLS_MAIN: {
  [K: string]: (ctx: ActionContext, level: number) => StatObject;
} = {};

const SKILLS_SUB: {
  [K: string]: (ctx: ActionContext, level: number) => StatObject;
} = {};

// ----------------------------------------------
// Main class exclusive skills

(() => {
  SKILLS_MAIN["War Cry"] = (
    ctx: ActionContext,
    level: number,
  ): StatObject => {
    return statObject({ [StatEnum.ADV_OFF_THREAT]: 2 });
  };
})();

// ----------------------------------------------
//  Main & Sub class skills

// Hunter Physique
(() => {
  const SKILL_NAME = "Hunter Physique";

  const _getterFunctionMain = (
    ctx: ActionContext,
    level: number,
  ): StatObject => {
    const DATA_DAMAGE_RES: number[] = [1.5, 1.65, 1.6, 1.65, 1.7];

    const stat: StatObject = statObject({});
    const level_index: number = level - 1;

    if (level_index < 0 || DATA_DAMAGE_RES.length <= level_index) {
      return stat;
    }

    stat.setStat(
      StatEnum.ADV_DEF_DAMAGE_RES,
      DATA_DAMAGE_RES[level_index],
    );

    return stat;
  };
  SKILLS_MAIN[SKILL_NAME] = _getterFunctionMain;

  const _getterFunctionSub = (
    ctx: ActionContext,
    level: number,
  ): StatObject => {
    const DATA_DAMAGE_RES: number[] = [1.05, 1.1, 1.15, 1.2, 1.25];

    const stat: StatObject = statObject({});
    const level_index: number = level - 1;

    if (level_index < 0 || DATA_DAMAGE_RES.length <= level_index) {
      return stat;
    }

    stat.setStat(
      StatEnum.ADV_DEF_DAMAGE_RES,
      DATA_DAMAGE_RES[level_index],
    );

    return stat;
  };
  SKILLS_SUB[SKILL_NAME] = _getterFunctionSub;
})();

// Flash Guard
(() => {
  const SKILL_NAME = "Flash Guard";

  const _getterFunctionMain = (
    ctx: ActionContext,
    level: number,
  ): StatObject => {
    const DATA_DAMAGE_RES: number[] = [
      1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.2, 1.21,
      1.22, 1.23, 1.24, 1.25,
    ];

    const stat: StatObject = statObject({});
    const level_index: number = level - 1;

    if (level_index < 0 || DATA_DAMAGE_RES.length <= level_index) {
      return stat;
    }

    stat.setStat(
      StatEnum.ADV_DEF_DAMAGE_RES,
      DATA_DAMAGE_RES[level_index],
    );

    return stat;
  };
  SKILLS_MAIN[SKILL_NAME] = _getterFunctionMain;

  const _getterFunctionSub = (
    ctx: ActionContext,
    level: number,
  ): StatObject => {
    const DATA_DAMAGE_RES: number[] = [
      1.01, 1.02, 1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.1, 1.11,
      1.12, 1.13, 1.14, 1.15,
    ];

    const stat: StatObject = statObject({});
    const level_index: number = level - 1;

    if (level_index < 0 || DATA_DAMAGE_RES.length <= level_index) {
      return stat;
    }

    stat.setStat(
      StatEnum.ADV_DEF_DAMAGE_RES,
      DATA_DAMAGE_RES[level_index],
    );

    return stat;
  };
  SKILLS_SUB[SKILL_NAME] = _getterFunctionSub;
})();

export const G_HUNTER = characterClass(
  GroupEnumClass.HUNTER,
  SKILLS_MAIN,
  SKILLS_SUB,
);
