import { ActionContext } from "../../ContextAction";
import { StatEnum, statObject, StatObject } from "../../stat";
import {
  CharacterClassSkill,
  characterClassSkill,
} from "../character_class_skill";

export const G_RANGER_BAD_CONDITION_WARD =
  ((): CharacterClassSkill => {
    const DATA_AIL_RES_MAIN: number[] = [
      1.25, 1.29, 1.33, 1.36, 1.42, 1.44, 1.46, 1.48, 1.5, 1.52, 1.54,
      1.56, 1.58, 1.6,
    ];
    const DATA_AIL_RES_SUB: number[] = [
      1.05, 1.07, 1.09, 1.11, 1.13, 1.15, 1.17, 1.19, 1.22, 1.25,
      1.28, 1.31, 1.34, 1.37, 1.4,
    ];
    const _getterMain = (
      _: ActionContext,
      level_index: number,
    ): StatObject => {
      const ail_res: number = DATA_AIL_RES_MAIN[level_index];
      return statObject({
        [StatEnum.AIL_BLIND]: ail_res,
        [StatEnum.AIL_BURN]: ail_res,
        [StatEnum.AIL_DOWN]: ail_res,
        [StatEnum.AIL_FREEZE]: ail_res,
        [StatEnum.AIL_PANIC]: ail_res,
        [StatEnum.AIL_POISON]: ail_res,
        [StatEnum.AIL_SHOCK]: ail_res,
      });
    };
    const _getterSub = (
      _: ActionContext,
      level_index: number,
    ): StatObject => {
      const ail_res: number = DATA_AIL_RES_SUB[level_index];
      return statObject({
        [StatEnum.AIL_BLIND]: ail_res,
        [StatEnum.AIL_BURN]: ail_res,
        [StatEnum.AIL_DOWN]: ail_res,
        [StatEnum.AIL_FREEZE]: ail_res,
        [StatEnum.AIL_PANIC]: ail_res,
        [StatEnum.AIL_POISON]: ail_res,
        [StatEnum.AIL_SHOCK]: ail_res,
      });
    };
    return characterClassSkill(
      "Bad Condition Ward",
      DATA_AIL_RES_MAIN.length,
      _getterMain,
      _getterSub,
    );
  })();

export const G_RANGER_BAD_CONDITION_REDUCTION =
  ((): CharacterClassSkill => {
    const DATA_AIL_DURATION_MAIN: number[] = [
      0.5, 0.46, 0.44, 0.42, 0.4, 0.38, 0.36, 0.34, 0.32, 0.3,
    ];
    const DATA_AIL_DURATION_SUB: number[] = [
      0.95, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5,
    ];
    const _getterMain = (
      _: ActionContext,
      level_index: number,
    ): StatObject => {
      const ail_duration: number =
        DATA_AIL_DURATION_MAIN[level_index];
      return statObject({
        [StatEnum.ADV_DEF_AILMENT_DURATION]: ail_duration,
      });
    };
    const _getterSub = (
      _: ActionContext,
      level_index: number,
    ): StatObject => {
      const ail_duration: number = DATA_AIL_DURATION_SUB[level_index];
      return statObject({
        [StatEnum.ADV_DEF_AILMENT_DURATION]: ail_duration,
      });
    };
    return characterClassSkill(
      "Bad Condition Reduction",
      DATA_AIL_DURATION_MAIN.length,
      _getterMain,
      _getterSub,
    );
  })();
