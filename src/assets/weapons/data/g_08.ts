import { StatEnum, StatObject, statObject } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";
import { GroupEnumWeaponRarity } from "../groupEnum";
import { weapon, Weapon } from "../weapon";
import { ActionContext } from "../../ContextAction";

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
  potential: Potential,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeaponRarity.R_EIGHT,
    potential,
    GROWTH_DATA,
    getAwareStatObject,
  );
};

// -----------------------
G_EIGHT.push(
  makeWeaponEight(
    "Primm Libra Series",
    AssetPotentials.SOOTHING_UNIT,
    (ctx: ActionContext): StatObject => {
      let stat: StatObject = statObject({
        [StatEnum.CORE_ATTACK]: 436,
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
    AssetPotentials.BLITZ_UNIT,
    (ctx: ActionContext): StatObject => {
      let stat: StatObject = statObject({
        [StatEnum.CORE_ATTACK]: 446,
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
    AssetPotentials.BLITZ_UNIT,
    (ctx: ActionContext): StatObject => {
      let stat: StatObject = statObject({
        [StatEnum.CORE_ATTACK]: 448,
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
    AssetPotentials.INSTANT_DEATH_UNIT,
    (_: ActionContext): StatObject => {
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
    AssetPotentials.FLAWLESS_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 526,
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
      });
    },
  ),
);
