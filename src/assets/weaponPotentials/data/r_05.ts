import { StatEnum } from "../../stat";
import GroupEnum from "../groupEnum";
import weapon, { Weapon } from "../weaponPotential";

const data: Weapon[] = [];

const GROWTH_RATE: [number, number][] = [
  [10, 10],
  [20, 20],
  [30, 30],
  [40, 40],
  [50, 92],
  [60, 238],
];

const makeWeaponRFive = (
  name: string,
  stats: Partial<{ [K in StatEnum]: number }>,
): Weapon => {
  return weapon(name, GroupEnum.R_FIVE, GROWTH_RATE, stats);
};

// -----------------------
data.push(
  makeWeaponRFive("Quintel Series", {
    [StatEnum.CORE_ATTACK]: 277,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Gothica Series", {
    [StatEnum.CORE_ATTACK]: 277,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Fivla Series", {
    [StatEnum.CORE_ATTACK]: 277,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Greaga Series", {
    [StatEnum.CORE_ATTACK]: 280,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Kukuhroziat Series", {
    [StatEnum.CORE_ATTACK]: 280,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Relik Vigorous Series", {
    [StatEnum.CORE_ATTACK]: 284,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Relik Explosive Series", {
    [StatEnum.CORE_ATTACK]: 284,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Relik Harmonious Series", {
    [StatEnum.CORE_ATTACK]: 284,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Relik Imbued Series", {
    [StatEnum.CORE_ATTACK]: 284,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Cinquem Series", {
    [StatEnum.CORE_ATTACK]: 293,
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Tempesta Series", {
    [StatEnum.CORE_ATTACK]: 263,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.15,
  }),
);

data.push(
  makeWeaponRFive("* Inactive Tempesta Series", {
    [StatEnum.CORE_ATTACK]: 263,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.1,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Lumiere Series", {
    [StatEnum.CORE_ATTACK]: 263,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.15,
  }),
);

data.push(
  makeWeaponRFive("* Inactive Lumiere Series", {
    [StatEnum.CORE_ATTACK]: 263,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.1,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Obscura Series", {
    [StatEnum.CORE_ATTACK]: 263,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.15,
  }),
);

data.push(
  makeWeaponRFive("* Inactive Obscura Series", {
    [StatEnum.CORE_ATTACK]: 263,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.1,
  }),
);

export default data;
