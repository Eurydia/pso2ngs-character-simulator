import { ActionContext } from "../../ContextAction";
import { StatEnum, statObject, StatObject } from "../../stat";

import { addonSkill } from "../addon_skill";

export const GENERIC_HP_UP = addonSkill(
  "HP Up (Generic)",
  (_: ActionContext, level_index: number): StatObject => {
    const DATA_HP: number[] = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
      19, 20,
    ];
    const hp: number = DATA_HP[level_index];
    return statObject({
      [StatEnum.CORE_HP]: hp,
    });
  },
);
