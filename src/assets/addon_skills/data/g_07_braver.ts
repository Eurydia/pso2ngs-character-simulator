import { ActionContext } from "../../ContextAction";
import { StatEnum, statObject, StatObject } from "../../stat";

import { addonSkill } from "../addon_skill";

export const BRAVER_CRIT_CHANCE_UP = addonSkill(
  "Critical Hit Rate Up (Braver)",
  (_: ActionContext, level_index: number): StatObject => {
    const DATA_CRIT_CHANCE: number[] = [
      1.005, 1.01, 1.015, 1.02, 1.025, 1.03, 1.035, 1.04, 1.045, 1.05,
      1.055, 1.06, 1.065, 1.07, 1.075, 1.08, 1.085, 1.09, 1.095, 1.1,
    ];
    const crit_chance: number = DATA_CRIT_CHANCE[level_index];
    return statObject({
      [StatEnum.ADV_OFF_CRIT_CHANCE]: crit_chance,
    });
  },
);

export const BRAVER_HEALING_UP = addonSkill(
  "Restasigne Heal Amount Up (Braver)",
  (_: ActionContext, level_index: number): StatObject => {
    const DATA_HEALING_UP: number[] = [
      1.005, 1.01, 1.015, 1.02, 1.025, 1.03, 1.035, 1.04, 1.045, 1.05,
      1.055, 1.06, 1.065, 1.07, 1.075, 1.08, 1.085, 1.09, 1.095, 1.1,
    ];
    const healing_up: number = DATA_HEALING_UP[level_index];
    return statObject({
      [StatEnum.ADV_DEF_HEALING_UP]: healing_up,
    });
  },
);

export const BRAVER_BURN_RES_UP = addonSkill(
  "Burn Resistance Up (Braver)",
  (_: ActionContext, level_index: number): StatObject => {
    const DATA_AIL_RES: number[] = [
      1.3, 1.32, 1.33, 1.34, 1.35, 1.36, 1.37, 1.38, 1.39, 1.4, 1.41,
      1.42, 1.43, 1.44, 1.45, 1.46, 1.47, 1.48, 1.49, 1.5,
    ];
    const ail_res: number = DATA_AIL_RES[level_index];
    return statObject({
      [StatEnum.AIL_BURN]: ail_res,
    });
  },
);
