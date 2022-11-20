import { StatEnum } from "../../stat";
import GroupEnum from "../groupEnum";
import weapon, { Weapon } from "../weapon";

const data: Weapon[] = [];

const GROWTH_RATE: [number, number][] = [
  [10, 10],
  [20, 25],
  [30, 55],
  [40, 85],
  [50, 125],
  [60, 183],
];

const makeWeaponRSix = (
  name: string,
  base_attack: number,
  stats: Partial<{ [K in StatEnum]: number }>,
): Weapon => {
  return weapon(
    name,
    base_attack,
    GroupEnum.R_SIX,
    GROWTH_RATE,
    stats,
  );
};

// -----------------------
data.push(
  makeWeaponRSix("Evoleclipse Series", 346, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRSix("Sechetyl Series", 350, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRSix("Rokz Roughewn Series", 353, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRSix("Rokz Sixiemes Series", 353, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRSix("Rokz Curva Series", 353, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRSix("Evolorbit Series", 355, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

// -----------------------
data.push(
  makeWeaponRSix("Codeck Series", 351, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

export default data;
