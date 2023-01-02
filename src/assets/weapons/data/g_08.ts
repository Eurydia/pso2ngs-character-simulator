import { StatEnum, StatObject, statObject } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";
import { GroupEnumWeapon } from "../groupEnum";
import { weapon, Weapon } from "../weapon";
import { ActionContext } from "../../context";

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
  getStatObject: (ctx: ActionContext) => StatObject,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeapon.R_EIGHT,
    potential,
    GROWTH_DATA,
    getStatObject,
  );
};

// -----------------------
G_EIGHT.push(
  makeWeaponEight(
    "Primm Libra Series",
    AssetPotentials.SOOTHING_UNIT,
    (ctx) => {
      const stat: StatObject = statObject({
        [StatEnum.CORE_ATTACK]: 436,
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
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
G_EIGHT.push(
  makeWeaponEight(
    "Effulgent Series",
    AssetPotentials.BLITZ_UNIT,
    (ctx) => {
      const stat: StatObject = statObject({
        [StatEnum.CORE_ATTACK]: 446,
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
        [StatEnum.ADV_OFF_DAMAGE_UP]: 1.1,
      });

      if (ctx.target === undefined) {
        return stat;
      }

      if (ctx.target.isWeakToFire) {
        stat.setStat(StatEnum.ADV_OFF_DAMAGE_UP, 1.15);
      }

      return stat;
    },
  ),
);

// -----------------------
G_EIGHT.push(
  makeWeaponEight(
    "Tenebrous Series",
    AssetPotentials.BLITZ_UNIT,
    (ctx) => {
      const stat: StatObject = statObject({
        [StatEnum.CORE_ATTACK]: 448,
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
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
G_EIGHT.push(
  makeWeaponEight(
    "Kouklophis Series",
    AssetPotentials.INSTANT_DEATH_UNIT,
    (_) => {
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
    (_) => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 526,
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
      });
    },
  ),
);
