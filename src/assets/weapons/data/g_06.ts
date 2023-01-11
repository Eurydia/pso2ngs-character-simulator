import { StatEnum, StatObject, statObject } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";
import { GroupEnumWeaponRarity } from "../groupEnum";
import { weapon, Weapon } from "../weapon";
import { ActionContext } from "../../ContextAction";

export const G_SIX: Weapon[] = [];

const GROWTH_DATA: [number, number][] = [
  [10, 10],
  [20, 25],
  [30, 55],
  [40, 85],
  [50, 125],
  [60, 183],
];

const makeWeaponSix = (
  name: string,
  potential: Potential,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeaponRarity.R_SIX,
    potential,
    GROWTH_DATA,
    getAwareStatObject,
  );
};

// -----------------------
G_SIX.push(
  makeWeaponSix(
    "Evoleclipse Series",
    AssetPotentials.ELUSIVE_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 346,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_SIX.push(
  makeWeaponSix(
    "Sechetyl Series",
    AssetPotentials.TRAMPLE_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 350,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_SIX.push(
  makeWeaponSix(
    "Rokz Roughewn Series",
    AssetPotentials.REVOLUTIONARY_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 353,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_SIX.push(
  makeWeaponSix(
    "Rokz Sixiemes Series",
    AssetPotentials.DESPERATION_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 353,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_SIX.push(
  makeWeaponSix(
    "Rokz Curva Series",
    AssetPotentials.STACCATO_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 353,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_SIX.push(
  makeWeaponSix(
    "Evolorbit Series",
    AssetPotentials.ILLUSORY_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 355,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_SIX.push(
  makeWeaponSix(
    "Codeck Series",
    AssetPotentials.IMPERVIOUS_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_ATTACK]: 351,
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);
