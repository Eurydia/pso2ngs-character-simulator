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
  level_required: number,
  potential: Potential,
  getAwareStatObject: (ctx: ActionContext | null) => StatObject,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeaponRarity.R_THREE,
    60,
    level_required,
    potential,
    GROWTH_DATA,
    getAwareStatObject,
  );
};

// -----------------------
G_THREE.push(
  makeWeaponThree(
    "Theseus Series",
    8,
    AssetPotentials.DEFENSIVE_FORMATION,
    (_: ActionContext | null): StatObject => {
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
    8,
    AssetPotentials.OFFENSIVE_FORMATION,
    (_: ActionContext | null): StatObject => {
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
    10,
    AssetPotentials.RECYCLER_UNIT,
    (_: ActionContext | null): StatObject => {
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
    13,
    AssetPotentials.VALOROUS_UNIT,
    (ctx: ActionContext | null): StatObject => {
      const stat: StatObject = statObject({
        [StatEnum.CORE_ATTACK]: 225,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
        [StatEnum.ADV_OFF_DAMAGE_UP]: 1.1,
      });
      if (ctx === null) {
        return stat;
      }
      if (ctx.target.isWeakToLightning) {
        return stat;
      }
      return StatObject.setStat(
        stat,
        StatEnum.ADV_OFF_DAMAGE_UP,
        1.15,
      );
    },
  ),
);

// -----------------------
G_THREE.push(
  makeWeaponThree(
    "Frostel Series",
    13,
    AssetPotentials.VALOROUS_UNIT,
    (ctx: ActionContext | null): StatObject => {
      const stat: StatObject = statObject({
        [StatEnum.CORE_ATTACK]: 225,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
        [StatEnum.ADV_OFF_DAMAGE_UP]: 1.1,
      });
      if (ctx === null) {
        return stat;
      }
      if (!ctx.target.isWeakToIce) {
        return stat;
      }
      return StatObject.setStat(
        stat,
        StatEnum.ADV_OFF_DAMAGE_UP,
        1.15,
      );
    },
  ),
);

// -----------------------
G_THREE.push(
  makeWeaponThree(
    "Renaissa Series",
    1,
    AssetPotentials.DYNAMO_UNIT,
    (_: ActionContext | null): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 224,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);
