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
  level_required: number,
  potential: Potential,
  getAwareStatObject: (ctx: ActionContext | null) => StatObject,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeaponRarity.R_FOUR,
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
    11,
    AssetPotentials.DYNAMO_UNIT,
    (_: ActionContext | null): StatObject => {
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
    14,
    AssetPotentials.MUSTERED_MIGHT_UNIT,
    (_: ActionContext | null): StatObject => {
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
    14,
    AssetPotentials.BASTION_UNIT,
    (_: ActionContext | null): StatObject => {
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
    14,
    AssetPotentials.MEDITATION_UNIT,
    (_: ActionContext | null): StatObject => {
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
    15,
    AssetPotentials.BERSERK_UNIT,
    (_: ActionContext | null): StatObject => {
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
    15,
    AssetPotentials.SOULSPRING_UNIT,
    (_: ActionContext | null): StatObject => {
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
    14,
    AssetPotentials.VALOROUS_UNIT,
    (ctx: ActionContext | null): StatObject => {
      const stat = statObject({
        [StatEnum.CORE_ATTACK]: 240,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
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
