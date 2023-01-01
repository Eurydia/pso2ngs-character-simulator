import { StatEnum, statObject, StatObject } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";

import { GroupEnumWeapon } from "../groupEnum";
import { weapon, Weapon } from "../weapon";
import { ActionContext } from "../../context";

export const g_three: Weapon[] = [];

const GROWTH_DATA: [number, number][] = [
  [10, 10],
  [20, 21],
  [30, 32],
  [40, 47],
  [50, 115],
  [60, 301],
];

const makeWeaponThree = (
  name: string,
  potential: Potential,
  getStatObject: (ctx: ActionContext) => StatObject,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeapon.R_THREE,
    potential,
    GROWTH_DATA,
    getStatObject,
  );
};

// -----------------------
g_three.push(
  makeWeaponThree(
    "Theseus Series",
    AssetPotentials.DEFENSIVE_FORMATION,
    (_) => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 223,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
      });
    },
  ),
);

// -----------------------
g_three.push(
  makeWeaponThree(
    "Trois De Series",
    AssetPotentials.OFFENSIVE_FORMATION,
    (_) => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 223,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
      });
    },
  ),
);

// -----------------------
g_three.push(
  makeWeaponThree(
    "Gold Primm Sword",
    AssetPotentials.RECYCLER_UNIT,
    (_) => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 223,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
      });
    },
  ),
);

// -----------------------
g_three.push(
  makeWeaponThree(
    "Glissen Series",
    AssetPotentials.VALOROUS_UNIT,
    (_) => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 225,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
        [StatEnum.ADV_OFF_DAMAGE_UP]: 1.15,
      });
    },
  ),
);

// -----------------------
g_three.push(
  makeWeaponThree(
    "Frostel Series",
    AssetPotentials.VALOROUS_UNIT,
    (ctx) => {
      const stat: StatObject = statObject({
        [StatEnum.CORE_ATTACK]: 225,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
        [StatEnum.ADV_OFF_DAMAGE_UP]: 1.1,
      });

      if (ctx.target === undefined) {
        return stat;
      }

      if (ctx.target.isWeakToIce) {
        stat.setStat(StatEnum.ADV_OFF_DAMAGE_UP, 1.15);
      }

      return stat;
    },
  ),
);

// -----------------------
g_three.push(
  makeWeaponThree(
    "Renaissa Series",
    AssetPotentials.DYNAMO_UNIT,
    (_) => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 224,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);
