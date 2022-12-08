import { StatEnum } from "../../stat";
import {
  WeaponPotential,
  AssetPotentials,
} from "../../weaponPotentials";
import GroupEnum from "../groupEnum";
import weapon, { Weapon } from "../weapon";

const data: Weapon[] = [];

const GROWTH_RATE: [number, number][] = [
  [10, 22],
  [20, 46],
  [30, 63],
  [40, 82],
  [50, 161],
  [60, 347],
];

const makeWeaponROne = (
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
    GroupEnum.R_ONE,
    potential,
    GROWTH_RATE,
    stats,
  );
};

// -----------------------
data.push(
  makeWeaponROne("Primm Series", AssetPotentials.RECYCLER_UNIT, {
    [StatEnum.CORE_ATTACK]: 177,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
  }),
);

export default data;
