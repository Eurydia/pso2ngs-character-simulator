import { ActionContext } from "../../ContextAction";
import { StatEnum, statObject, StatObject } from "../../stat";
import {
  CharacterClassSkill,
  characterClassSkill,
} from "../character_class_skill";

export const G_GUNNER_ATTACK_PP_RECOVERY =
  ((): CharacterClassSkill => {
    const DATA_PP_RECOVERY_MAIN: number[] = [
      1.2, 1.22, 1.23, 1.24, 1.25, 1.26, 1.27, 1.28, 1.29, 1.3, 1.31,
      1.32, 1.33, 1.34, 1.35,
    ];
    const DATA_PP_RECOVERY_SUB: number[] = [
      1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.2, 1.21,
      1.22, 1.23, 1.24, 1.25,
    ];
    const _getterMain = (
      ctx: ActionContext,
      level_index: number,
    ): StatObject => {
      if (!ctx.character.isAttacking) {
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
      if (!ctx.character.isAttacking) {
        return statObject();
      }
      const pp_recovery: number = DATA_PP_RECOVERY_SUB[level_index];
      return statObject({
        [StatEnum.ADV_PP_RECOVERY]: pp_recovery,
      });
    };
    return characterClassSkill(
      "Attack PP Recovery",
      DATA_PP_RECOVERY_MAIN.length,
      _getterMain,
      _getterSub,
    );
  })();

export const G_GUNNER_OVERWHELM = ((): CharacterClassSkill => {
  const DATA_PP_RECOVERY_MAIN: number[] = [
    1.2, 1.22, 1.23, 1.24, 1.25, 1.26, 1.27, 1.28, 1.29, 1.3,
  ];
  const DATA_PP_RECOVERY_SUB: number[] = [
    1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.2,
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
    const pp_recovery: number = DATA_PP_RECOVERY_MAIN[level_index];
    return statObject({
      [StatEnum.ADV_PP_RECOVERY]: pp_recovery,
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
    const pp_recovery: number = DATA_PP_RECOVERY_SUB[level_index];
    return statObject({
      [StatEnum.ADV_PP_RECOVERY]: pp_recovery,
    });
  };
  return characterClassSkill(
    "Overwhelm",
    DATA_PP_RECOVERY_MAIN.length,
    _getterMain,
    _getterSub,
  );
})();
