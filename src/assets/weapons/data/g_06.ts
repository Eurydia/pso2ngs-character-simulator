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
  base_attack: number,
  level_required: number,
  potential: Potential,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeaponRarity.R_SIX,
    base_attack,
    60,
    level_required,
    potential,
    GROWTH_DATA,
    getAwareStatObject,
  );
};

// -----------------------
G_SIX.push(
  makeWeaponSix(
    "Evoleclipse Series",
    346,
    40,
    AssetPotentials.ELUSIVE_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_SIX.push(
  makeWeaponSix(
    "Sechetyl Series",
    350,
    45,
    AssetPotentials.TRAMPLE_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_SIX.push(
  makeWeaponSix(
    "Rokz Roughewn Series",
    353,
    52,
    AssetPotentials.REVOLUTIONARY_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_SIX.push(
  makeWeaponSix(
    "Rokz Sixiemes Series",
    353,
    52,
    AssetPotentials.DESPERATION_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_SIX.push(
  makeWeaponSix(
    "Rokz Curva Series",
    353,
    52,
    AssetPotentials.STACCATO_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_SIX.push(
  makeWeaponSix(
    "Evolorbit Series",
    355,
    53,
    AssetPotentials.ILLUSORY_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);

// -----------------------
G_SIX.push(
  makeWeaponSix(
    "Codeck Series",
    351,
    40,
    AssetPotentials.IMPERVIOUS_UNIT,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.ADV_OFF_FLOOR]: 1.75,
      });
    },
  ),
);
