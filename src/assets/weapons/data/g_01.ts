import { StatEnum, StatObject, statObject } from "../../stat";
import { Potential, AssetPotentials } from "../../potentials";

import { GroupEnumWeaponRarity } from "../groupEnum";
import { weapon, Weapon } from "../weapon";
import { ActionContext } from "../../ContextAction";

export const G_ONE: Weapon[] = [];

const GROWTH_DATA: [number, number][] = [
  [10, 22],
  [20, 46],
  [30, 63],
  [40, 82],
  [50, 161],
  [60, 347],
];

const makeWeaponOne = (
  name: string,
  base_attack: number,
  level_required: number,
  potential: Potential,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeaponRarity.R_ONE,
    base_attack,
    60,
    level_required,
    potential,
    GROWTH_DATA,
    getAwareStatObject,
  );
};

// -----------------------
G_ONE.push(
  makeWeaponOne(
    "Primm Series",
    177,
    1,
    AssetPotentials.RECYCLER_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
      });
    },
  ),
);
