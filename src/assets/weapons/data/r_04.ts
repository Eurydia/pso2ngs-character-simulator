import { StatEnum } from "../../stat";
import GroupEnum from "../groupEnum";
import weapon, { Weapon } from "../weapon";

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
  base_attack: number,
  stats: Partial<{ [K in StatEnum]: number }>,
): Weapon => {
  return weapon(
    name,
    base_attack,
    GroupEnum.R_FOUR,
    GROWTH_RATE,
    stats,
  );
};

// -----------------------
data.push(
  makeWeaponRFour("Resurgia Series", 240, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFour("Cattleya Series", 242, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFour("Foursis Series", 242, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFour("Vialto Series", 242, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFour("Straga Series", 243, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFour("Evolcoat Series", 242, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRFour("Flamel Series", 240, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
    [StatEnum.ADV_OFF_DAMAGE]: 1.15,
  }),
);

data.push(
  makeWeaponRFour("* Inactive Flamel Series", 240, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
    [StatEnum.ADV_OFF_DAMAGE]: 1.1,
  }),
);

export default data;
