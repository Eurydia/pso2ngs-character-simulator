import { ActionContext } from "../../ContextAction";
import { StatEnum, statObject, StatObject } from "../../stat";

import { CharClassSkill, charClassSkill } from "../char_class_skills";

export const G_HUNTER_FLASH_GUARD = ((): CharClassSkill => {
  const DATA_DAMAGE_RES_MAIN: number[] = [
    1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19, 1.2,
    1.21, 1.22, 1.23, 1.24, 1.25,
  ];
  const DATA_DAMAGE_RES_SUB: number[] = [
    1.01, 1.02, 1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.1, 1.11,
    1.12, 1.13, 1.14, 1.15,
  ];
  const _getterMain = (
    _: ActionContext,
    level_index: number,
  ): StatObject => {
    const damage_res: number = DATA_DAMAGE_RES_MAIN[level_index];
    return statObject({
      [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
    });
  };
  const _getterSub = (
    _: ActionContext,
    level_index: number,
  ): StatObject => {
    const damage_res: number = DATA_DAMAGE_RES_SUB[level_index];
    return statObject({
      [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
    });
  };
  return charClassSkill(
    "Flash Guard",
    DATA_DAMAGE_RES_MAIN.length,
    _getterMain,
    _getterSub,
  );
})();
