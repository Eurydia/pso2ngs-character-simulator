import { StatEnum, StatObject, statObject } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";
import { GroupEnumWeaponRarity } from "../groupEnum";
import { weapon, Weapon } from "../weapon";
import { ActionContext } from "../../ContextAction";

export const G_SEVEN: Weapon[] = [];

const GROWTH_DATA: [number, number][] = [
  [10, 30],
  [20, 60],
  [30, 90],
  [40, 136],
  [50, 186],
];

const makeWeaponSeven = (
  name: string,
  base_attack: number,
  level_required: number,
  potential: Potential,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeaponRarity.R_SEVEN,
    base_attack,
    50,
    level_required,
    potential,
    GROWTH_DATA,
    getAwareStatObject,
  );
};

// -----------------------
G_SEVEN.push(
  makeWeaponSeven(
    "Kaizaar Mk. I Series",
    465,
    53,
    AssetPotentials.TEMPERED_FORM,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
      });
    },
  ),
);

// -----------------------
G_SEVEN.push(
  makeWeaponSeven(
    "Crystia Series",
    473,
    55,
    AssetPotentials.ABSORPTION_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
      });
    },
  ),
);

// -----------------------
G_SEVEN.push(
  makeWeaponSeven(
    "Rugged Pursuit Series",
    490,
    57,
    AssetPotentials.PURSUIT_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
      });
    },
  ),
);

// -----------------------
G_SEVEN.push(
  makeWeaponSeven(
    "Rugged Citadel Series",
    490,
    57,
    AssetPotentials.CITADEL_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
      });
    },
  ),
);

// -----------------------
G_SEVEN.push(
  makeWeaponSeven(
    "Rugged Gyrating Series",
    490,
    57,
    AssetPotentials.GYRATING_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
      });
    },
  ),
);

// -----------------------
G_SEVEN.push(
  makeWeaponSeven(
    "Kaizaar Series",
    485,
    60,
    AssetPotentials.TEMPERED_FORM,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
      });
    },
  ),
);

// -----------------------
G_SEVEN.push(
  makeWeaponSeven(
    "Obsidia Series",
    488,
    61,
    AssetPotentials.CORUSCATING_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
      });
    },
  ),
);
