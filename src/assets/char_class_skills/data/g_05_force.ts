import { ActionContext } from "../../ContextAction";
import { StatEnum, statObject, StatObject } from "../../stat";
import { CharClassSkill, charClassSkill } from "../char_class_skills";

export const FORCE_PP_RECOVERY_BOOST = ((): CharClassSkill => {
  const DATA_PP_RECOVERY_MAIN: number[] = [
    1.5, 1.56, 1.62, 1.66, 1.72, 1.78, 1.84, 1.9, 1.95, 2.0, 2.02,
    2.04, 2.06, 2.08, 2.1,
  ];
  const DATA_PP_RECOVERY_SUB: number[] = [
    1.1, 1.14, 1.18, 1.22, 1.26, 1.3, 1.35, 1.4, 1.45, 1.5, 1.52,
    1.54, 1.56, 1.58, 1.6,
  ];
  const _getterMain = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    if (ctx.character.isAttacking) {
      return statObject();
    }
    const pp_recovery: number = DATA_PP_RECOVERY_MAIN[level_index];
    return statObject({
      [StatEnum.ADV_PP_RECOVERY]: pp_recovery,
    });
  };
  const _getterSub = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    if (ctx.character.isAttacking) {
      return statObject();
    }
    const pp_recovery: number = DATA_PP_RECOVERY_SUB[level_index];
    return statObject({
      [StatEnum.ADV_PP_RECOVERY]: pp_recovery,
    });
  };
  return charClassSkill(
    "PP Recovery Boost",
    DATA_PP_RECOVERY_MAIN.length,
    _getterMain,
    _getterSub,
  );
})();
