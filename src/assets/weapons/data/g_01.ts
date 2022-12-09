import { StatEnum } from "../../stat";
import { Potential, AssetPotentials } from "../../potentials";
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

const makeWeaponOne = (
  name: string,
  potential: Potential,
  stats: Partial<{ [K in StatEnum]: number }>,
): Weapon => {
  return weapon(name, GroupEnum.R_ONE, potential, GROWTH_RATE, stats);
};

// -----------------------
data.push(
  makeWeaponOne("Primm Series", AssetPotentials.RECYCLER_UNIT, {
    [StatEnum.CORE_ATTACK]: 177,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
  }),
);

export default data;
