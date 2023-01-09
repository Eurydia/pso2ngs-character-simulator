import { ActionContext } from "../../context";
import { StatEnum, statObject, StatObject } from "../../stat";

import { addon } from "../addon";

export const FIGHTER_CRIT_DAMAGE_UP = addon(
  "Critical Hit Potency Up",
  (_: ActionContext, level_index: number): StatObject => {
    const DATA_CRIT_DAMAGE_UP: number[] = [
      0.005, 0.01, 0.015, 0.02, 0.025, 0.03, 0.035, 0.04, 0.045, 0.05,
      0.055, 0.06, 0.065, 0.07, 0.075, 0.08, 0.085, 0.09, 0.095, 0.1,
    ];
    if (
      level_index < 0 ||
      level_index >= DATA_CRIT_DAMAGE_UP.length
    ) {
      return statObject();
    }
    const crit_damge_up: number = DATA_CRIT_DAMAGE_UP[level_index];
    return statObject({
      [StatEnum.ADV_OFF_CRIT_DAMAGE]: crit_damge_up,
    });
  },
);

export const FIGHTER_FREEZE_RES_UP = addon(
  "Freeze Resistance Up",
  (_: ActionContext, level_index: number): StatObject => {
    const DATA_AIL_RES: number[] = [
      1.3, 1.32, 1.33, 1.34, 1.35, 1.36, 1.37, 1.38, 1.39, 1.4, 1.41,
      1.42, 1.43, 1.44, 1.45, 1.46, 1.47, 1.48, 1.49, 1.5,
    ];
    if (level_index < 0 || level_index >= DATA_AIL_RES.length) {
      return statObject();
    }
    const ail_res: number = DATA_AIL_RES[level_index];
    return statObject({ [StatEnum.AIL_FREEZE]: ail_res });
  },
);
