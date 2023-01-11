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
  potential: Potential,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeaponRarity.R_SEVEN,
    potential,
    GROWTH_DATA,
    getAwareStatObject,
  );
};

// -----------------------
G_SEVEN.push(
  makeWeaponSeven(
    "Kaizaar Mk. I Series",
    AssetPotentials.TEMPERED_FORM,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 465,
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
      });
    },
  ),
);

// -----------------------
G_SEVEN.push(
  makeWeaponSeven(
    "Crystia Series",
    AssetPotentials.ABSORPTION_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 473,
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
      });
    },
  ),
);

// -----------------------
G_SEVEN.push(
  makeWeaponSeven(
    "Rugged Pursuit Series",
    AssetPotentials.PURSUIT_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 490,
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
      });
    },
  ),
);

// -----------------------
G_SEVEN.push(
  makeWeaponSeven(
    "Rugged Citadel Series",
    AssetPotentials.CITADEL_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 490,
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
      });
    },
  ),
);

// -----------------------
G_SEVEN.push(
  makeWeaponSeven(
    "Rugged Gyrating Series",
    AssetPotentials.GYRATING_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 490,
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
      });
    },
  ),
);

// -----------------------
G_SEVEN.push(
  makeWeaponSeven(
    "Kaizaar Series",
    AssetPotentials.TEMPERED_FORM,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 485,
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
      });
    },
  ),
);

// -----------------------
G_SEVEN.push(
  makeWeaponSeven(
    "Obsidia Series",
    AssetPotentials.CORUSCATING_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 488,
        [StatEnum.ADV_OFF_FLOOR]: 1.5,
      });
    },
  ),
);
