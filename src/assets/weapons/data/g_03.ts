import { StatEnum } from "../../stat";
import {
  AssetPotentials,
  WeaponPotential,
} from "../../weaponPotentials";
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

const makeWeaponRThree = (
  name: string,
  potential: WeaponPotential,
  stats: Partial<{ [K in StatEnum]: number }>,
  inactive: boolean = false,
): Weapon => {
  let _name = name;
  if (inactive) {
    _name = `${name} (Inactive)`;
  }

  return weapon(
    _name,
    GroupEnum.R_THREE,
    potential,
    GROWTH_RATE,
    stats,
  );
};

// -----------------------
data.push(
  makeWeaponRThree(
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
  makeWeaponRThree(
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
  makeWeaponRThree(
    "Gold Primm Sword",
    AssetPotentials.RECYCLER_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 223,
      [StatEnum.ADV_OFF_FLOOR]: 1.7,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponRThree("Glissen Series", AssetPotentials.VALOROUS_UNIT, {
    [StatEnum.CORE_ATTACK]: 225,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.15,
  }),
);

data.push(
  makeWeaponRThree(
    "Glissen Series",
    AssetPotentials.VALOROUS_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 225,
      [StatEnum.ADV_OFF_FLOOR]: 1.7,
      [StatEnum.ADV_OFF_DAMAGE]: 1.1,
    },
    true,
  ),
);

// -----------------------
data.push(
  makeWeaponRThree("Frostel Series", AssetPotentials.VALOROUS_UNIT, {
    [StatEnum.CORE_ATTACK]: 225,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.15,
  }),
);

data.push(
  makeWeaponRThree(
    "Frostel Series",
    AssetPotentials.VALOROUS_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 225,
      [StatEnum.ADV_OFF_FLOOR]: 1.7,
      [StatEnum.ADV_OFF_DAMAGE]: 1.1,
    },
    true,
  ),
);

data.push(
  makeWeaponRThree("Renaissa Series", AssetPotentials.DYNAMO_UNIT, {
    [StatEnum.CORE_ATTACK]: 224,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

export default data;
