import { StatEnum, StatObject, statObject } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";

import { GroupEnumWeaponRarity } from "../groupEnum";
import { weapon, Weapon } from "../weapon";
import { ActionContext } from "../../../contexts/ContextAction";

export const G_TWO: Weapon[] = [];

const GROWTH_DATA: [number, number][] = [
  [10, 16],
  [20, 33],
  [30, 50],
  [40, 69],
  [50, 143],
  [60, 329],
];

const makeWeaponTwo = (
  name: string,
  potential: Potential,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeaponRarity.R_TWO,
    potential,
    GROWTH_DATA,
    getAwareStatObject,
  );
};

// -----------------------
G_TWO.push(
  makeWeaponTwo(
    "Tzvia Series",
    AssetPotentials.INDOMITABLE_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 195,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
      });
    },
  ),
);

// -----------------------
G_TWO.push(
  makeWeaponTwo(
    "Silver Primm Sword",
    AssetPotentials.RECYCLER_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 195,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
      });
    },
  ),
);

// -----------------------
G_TWO.push(
  makeWeaponTwo(
    "N-Exp Weapon",
    AssetPotentials.RECYCLER_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 195,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
      });
    },
  ),
);
