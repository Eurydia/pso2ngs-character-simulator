import { ActionContext } from "../../ContextAction";
import { StatEnum, statObject, StatObject } from "../../stat";

import { characterClassAddon } from "../character_class_addon";

export const GENERIC_HP_UP = characterClassAddon(
  "HP Up (Generic)",
  (_: ActionContext, level_index: number): StatObject => {
    const DATA_HP: number[] = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
      19, 20,
    ];
    if (level_index < 0 || level_index >= DATA_HP.length) {
      return statObject();
    }
    const hp: number = DATA_HP[level_index];
    return statObject({
      [StatEnum.CORE_HP]: hp,
    });
  },
);
