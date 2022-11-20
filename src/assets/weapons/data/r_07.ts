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
  base_attack: number,
  stats: Partial<{ [K in StatEnum]: number }>,
): Weapon => {
  return weapon(
    name,
    base_attack,
    GroupEnum.R_SEVEN,
    GROWTH_RATE,
    stats,
  );
};

// -----------------------
data.push(
  makeWeaponRSeven("Kaizaar Mk. I Series", 465, {
    [StatEnum.ADV_OFF_FLOOR]: 1.5,
  }),
);

// -----------------------
data.push(
  makeWeaponRSeven("Crystia Series", 473, {
    [StatEnum.ADV_OFF_FLOOR]: 1.5,
  }),
);

// -----------------------
data.push(
  makeWeaponRSeven("Rugged Series", 490, {
    [StatEnum.ADV_OFF_FLOOR]: 1.5,
  }),
);

// -----------------------
data.push(
  makeWeaponRSeven("Kaizaar Series", 485, {
    [StatEnum.ADV_OFF_FLOOR]: 1.5,
  }),
);

// -----------------------
data.push(
  makeWeaponRSeven("Obsidia Series", 488, {
    [StatEnum.ADV_OFF_FLOOR]: 1.5,
  }),
);

export default data;
