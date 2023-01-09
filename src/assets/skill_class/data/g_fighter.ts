import { ActionContext } from "../../context";
import { StatEnum, statObject, StatObject } from "../../stat";
import { GroupEnumClass } from "../GroupEnum";
import { characterClass } from "../class_skill";

const SKILL_MAIN: {
  [K: string]: (ctx: ActionContext, level: number) => StatObject;
} = {};

const SKILL_SUB: {
  [K: string]: (ctx: ActionContext, level: number) => StatObject;
} = {};

// // ----------------------------------------------
// // Main class exclusive skills

// // Overload
// (() => {
//   const SKILL_NAME: string = "Overload";

//   const _getterFunctionMain = (
//     ctx: ActionContext,
//     level: number,
//   ): StatObject => {
//     return statObject({
//       [StatEnum.ADV_OFF_DAMAGE_UP]: 1.2,
//       [StatEnum.ADV_DEF_DAMAGE_RES]: 0.5,
//     });
//   };

//   SKILL_MAIN[SKILL_NAME] = _getterFunctionMain;
// })();

// // Overload PP Recovery
// (() => {
//   const SKILL_NAME: string = "Overload PP Recovery";

//   const _getterFunctionMain = (
//     ctx: ActionContext,
//     level: number,
//   ): StatObject => {
//     const stat: StatObject = statObject();

//     if (ctx.character === undefined) {
//       return stat;
//     }

//     if (ctx.character.isAttacking) {
//       stat.setStat(StatEnum.ADV_PP_ACTIVE_RECOVERY, 2);
//       stat.setStat(StatEnum.ADV_PP_NATURAL_RECOVERY, 2);
//     }

//     return stat;
//   };

//   SKILL_MAIN[SKILL_NAME] = _getterFunctionMain;
// })();

// // Overload PP Short Cycle
// (() => {
//   const SKILL_NAME: string = "Overload PP Short Cycle";

//   const _getterFunctionMain = (
//     ctx: ActionContext,
//     level: number,
//   ): StatObject => {
//     const DATA_DAMAGE_RES: number[] = [0.5, 0.33, 0.25, 0.2, 0.16];

//     const stat: StatObject = statObject();
//     const level_index = level - 1;

//     if (level_index < 0 || DATA_DAMAGE_RES.length <= level_index) {
//       return stat;
//     }

//     stat.setStat(
//       StatEnum.ADV_DEF_DAMAGE_RES,
//       DATA_DAMAGE_RES[level_index],
//     );

//     return stat;
//   };

//   SKILL_MAIN[SKILL_NAME] = _getterFunctionMain;
// })();

// // Overload After PP Preservation
// (() => {
//   const SKILL_NAME: string = "Overload After PP Preservation";

//   const _getterFunctionMain = (
//     ctx: ActionContext,
//     level: number,
//   ): StatObject => {
//     const DATA_PP_USAGE: number[] = [0.75, 0.5, 0.25];

//     const stat: StatObject = statObject();
//     const level_index: number = level - 1;

//     if (level_index < 0 || DATA_PP_USAGE.length <= level_index) {
//       return stat;
//     }

//     const pp_usage: number = DATA_PP_USAGE[level_index];
//     stat.setStat(StatEnum.ADV_PP_USAGE, pp_usage);

//     return stat;
//   };

//   SKILL_MAIN[SKILL_NAME] = _getterFunctionMain;
// })();

// // ----------------------------------------------
// //  Main & Sub class skills

// // Defeat Advantage
// (() => {
//   const SKILL_NAME: string = "Defeat Advantage";

//   const _getterFunctionMain = (
//     ctx: ActionContext,
//     level: number,
//   ): StatObject => {
//     const DATA_DAMAMGE_UP: number[] = [
//       1.06, 1.07, 108, 1.09, 1.1, 1.11, 1.12, 1.13, 1.14, 1.15,
//     ];

