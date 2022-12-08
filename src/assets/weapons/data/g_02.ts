import { StatEnum } from "../../stat";
import {
  AssetPotentials,
  WeaponPotential,
} from "../../weaponPotentials";
import GroupEnum from "../groupEnum";
import weapon, { Weapon } from "../weapon";

const data: Weapon[] = [];

const GROWTH_RATE: [number, number][] = [
  [10, 16],
  [20, 33],
  [30, 50],
  [40, 69],
  [50, 143],
  [60, 329],
];

const makeWeaponRTwo = (
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
    GroupEnum.R_TWO,
    potential,
    GROWTH_RATE,
    stats,
  );
};

// -----------------------
data.push(
  makeWeaponRTwo("Tzvia Series", AssetPotentials.INDOMITABLE_UNIT, {
    [StatEnum.CORE_ATTACK]: 195,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
  }),
);

// -----------------------
data.push(
  makeWeaponRTwo(
    "Silver Primm Sword",
    AssetPotentials.RECYCLER_UNIT,
    {
      [StatEnum.CORE_ATTACK]: 195,
      [StatEnum.ADV_OFF_FLOOR]: 1.7,
    },
  ),
);

// -----------------------
data.push(
  makeWeaponRTwo("N-Exp Weapon", AssetPotentials.RECYCLER_UNIT, {
    [StatEnum.CORE_ATTACK]: 195,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
  }),
);

export default data;
