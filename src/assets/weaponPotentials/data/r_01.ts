import { StatEnum } from "../../stat";
import GroupEnum from "../groupEnum";
import weapon, { Weapon } from "../weaponPotential";

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
  stats: Partial<{ [K in StatEnum]: number }>,
): Weapon => {
  return weapon(name, GroupEnum.R_ONE, GROWTH_RATE, stats);
};

// -----------------------
data.push(
  makeWeaponROne("Primm Series", {
    [StatEnum.CORE_ATTACK]: 177,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
  }),
);

export default data;
