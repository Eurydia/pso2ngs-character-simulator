import { StatObject } from "../../../types";
import { StatEnum } from "../../stat";
import GroupEnum from "../groupEnum";
import weapon, { Weapon } from "../weapon";

const data: Weapon[] = [];

const GROWTH_RATE: [number, number][] = [
  [10, 30],
  [20, 60],
  [30, 90],
  [40, 136],
  [50, 186],
];

const makeWeaponRSeven = (
  name: string,
  stats: StatObject,
): Weapon => {
  return weapon(name, GroupEnum.R_SEVEN, GROWTH_RATE, stats);
};

// -----------------------
data.push(
  makeWeaponRSeven("Kaizaar Mk. I Series", {
    [StatEnum.CORE_ATTACK]: 465,
    [StatEnum.ADV_OFF_FLOOR]: 1.5,
  }),
);

// -----------------------
data.push(
  makeWeaponRSeven("Crystia Series", {
    [StatEnum.CORE_ATTACK]: 473,
    [StatEnum.ADV_OFF_FLOOR]: 1.5,
  }),
);

// -----------------------
data.push(
  makeWeaponRSeven("Rugged Series", {
    [StatEnum.CORE_ATTACK]: 490,
    [StatEnum.ADV_OFF_FLOOR]: 1.5,
  }),
);

// -----------------------
data.push(
  makeWeaponRSeven("Kaizaar Series", {
    [StatEnum.CORE_ATTACK]: 485,
    [StatEnum.ADV_OFF_FLOOR]: 1.5,
  }),
);

// -----------------------
data.push(
  makeWeaponRSeven("Obsidia Series", {
    [StatEnum.CORE_ATTACK]: 488,
    [StatEnum.ADV_OFF_FLOOR]: 1.5,
  }),
);

export default data;
