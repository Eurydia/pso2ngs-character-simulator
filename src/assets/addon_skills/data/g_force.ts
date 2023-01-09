import { ActionContext } from "../../context";
import { StatEnum, statObject, StatObject } from "../../stat";

import { addonSkill } from "../addon";

export const FORCE_TECHNIQUE_WEAPON_UP = addonSkill(
  "Technique Weapon Potency Up",
  (_: ActionContext, level_index: number): StatObject => {
    const DATA_WEAPON_UP: number[] = [
      1.0025, 1.005, 1.0075, 1.01, 1.0125, 1.015, 1.0175, 1.02,
      1.0225, 1.025, 1.0275, 1.03, 1.0325, 1.035, 1.0375, 1.04,
      1.0425, 1.045, 1.0475, 1.05,
    ];
    if (level_index < 0 || level_index >= DATA_WEAPON_UP.length) {
      return statObject();
    }
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    return statObject({
      [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
    });
  },
);

export const FORCE_NATURAL_PP_RECOVERY = addonSkill(
  "Natural PP Recovery Up",
  (_: ActionContext, level_index: number): StatObject => {
    const DATA_PP_RECOVERY: number[] = [
      1.005, 1.01, 1.015, 1.02, 1.025, 1.03, 1.035, 1.04, 1.045, 1.05,
      1.055, 1.06, 1.065, 1.07, 1.075, 1.08, 1.085, 1.09, 1.095, 1.1,
    ];
    if (level_index < 0 || level_index >= DATA_PP_RECOVERY.length) {
      return statObject();
    }
    const pp_recovery: number = DATA_PP_RECOVERY[level_index];
    return statObject({
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: pp_recovery,
    });
  },
);

export const FORCE_PANIC_RES_UP = addonSkill(
  "Panic Resistance Up",
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
      [StatEnum.AIL_PANIC]: ail_res,
    });
  },
);
