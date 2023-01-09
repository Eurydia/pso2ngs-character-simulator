import { ActionContext } from "../../context";
import { StatEnum, statObject, StatObject } from "../../stat";

import { addonSkill } from "../addon";

export const WAKER_PP_UP = addonSkill(
  "PP Up",
  (_: ActionContext, level_index: number): StatObject => {
    const DATA_PP: number[] = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
      19, 20,
    ];
    if (level_index < 0 || level_index >= DATA_PP.length) {
      return statObject();
    }
    const pp: number = DATA_PP[level_index];
    return statObject({
      [StatEnum.CORE_PP]: pp,
    });
  },
);

export const WAKER_SHOCK_RES_UP = addonSkill(
  "Shock Resistance Up",
  (_: ActionContext, level_index: number): StatObject => {
    const DATA_AIL_RES: number[] = [
      1.3, 1.32, 1.33, 1.34, 1.35, 1.36, 1.37, 1.38, 1.39, 1.4, 1.41,
      1.42, 1.43, 1.44, 1.45, 1.46, 1.47, 1.48, 1.49, 1.5,
    ];
    if (level_index < 0 || level_index >= DATA_AIL_RES.length) {
      return statObject();
    }
    const ail_res: number = DATA_AIL_RES[level_index];
    return statObject({
      [StatEnum.AIL_SHOCK]: ail_res,
    });
  },
);
