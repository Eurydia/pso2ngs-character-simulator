import { StatEnum, StatObject, statObject } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";

import { GroupEnumWeaponRarity } from "../groupEnum";
import { weapon, Weapon } from "../weapon";
import { ActionContext } from "../../../contexts/ContextAction";

export const G_FIVE: Weapon[] = [];

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
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeaponRarity.R_FIVE,
    potential,
    GROWTH_DATA,
    getAwareStatObject,
  );
};

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Quintel Series",
    AssetPotentials.FORTRESS_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 277,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Gothica Series",
    AssetPotentials.REINVIGORATING_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 277,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Fivla Series",
    AssetPotentials.FOCUSED_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 277,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Greaga Series",
    AssetPotentials.FIGHTING_SPIRIT_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 280,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Kukuhroziat Series",
    AssetPotentials.UNASSAILABLE_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 280,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Relik Vigorous Series",
    AssetPotentials.VIGOROUS_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 284,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Relik Explosive Series",
    AssetPotentials.EXPLOSIVE_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 284,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Relik Harmonious Series",
    AssetPotentials.HARMONIOUS_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 284,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Relik Imbued Series",
    AssetPotentials.IMBUED_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 284,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Cinquem Series",
    AssetPotentials.VIRTUOSO_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 293,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Tempesta Series",
    AssetPotentials.VALOROUS_UNIT,
    (ctx: ActionContext): StatObject => {
      let stat: StatObject = statObject({
        [StatEnum.CORE_ATTACK]: 263,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
        [StatEnum.ADV_OFF_DAMAGE_UP]: 1.1,
      });
      if (!ctx.target.isWeakToWind) {
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
G_FIVE.push(
  makeWeaponFive(
    "Lumiere Series",
    AssetPotentials.VALOROUS_UNIT,
    (ctx: ActionContext): StatObject => {
      let stat: StatObject = statObject({
        [StatEnum.CORE_ATTACK]: 263,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
        [StatEnum.ADV_OFF_DAMAGE_UP]: 1.1,
      });
      if (!ctx.target.isWeakToLight) {
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
G_FIVE.push(
  makeWeaponFive(
    "Obscura Series",
    AssetPotentials.VALOROUS_UNIT,
    (ctx: ActionContext): StatObject => {
      let stat: StatObject = statObject({
        [StatEnum.CORE_ATTACK]: 263,
        [StatEnum.ADV_OFF_FLOOR]: 1.7,
        [StatEnum.ADV_OFF_DAMAGE_UP]: 1.1,
      });
      if (!ctx.target.isWeakToDark) {
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