//     const stat: StatObject = statObject();
//     const level_index: number = level - 1;

//     if (level_index < 0 || DATA_DAMAMGE_UP.length <= level_index) {
//       return stat;
//     }

//     if (ctx.target === undefined) {
//       return stat;
//     }

//     if (ctx.target.isDowned) {
//       stat.setStat(
//         StatEnum.ADV_OFF_DAMAGE_UP,
//         DATA_DAMAMGE_UP[level_index],
//       );
//     }

//     return stat;
//   };
//   SKILL_MAIN[SKILL_NAME] = _getterFunctionMain;

//   const _getterFunctionSub = (
//     ctx: ActionContext,
//     level: number,
//   ): StatObject => {
//     const DATA_DAMAMGE_UP: number[] = [
//       1.01, 1.01, 1.01, 1.02, 1.02, 1.03, 1.03, 1.04, 1.04, 1.05,
//     ];

//     const stat: StatObject = statObject();
//     const level_index: number = level - 1;

//     if (level_index < 0 || DATA_DAMAMGE_UP.length <= level_index) {
//       return stat;
//     }

//     if (ctx.target === undefined) {
//       return stat;
//     }

//     if (ctx.target.isDowned) {
//       stat.setStat(
//         StatEnum.ADV_OFF_DAMAGE_UP,
//         DATA_DAMAMGE_UP[level_index],
//       );
//     }

//     return stat;
//   };
//   SKILL_SUB[SKILL_NAME] = _getterFunctionSub;
// })();

// // Defeat PP Recovery
// (() => {
//   const SKILL_NAME: string = "Defeat PP Recovery";

//   const _getterFunctionMain = (
//     ctx: ActionContext,
//     level: number,
//   ): StatObject => {
//     const DATA_PP_RECOVERY: number[] = [
//       1.3, 1.33, 1.36, 1.38, 1.4, 1.42, 1.44, 1.46, 1.48, 1.5, 1.52,
//       1.54, 1.56, 1.58, 1.6,
//     ];

//     const stat: StatObject = statObject();
//     const level_index: number = level - 1;

//     if (level_index < 0 || DATA_PP_RECOVERY.length <= level_index) {
//       return stat;
//     }

//     if (ctx.target === undefined) {
//       return stat;
//     }

//     if (ctx.character === undefined) {
//       return stat;
//     }

//     if (ctx.target.isDowned && ctx.character.isAttacking) {
//       stat.setStat(
//         StatEnum.ADV_PP_ACTIVE_RECOVERY,
//         DATA_PP_RECOVERY[level_index],
//       );
//     }

//     return stat;
//   };
//   SKILL_MAIN[SKILL_NAME] = _getterFunctionMain;

//   const _getterFunctionSub = (
//     ctx: ActionContext,
//     level: number,
//   ): StatObject => {
//     const DATA_PP_RECOVERY: number[] = [
//       1.1, 1.11, 1.12, 1.13, 1.15, 1.17, 1.19, 1.21, 1.23, 1.25, 1.28,
//       1.31, 1.34, 1.37, 1.4,
//     ];

//     const stat: StatObject = statObject();
//     const level_index: number = level - 1;

//     if (level_index < 0 || DATA_PP_RECOVERY.length <= level_index) {
//       return stat;
//     }

//     if (ctx.target === undefined) {
//       return stat;
//     }

//     if (ctx.character === undefined) {
//       return stat;
//     }

//     if (ctx.target.isDowned && ctx.character.isAttacking) {
//       stat.setStat(
//         StatEnum.ADV_PP_ACTIVE_RECOVERY,
//         DATA_PP_RECOVERY[level_index],
//       );
//     }

//     return stat;
//   };
//   SKILL_SUB[SKILL_NAME] = _getterFunctionSub;
// })();

export const G_FIGHTER = characterClass(
  GroupEnumClass.FIGHTER,

  SKILL_MAIN,
  SKILL_SUB,
);
