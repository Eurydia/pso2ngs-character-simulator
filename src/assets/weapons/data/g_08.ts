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
  level_required: number,
  potential: Potential,
  getAwareStatObject: (ctx: ActionContext | null) => StatObject,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeaponRarity.R_EIGHT,
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
    55,
    AssetPotentials.SOOTHING_UNIT,
    (ctx: ActionContext | null): StatObject => {
      const stat: StatObject = statObject({
        [StatEnum.CORE_ATTACK]: 436,
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
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
G_EIGHT.push(
  makeWeaponEight(
    "Effulgent Series",
    60,
    AssetPotentials.BLITZ_UNIT,
    (ctx: ActionContext | null): StatObject => {
      const stat: StatObject = statObject({
        [StatEnum.CORE_ATTACK]: 446,
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
        [StatEnum.ADV_OFF_DAMAGE_UP]: 1.1,
      });
      if (ctx === null) {
        return stat;
      }
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
    60,
    AssetPotentials.BLITZ_UNIT,
    (ctx: ActionContext | null): StatObject => {
      const stat: StatObject = statObject({
        [StatEnum.CORE_ATTACK]: 448,
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
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
G_EIGHT.push(
  makeWeaponEight(
    "Kouklophis Series",
    62,
    AssetPotentials.INSTANT_DEATH_UNIT,
    (_: ActionContext | null): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 520,
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
      });
    },
  ),
);

// -----------------------
G_EIGHT.push(
  makeWeaponEight(
    "Gunblaze Series",
    65,
    AssetPotentials.FLAWLESS_UNIT,
    (_: ActionContext | null): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 526,
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
      });
    },
  ),
);
