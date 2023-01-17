import { ActionContext } from "../../ContextAction";
import { StatEnum, statObject, StatObject } from "../../stat";
import {
  CharacterClassSkill,
  characterClassSkill,
} from "../character_class_skill";

export const G_TECHTER_AWAKE_AILE = ((): CharacterClassSkill => {
  const DATA_PB_RECOVERY_MAIN: number[] = [
    1.1, 1.13, 1.16, 1.18, 1.2,
  ];
  const DATA_PB_RECOVERY_SUB: number[] = [
    1.02, 1.04, 1.06, 1.08, 1.1,
  ];
  const _getterMain = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    if (!ctx.character.isAttacking) {
      return statObject();
    }
    if (!ctx.target.isBoss) {
      return statObject();
    }
    const pb_recovery: number = DATA_PB_RECOVERY_MAIN[level_index];
    return statObject({
      [StatEnum.ADV_OFF_PB_RECOVERY]: pb_recovery,
    });
  };
  const _getterSub = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    if (!ctx.character.isAttacking) {
      return statObject();
    }
    if (!ctx.target.isBoss) {
      return statObject();
    }
    const pb_recovery: number = DATA_PB_RECOVERY_SUB[level_index];
    return statObject({
      [StatEnum.ADV_OFF_PB_RECOVERY]: pb_recovery,
    });
  };
  return characterClassSkill(
    "Awake Aile",
    DATA_PB_RECOVERY_MAIN.length,
    _getterMain,
    _getterSub,
  );
})();
