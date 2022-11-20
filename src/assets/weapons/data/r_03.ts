import { StatEnum } from "../../stat";
import GroupEnum from "../groupEnum";
import weapon, { Weapon } from "../weapon";

const data: Weapon[] = [];

const GROWTH_RATE: [number, number][] = [
  [10, 10],
  [20, 21],
  [30, 32],
  [40, 47],
  [50, 115],
  [60, 301],
];

const makeWeaponRThree = (
  name: string,
  base_attack: number,
  stats: Partial<{ [K in StatEnum]: number }>,
): Weapon => {
  return weapon(
    name,
    base_attack,
    GroupEnum.R_THREE,
    GROWTH_RATE,
    stats,
  );
};

// -----------------------
data.push(
  makeWeaponRThree("Theseus Series", 223, {
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
  }),
);

// -----------------------
data.push(
  makeWeaponRThree("Trois De Series", 223, {
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
  }),
);

// -----------------------
data.push(
  makeWeaponRThree("Gold Primm Sword", 223, {
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
  }),
);

// -----------------------
data.push(
  makeWeaponRThree("Glissen Series", 225, {
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.15,
  }),
);

data.push(
  makeWeaponRThree("* Inactive Glissen Series", 225, {
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.1,
  }),
);

// -----------------------
data.push(
  makeWeaponRThree("Frostel Series", 225, {
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.15,
  }),
);

data.push(
  makeWeaponRThree("* Inactive Frostel Series", 225, {
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
    [StatEnum.ADV_OFF_DAMAGE]: 1.1,
  }),
);

data.push(
  makeWeaponRThree("Renaissa Series", 224, {
    [StatEnum.ADV_OFF_FLOOR]: 1.75,
  }),
);

export default data;
