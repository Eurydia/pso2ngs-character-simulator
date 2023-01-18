import { ActionContext } from "../../ContextAction";
import { StatEnum, statObject, StatObject } from "../../stat";

import { addonSkill } from "../addon_skill";

export const TECHTER_NATURAL_PB_RECOVERY = addonSkill(
  "Natural PB Gauge Accumulation Up (Techter)",
  (_: ActionContext, level_index: number): StatObject => {
    const DATA_PB_RECOVERY: number[] = [
      1.01, 1.02, 1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.1, 1.11,
      1.12, 1.13, 1.14, 1.15, 1.16, 1.17, 1.18, 1.19, 1.2,
    ];
    const pb_recovery: number = DATA_PB_RECOVERY[level_index];
    return statObject({
      [StatEnum.ADV_OFF_PB_RECOVERY]: pb_recovery,
    });
  },
);

export const TECHTER_DAMAGE_RES_UP = addonSkill(
  "Damage Resistance Up (Techter)",
  (_: ActionContext, level_index: number): StatObject => {
    const DATA_DAMAGE_RES: number[] = [
      1.005, 1.01, 1.015, 1.02, 1.025, 1.03, 1.035, 1.04, 1.045, 1.05,
      1.055, 1.06, 1.065, 1.07, 1.075, 1.08, 1.085, 1.09, 1.095, 1.1,
    ];
    const damage_res: number = DATA_DAMAGE_RES[level_index];
    return statObject({
      [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
    });
  },
);

export const TECHTER_POISON_RES_UP = addonSkill(
  "Poison Resistance Up (Techter)",
  (_: ActionContext, level_index: number): StatObject => {
    const DATA_AIL_RES: number[] = [
      1.3, 1.32, 1.33, 1.34, 1.35, 1.36, 1.37, 1.38, 1.39, 1.4, 1.41,
      1.42, 1.43, 1.44, 1.45, 1.46, 1.47, 1.48, 1.49, 1.5,
    ];
    const ail_res: number = DATA_AIL_RES[level_index];
    return statObject({
      [StatEnum.AIL_POISON]: ail_res,
    });
  },
);
