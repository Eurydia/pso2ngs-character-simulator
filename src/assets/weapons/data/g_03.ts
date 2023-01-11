import { StatEnum, statObject, StatObject } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";

import { GroupEnumWeaponRarity } from "../groupEnum";
import { weapon, Weapon } from "../weapon";
import { ActionContext } from "../../ContextAction";

export const G_THREE: Weapon[] = [];

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
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeaponRarity.R_THREE,
    potential,
    GROWTH_DATA,
    getAwareStatObject,
  );
};

// -----------------------
G_THREE.push(
  makeWeaponThree(
    "Theseus Series",
    AssetPotentials.DEFENSIVE_FORMATION,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 223,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
      });
    },
  ),
);

// -----------------------
G_THREE.push(
  makeWeaponThree(
    "Trois De Series",
    AssetPotentials.OFFENSIVE_FORMATION,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 223,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
      });
    },
  ),
);

// -----------------------
G_THREE.push(
  makeWeaponThree(
    "Gold Primm Sword",
    AssetPotentials.RECYCLER_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 223,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
      });
    },
  ),
);

// -----------------------
G_THREE.push(
  makeWeaponThree(
    "Glissen Series",
    AssetPotentials.VALOROUS_UNIT,
    (ctx: ActionContext): StatObject => {
      let stat: StatObject = statObject({
        [StatEnum.CORE_ATTACK]: 225,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
        [StatEnum.ADV_OFF_DAMAGE_UP]: 1.1,
      });

      if (ctx.target === undefined) {
        return stat;
      }

      if (ctx.target.isWeakToLightning) {
        stat = StatObject.setStat(
          stat,
          StatEnum.ADV_OFF_DAMAGE_UP,
          1.15,
        );
      }
      return stat;
    },
  ),
);

// -----------------------
G_THREE.push(
  makeWeaponThree(
    "Frostel Series",
    AssetPotentials.VALOROUS_UNIT,
    (ctx: ActionContext): StatObject => {
      let stat: StatObject = statObject({
        [StatEnum.CORE_ATTACK]: 225,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
        [StatEnum.ADV_OFF_DAMAGE_UP]: 1.1,
      });

      if (ctx.target === undefined) {
        return stat;
      }

      if (ctx.target.isWeakToIce) {
        stat = StatObject.setStat(
          stat,
          StatEnum.ADV_OFF_DAMAGE_UP,
          1.15,
        );
      }
      return stat;
    },
  ),
);

// -----------------------
G_THREE.push(
  makeWeaponThree(
    "Renaissa Series",
    AssetPotentials.DYNAMO_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 224,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);
