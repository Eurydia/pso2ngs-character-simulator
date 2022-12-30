import { StatEnum } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";

import GroupEnum from "../groupEnum";
import weapon, { Weapon } from "../weapon";

const data: Weapon[] = [];

const GROWTH_RATE: [number, number][] = [
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
  stats: Partial<{ [K in StatEnum]: number }>,
): Weapon => {
  return weapon(
    name,
    GroupEnum.R_FOUR,
    potential,
    GROWTH_RATE,
    stats,
  );
};

// -----------------------
data.push(
  makeWeaponFour("Resurgia Series", AssetPotentials.DYNAMO_UNIT, {
    [StatEnum.CORE_ATTACK]: 240,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponFour(
    "Cattleya Series",
    AssetPotentials.MUSTERED_MIGHT_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 242,
      [StatEnum.ADV_OFF_FLOOR]: 1.75,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponFour("Foursis Series", AssetPotentials.BASTION_UNIT, {
    [StatEnum.CORE_ATTACK]: 242,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponFour("Vialto Series", AssetPotentials.MEDITATION_UNIT, {
    [StatEnum.CORE_ATTACK]: 242,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponFour("Straga Series", AssetPotentials.BERSERK_UNIT, {
    [StatEnum.CORE_ATTACK]: 243,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponFour("Evolcoat Series", AssetPotentials.SOULSPRING_UNIT, {
    [StatEnum.CORE_ATTACK]: 242,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponFour("Flamel Series", AssetPotentials.VALOROUS_UNIT, {
    [StatEnum.CORE_ATTACK]: 240,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
    [StatEnum.ADV_OFF_DAMAGE_DARK]: 1.1,
    [StatEnum.ADV_OFF_DAMAGE_FIRE]: 1.15,
    [StatEnum.ADV_OFF_DAMAGE_ICE]: 1.1,
    [StatEnum.ADV_OFF_DAMAGE_LIGHTNING]: 1.1,
    [StatEnum.ADV_OFF_DAMAGE_LIGHT]: 1.1,
    [StatEnum.ADV_OFF_DAMAGE_WIND]: 1.1,
  }),
);

export default data;
