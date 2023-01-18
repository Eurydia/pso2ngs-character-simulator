import { ActionContext } from "../../ContextAction";
import { StatEnum, statObject, StatObject } from "../../stat";
import { CharClassSkill, charClassSkill } from "../char_class_skills";

export const BRAVER_RESTA_EFFECT_AMPLIFIER = ((): CharClassSkill => {
  const DATA_HEALING_UP_MAIN: number[] = [
    1.1, 1.13, 1.16, 1.18, 1.2, 1.22, 1.24, 1.26, 1.28, 1.3,
  ];
  const DATA_HEALING_UP_SUB: number[] = [
    1.02, 1.04, 1.06, 1.08, 1.1, 1.12, 1.14, 1.16, 1.18, 1.2,
  ];
  const _getterMain = (
    _: ActionContext,
    level_index: number,
  ): StatObject => {
    const healing_up: number = DATA_HEALING_UP_MAIN[level_index];
    return statObject({
      [StatEnum.ADV_DEF_HEALING_UP]: healing_up,
    });
  };
  const _getterSub = (
    _: ActionContext,
    level_index: number,
  ): StatObject => {
    const healing_up: number = DATA_HEALING_UP_SUB[level_index];
    return statObject({
      [StatEnum.ADV_DEF_HEALING_UP]: healing_up,
    });
  };
  return charClassSkill(
    "Resta Effect Amplifier",
    DATA_HEALING_UP_MAIN.length,
    _getterMain,
    _getterSub,
  );
})();
