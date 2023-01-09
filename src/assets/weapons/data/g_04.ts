import { StatEnum, statObject, StatObject } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";

import { GroupEnumWeaponRarity } from "../groupEnum";
import { weapon, Weapon } from "../weapon";
import { ActionContext } from "../../context";

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
  potential: Potential,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeaponRarity.R_FOUR,
    potential,
    GROWTH_DATA,
    getAwareStatObject,
  );
};

// -----------------------
G_FOUR.push(
  makeWeaponFour(
    "Resurgia Series",
    AssetPotentials.DYNAMO_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 240,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FOUR.push(
  makeWeaponFour(
    "Cattleya Series",
    AssetPotentials.MUSTERED_MIGHT_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 242,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FOUR.push(
  makeWeaponFour(
    "Foursis Series",
    AssetPotentials.BASTION_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 242,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FOUR.push(
  makeWeaponFour(
    "Vialto Series",
    AssetPotentials.MEDITATION_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 242,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FOUR.push(
  makeWeaponFour(
    "Straga Series",
    AssetPotentials.BERSERK_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 243,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FOUR.push(
  makeWeaponFour(
    "Evolcoat Series",
    AssetPotentials.SOULSPRING_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 242,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_FOUR.push(
  makeWeaponFour(
    "Flamel Series",
    AssetPotentials.VALOROUS_UNIT,
    (ctx: ActionContext): StatObject => {
      let stat = statObject({
        [StatEnum.CORE_ATTACK]: 240,
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
