import { StatEnum, statObject, StatObject } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";

import { GroupEnumWeaponRarity } from "../groupEnum";
import { weapon, Weapon } from "../weapon";
import { ActionContext } from "../../ContextAction";

export const G_FOUR: Weapon[] = [];

const GROWTH_DATA: [number, number][] = [
  [10, 10],
  [20, 20],
  [30, 30],
  [40, 40],
  [50, 108],
  [60, 267],
];

const makeWeaponFour = (
  name: string,
  base_attack: number,
  level_required: number,
  potential: Potential,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeaponRarity.R_FOUR,
    base_attack,
    60,
    level_required,
    potential,
    GROWTH_DATA,
    getAwareStatObject,
  );
};

// -----------------------
G_FOUR.push(
  makeWeaponFour(
    "Resurgia Series",
    240,
    11,
    AssetPotentials.DYNAMO_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FOUR.push(
  makeWeaponFour(
    "Cattleya Series",
    242,
    14,
    AssetPotentials.MUSTERED_MIGHT_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FOUR.push(
  makeWeaponFour(
    "Foursis Series",
    242,
    14,
    AssetPotentials.BASTION_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FOUR.push(
  makeWeaponFour(
    "Vialto Series",
    242,
    14,
    AssetPotentials.MEDITATION_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FOUR.push(
  makeWeaponFour(
    "Straga Series",
    243,
    15,
    AssetPotentials.BERSERK_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FOUR.push(
  makeWeaponFour(
    "Evolcoat Series",
    242,
    15,
    AssetPotentials.SOULSPRING_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FOUR.push(
  makeWeaponFour(
    "Flamel Series",
    240,
    14,
    AssetPotentials.VALOROUS_UNIT,
    (ctx: ActionContext): StatObject => {
      const stat = statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
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
