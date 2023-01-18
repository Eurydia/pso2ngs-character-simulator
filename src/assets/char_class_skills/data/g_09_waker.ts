import { ActionContext } from "../../ContextAction";
import { StatEnum, statObject, StatObject } from "../../stat";
import { CharClassSkill, charClassSkill } from "../char_class_skills";

export const WAKER_WELFARE_MANAGEMENT = ((): CharClassSkill => {
  const DATA_DAMAGE_RES_MAIN: number[] = [1.2, 1.25, 1.3, 1.35, 1.4];
  const DATA_DAMAGE_RES_SUB: number[] = [1.1, 1.13, 1.16, 1.18, 1.2];
  const DATA_HP_BREAKPOINT = [0.3, 0.3, 0.3, 0.3, 0.3];
  const _getterMain = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const { hpValue, hpValueCurrent } = ctx.character;
    const hp_percent: number = hpValueCurrent / hpValue;
    const hp_breakpoint: number = DATA_HP_BREAKPOINT[level_index];
    if (hp_percent > hp_breakpoint) {
      return statObject();
    }
    const damage_res: number = DATA_DAMAGE_RES_MAIN[level_index];
    return statObject({
      [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
      [StatEnum.ADV_DEF_HEALING_UP]: 1.25,
    });
  };
  const _getterSub = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const { hpValue, hpValueCurrent } = ctx.character;
    const hp_percent: number = hpValueCurrent / hpValue;
    const hp_breakpoint: number = DATA_HP_BREAKPOINT[level_index];
    if (hp_percent > hp_breakpoint) {
      return statObject();
    }
    const damage_res: number = DATA_DAMAGE_RES_SUB[level_index];
    return statObject({
      [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
      [StatEnum.ADV_DEF_HEALING_UP]: 1.1,
    });
  };
  return charClassSkill(
    "Welfare Management",
    DATA_DAMAGE_RES_MAIN.length,
    _getterMain,
    _getterSub,
  );
})();
