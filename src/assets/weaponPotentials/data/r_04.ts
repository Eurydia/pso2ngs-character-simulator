import { StatEnum } from "../../stat";
import GroupEnum from "../groupEnum";
import weapon, { Weapon } from "../weaponPotential";

const data: Weapon[] = [];

const GROWTH_RATE: [number, number][] = [
  [10, 10],
  [20, 20],
  [30, 30],
  [40, 40],
  [50, 108],
  [60, 267],
];

const makeWeaponRFour = (
  name: string,
  stats: Partial<{ [K in StatEnum]: number }>,
): Weapon => {
  return weapon(name, GroupEnum.R_FOUR, GROWTH_RATE, stats);
};

// -----------------------
data.push(
  makeWeaponRFour("Resurgia Series", {
    [StatEnum.CORE_ATTACK]: 240,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFour("Cattleya Series", {
    [StatEnum.CORE_ATTACK]: 242,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFour("Foursis Series", {
    [StatEnum.CORE_ATTACK]: 242,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFour("Vialto Series", {
    [StatEnum.CORE_ATTACK]: 242,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFour("Straga Series", {
    [StatEnum.CORE_ATTACK]: 243,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFour("Evolcoat Series", {
    [StatEnum.CORE_ATTACK]: 242,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFour("Flamel Series", {
    [StatEnum.CORE_ATTACK]: 240,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
    [StatEnum.ADV_OFF_DAMAGE]: 1.15,
  }),
);

data.push(
  makeWeaponRFour("* Inactive Flamel Series", {
    [StatEnum.CORE_ATTACK]: 240,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
    [StatEnum.ADV_OFF_DAMAGE]: 1.1,
  }),
);

export default data;
