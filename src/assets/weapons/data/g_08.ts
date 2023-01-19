import { StatEnum, StatObject, statObject } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";
import { ActionContext } from "../../ContextAction";

import { GroupEnumWeaponRarity } from "../groupEnum";
import { weapon, Weapon } from "../weapon";

export const G_EIGHT: Weapon[] = [];

const GROWTH_DATA: [number, number][] = [
  [10, 30],
  [20, 60],
  [30, 90],
  [40, 125],
  [50, 165],
];

const makeWeaponEight = (
  name: string,
  base_attack: number,
  level_required: number,
  potential: Potential,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeaponRarity.R_EIGHT,
    base_attack,
    50,
    level_required,
    potential,
    GROWTH_DATA,
    getAwareStatObject,
  );
};

// -----------------------
G_EIGHT.push(
  makeWeaponEight(
    "Primm Libra Series",
    436,
    55,
    AssetPotentials.SOOTHING_UNIT,
    (ctx: ActionContext): StatObject => {
      const stat: StatObject = statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
        [StatEnum.ADV_OFF_DAMAGE_UP]: 1.1,
      });
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
G_EIGHT.push(
  makeWeaponEight(
    "Effulgent Series",
    446,
    60,
    AssetPotentials.BLITZ_UNIT,
    (ctx: ActionContext): StatObject => {
      const stat: StatObject = statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
        [StatEnum.ADV_OFF_DAMAGE_UP]: 1.1,
      });
      if (!ctx.target.isWeakToFire) {
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
G_EIGHT.push(
  makeWeaponEight(
    "Tenebrous Series",
    448,
    60,
    AssetPotentials.BLITZ_UNIT,
    (ctx: ActionContext): StatObject => {
      const stat: StatObject = statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
        [StatEnum.ADV_OFF_DAMAGE_UP]: 1.1,
      });
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
G_EIGHT.push(
  makeWeaponEight(
    "Kouklophis Series",
    520,
    62,
    AssetPotentials.INSTANT_DEATH_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
      });
    },
  ),
);

// -----------------------
G_EIGHT.push(
  makeWeaponEight(
    "Gunblaze Series",
    526,
    65,
    AssetPotentials.FLAWLESS_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
      });
    },
  ),
);
