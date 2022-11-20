import { StatEnum } from "../../stat";
import GroupEnum from "../groupEnum";
import weapon, { Weapon } from "../weapon";

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
  base_attack: number,
  stats: Partial<{ [K in StatEnum]: number }>,
): Weapon => {
  return weapon(
    name,
    base_attack,
    GroupEnum.R_FIVE,
    GROWTH_RATE,
    stats,
  );
};

// -----------------------
data.push(
  makeWeaponRFive("Quintel Series", 277, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Gothica Series", 277, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Fivla Series", 277, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Greaga Series", 280, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Kukuhroziat Series", 280, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Relik Vigorous Series", 284, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Relik Explosive Series", 284, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Relik Harmonious Series", 284, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Relik Imbued Series", 284, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Cinquem Series", 293, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Tempesta Series", 263, {
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.15,
  }),
);

data.push(
  makeWeaponRFive("* Inactive Tempesta Series", 263, {
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.1,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Lumiere Series", 263, {
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.15,
  }),
);

data.push(
  makeWeaponRFive("* Inactive Lumiere Series", 263, {
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.1,
  }),
);

// -----------------------
data.push(
  makeWeaponRFive("Obscura Series", 263, {
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.15,
  }),
);

data.push(
  makeWeaponRFive("* Inactive Obscura Series", 263, {
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.1,
  }),
);

export default data;
