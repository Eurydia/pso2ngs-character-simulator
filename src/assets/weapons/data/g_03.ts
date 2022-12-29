import { StatEnum } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";

import GroupEnum from "../groupEnum";
import weapon, { Weapon } from "../weapon";

const data: Weapon[] = [];

const GROWTH_RATE: [number, number][] = [
  [10, 10],
  [20, 21],
  [30, 32],
  [40, 47],
  [50, 115],
  [60, 301],
];

const makeWeaponThree = (
  name: string,
  potential: Potential,
  stats: Partial<{ [K in StatEnum]: number }>,
): Weapon => {
  return weapon(
    name,
    GroupEnum.R_THREE,
    potential,
    GROWTH_RATE,
    stats,
  );
};

// -----------------------
data.push(
  makeWeaponThree(
    "Theseus Series",
    AssetPotentials.DEFENSIVE_FORMATION,
    {
      [StatEnum.CORE_ATTACK]: 223,
      [StatEnum.ADV_OFF_FLOOR]: 1.7,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponThree(
    "Trois De Series",
    AssetPotentials.OFFENSIVE_FORMATION,
    {
      [StatEnum.CORE_ATTACK]: 223,
      [StatEnum.ADV_OFF_FLOOR]: 1.7,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponThree("Gold Primm Sword", AssetPotentials.RECYCLER_UNIT, {
    [StatEnum.CORE_ATTACK]: 223,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
  }),
);

// -----------------------
data.push(
  makeWeaponThree("Glissen Series", AssetPotentials.VALOROUS_UNIT, {
    [StatEnum.CORE_ATTACK]: 225,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.15,
  }),
);

data.push(
  makeWeaponThree(
    "(Inactive) Glissen Series",
    AssetPotentials.VALOROUS_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 225,
      [StatEnum.ADV_OFF_FLOOR]: 1.7,
      [StatEnum.ADV_OFF_DAMAGE]: 1.1,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponThree("Frostel Series", AssetPotentials.VALOROUS_UNIT, {
    [StatEnum.CORE_ATTACK]: 225,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.15,
  }),
);

data.push(
  makeWeaponThree(
    "(Inactive) Frostel Series",
    AssetPotentials.VALOROUS_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 225,
      [StatEnum.ADV_OFF_FLOOR]: 1.7,
      [StatEnum.ADV_OFF_DAMAGE]: 1.1,
    },
  ),
);

data.push(
  makeWeaponThree("Renaissa Series", AssetPotentials.DYNAMO_UNIT, {
    [StatEnum.CORE_ATTACK]: 224,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

export default data;
