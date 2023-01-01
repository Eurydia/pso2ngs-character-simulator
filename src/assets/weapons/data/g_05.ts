import { StatEnum, StatObject, statObject } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";

import { GroupEnumWeapon } from "../groupEnum";
import { weapon, Weapon } from "../weapon";
import { ActionContext } from "../../context";

export const g_five: Weapon[] = [];

const GROWTH_DATA: [number, number][] = [
  [10, 10],
  [20, 20],
  [30, 30],
  [40, 40],
  [50, 92],
  [60, 238],
];

const makeWeaponFive = (
  name: string,
  potential: Potential,
  getStatObject: (ctx: ActionContext) => StatObject,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeapon.R_FIVE,
    potential,
    GROWTH_DATA,
    getStatObject,
  );
};

// -----------------------
g_five.push(
  makeWeaponFive(
    "Quintel Series",
    AssetPotentials.FORTRESS_UNIT,
    (_) => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 277,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
g_five.push(
  makeWeaponFive(
    "Gothica Series",
    AssetPotentials.REINVIGORATING_UNIT,
    (_) => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 277,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
g_five.push(
  makeWeaponFive(
    "Fivla Series",
    AssetPotentials.FOCUSED_UNIT,
    (_) => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 277,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
g_five.push(
  makeWeaponFive(
    "Greaga Series",
    AssetPotentials.FIGHTING_SPIRIT_UNIT,
    (_) => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 280,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
g_five.push(
  makeWeaponFive(
    "Kukuhroziat Series",
    AssetPotentials.UNASSAILABLE_UNIT,
    (_) => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 280,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
g_five.push(
  makeWeaponFive(
    "Relik Vigorous Series",
    AssetPotentials.VIGOROUS_UNIT,
    (_) => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 284,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
g_five.push(
  makeWeaponFive(
    "Relik Explosive Series",
    AssetPotentials.EXPLOSIVE_UNIT,
    (_) => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 284,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
g_five.push(
  makeWeaponFive(
    "Relik Harmonious Series",
    AssetPotentials.HARMONIOUS_UNIT,
    (_) => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 284,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
g_five.push(
  makeWeaponFive(
    "Relik Imbued Series",
    AssetPotentials.IMBUED_UNIT,
    (_) => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 284,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
g_five.push(
  makeWeaponFive(
    "Cinquem Series",
    AssetPotentials.VIRTUOSO_UNIT,
    (_) => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 293,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
g_five.push(
  makeWeaponFive(
    "Tempesta Series",
    AssetPotentials.VALOROUS_UNIT,
    (ctx) => {
      const stat: StatObject = statObject({
        [StatEnum.CORE_ATTACK]: 263,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
        [StatEnum.ADV_OFF_DAMAGE_UP]: 1.1,
      });

      if (ctx.target === undefined) {
        return stat;
      }

      if (ctx.target.isWeakToWind) {
        stat.setStat(StatEnum.ADV_OFF_DAMAGE_UP, 1.15);
      }

      return stat;
    },
  ),
);

// -----------------------
g_five.push(
  makeWeaponFive(
    "Lumiere Series",
    AssetPotentials.VALOROUS_UNIT,
    (ctx) => {
      const stat: StatObject = statObject({
        [StatEnum.CORE_ATTACK]: 263,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
        [StatEnum.ADV_OFF_DAMAGE_UP]: 1.1,
      });

      if (ctx.target === undefined) {
        return stat;
      }

      if (ctx.target.isWeakToLight) {
        stat.setStat(StatEnum.ADV_OFF_DAMAGE_UP, 1.15);
      }

      return stat;
    },
  ),
);

// -----------------------
g_five.push(
  makeWeaponFive(
    "Obscura Series",
    AssetPotentials.VALOROUS_UNIT,
    (ctx) => {
      const stat: StatObject = statObject({
        [StatEnum.CORE_ATTACK]: 263,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
        [StatEnum.ADV_OFF_DAMAGE_UP]: 1.1,
      });

      if (ctx.target === undefined) {
        return stat;
      }

      if (ctx.target.isWeakToDark) {
        stat.setStat(StatEnum.ADV_OFF_DAMAGE_UP, 1.15);
      }

      return stat;
    },
  ),
);
