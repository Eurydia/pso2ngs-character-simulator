import { ActionContext } from "../../ContextAction";
import { StatEnum, statObject, StatObject } from "../../stat";
import {
  CharacterClassSkill,
  characterClassSkill,
} from "../character_class_skill";

export const G_FIGHTER_DEFEAT_ADVANTAGE =
  ((): CharacterClassSkill => {
    const DATA_DAMAGE_UP_MAIN: number[] = [
      1.06, 1.07, 1.08, 1.09, 1.1, 1.11, 1.12, 1.13, 1.14, 1.15,
    ];
    const DATA_DAMAGE_UP_SUB: number[] = [
      1.01, 1.01, 1.01, 1.02, 1.02, 1.03, 1.03, 1.04, 1.04, 1.05,
    ];
    const _getterMain = (
      ctx: ActionContext,
      level_index: number,
    ): StatObject => {
      if (!ctx.character.isAttacking) {
        return statObject();
      }
      const damage_up: number = DATA_DAMAGE_UP_MAIN[level_index];
      return statObject({ [StatEnum.ADV_OFF_DAMAGE_UP]: damage_up });
    };
    const _getterSub = (
      ctx: ActionContext,
      level_index: number,
    ): StatObject => {
      if (!ctx.character.isAttacking) {
        return statObject();
      }
      const damage_up: number = DATA_DAMAGE_UP_SUB[level_index];
      return statObject({ [StatEnum.ADV_OFF_DAMAGE_UP]: damage_up });
    };
    return characterClassSkill(
      "Defeat Advantage",
      DATA_DAMAGE_UP_MAIN.length,
      _getterMain,
      _getterSub,
    );
  })();

export const G_FIGHTER_DEFEAT_PP_RECOVERY =
  ((): CharacterClassSkill => {
    const DATA_PP_RECOVERY_MAIN: number[] = [
      1.3, 1.33, 1.36, 1.38, 1.4, 1.42, 1.44, 1.46, 1.48, 1.5, 1.52,
      1.54, 1.56, 1.58, 1.6,
    ];
    const DATA_PP_RECOVERY_SUB: number[] = [
      1.1, 1.11, 1.12, 1.13, 1.15, 1.17, 1.19, 1.21, 1.23, 1.25, 1.28,
      1.31, 1.34, 1.37, 1.4,
    ];
    const _getterMain = (
      ctx: ActionContext,
      level_index: number,
    ): StatObject => {
      if (!ctx.character.isAttacking) {
        return statObject();
      }
      const pp_recovery: number = DATA_PP_RECOVERY_MAIN[level_index];
      return statObject({ [StatEnum.ADV_PP_RECOVERY]: pp_recovery });
    };
    const _getterSub = (
      ctx: ActionContext,
      level_index: number,
    ): StatObject => {
      if (!ctx.character.isAttacking) {
        return statObject();
      }
      const pp_recovery: number = DATA_PP_RECOVERY_SUB[level_index];
      return statObject({ [StatEnum.ADV_PP_RECOVERY]: pp_recovery });
    };
    return characterClassSkill(
      "Defeat PP Recovery",
      DATA_PP_RECOVERY_MAIN.length,
      _getterMain,
      _getterSub,
    );
  })();
