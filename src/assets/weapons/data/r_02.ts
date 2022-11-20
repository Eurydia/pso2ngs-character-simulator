import { StatEnum } from "../../stat";
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
  base_attack: number,
  stats: Partial<{ [K in StatEnum]: number }>,
): Weapon => {
  return weapon(
    name,
    base_attack,
    GroupEnum.R_TWO,
    GROWTH_RATE,
    stats,
  );
};

// -----------------------
data.push(
  makeWeaponRTwo("Tzvia Series", 195, {
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
  }),
);

// -----------------------
data.push(
  makeWeaponRTwo("Silver Primm Sword", 195, {
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
  }),
);

// -----------------------
data.push(
  makeWeaponRTwo("N-Exp Weapon", 195, {
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
  }),
);

export default data;
