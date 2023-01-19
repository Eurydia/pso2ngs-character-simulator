import { StatEnum, StatObject, statObject } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";

import { GroupEnumWeaponRarity } from "../groupEnum";
import { weapon, Weapon } from "../weapon";
import { ActionContext } from "../../ContextAction";

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
  base_attack: number,
  level_required: number,
  potential: Potential,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeaponRarity.R_FIVE,
    base_attack,
    60,
    level_required,
    potential,
    GROWTH_DATA,
    getAwareStatObject,
  );
};

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Quintel Series",
    277,
    21,
    AssetPotentials.FORTRESS_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Gothica Series",
    277,
    21,
    AssetPotentials.REINVIGORATING_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Fivla Series",
    277,
    21,
    AssetPotentials.FOCUSED_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Greaga Series",
    280,
    27,
    AssetPotentials.FIGHTING_SPIRIT_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Kukuhroziat Series",
    280,
    27,
    AssetPotentials.UNASSAILABLE_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Relik Vigorous Series",
    284,
    31,
    AssetPotentials.VIGOROUS_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Relik Explosive Series",
    284,
    31,
    AssetPotentials.EXPLOSIVE_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Relik Harmonious Series",
    284,
    31,
    AssetPotentials.HARMONIOUS_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Relik Imbued Series",
    284,
    31,
    AssetPotentials.IMBUED_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Cinquem Series",
    293,
    36,
    AssetPotentials.VIRTUOSO_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FIVE.push(
  makeWeaponFive(
    "Tempesta Series",
    263,
    15,
    AssetPotentials.VALOROUS_UNIT,
    (ctx: ActionContext): StatObject => {
      const stat: StatObject = statObject({
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
    263,
    15,
    AssetPotentials.VALOROUS_UNIT,
    (ctx: ActionContext): StatObject => {
      const stat: StatObject = statObject({
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
    263,
    15,
    AssetPotentials.VALOROUS_UNIT,
    (ctx: ActionContext): StatObject => {
      const stat: StatObject = statObject({
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
