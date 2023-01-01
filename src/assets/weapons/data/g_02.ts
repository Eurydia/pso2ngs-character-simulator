import { StatEnum, statObject } from "../../stat";
import { AssetPotentials, Potential } from "../../potentials";

import { GroupEnumWeapon } from "../groupEnum";
import { weapon, Weapon } from "../weapon";

export const g_two: Weapon[] = [];

const GROWTH_DATA: [number, number][] = [
  [10, 16],
  [20, 33],
  [30, 50],
  [40, 69],
  [50, 143],
  [60, 329],
];

const makeWeaponTwo = (
  name: string,
  potential: Potential,
  stat: Partial<{ [K in StatEnum]: number }>,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeapon.R_TWO,
    potential,
    GROWTH_DATA,
    (_) => statObject(stat),
  );
};

// -----------------------
g_two.push(
  makeWeaponTwo("Tzvia Series", AssetPotentials.INDOMITABLE_UNIT, {
    [StatEnum.CORE_ATTACK]: 195,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
  }),
);

// -----------------------
g_two.push(
  makeWeaponTwo("Silver Primm Sword", AssetPotentials.RECYCLER_UNIT, {
    [StatEnum.CORE_ATTACK]: 195,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
  }),
);

// -----------------------
g_two.push(
  makeWeaponTwo("N-Exp Weapon", AssetPotentials.RECYCLER_UNIT, {
    [StatEnum.CORE_ATTACK]: 195,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
  }),
);
