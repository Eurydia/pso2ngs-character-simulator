import { StatEnum, statObject } from "../../stat";
import { Potential, AssetPotentials } from "../../potentials";

import { GroupEnumWeapon } from "../groupEnum";
import { weapon, Weapon } from "../weapon";

export const G_ONE: Weapon[] = [];

const GROWTH_DATA: [number, number][] = [
  [10, 22],
  [20, 46],
  [30, 63],
  [40, 82],
  [50, 161],
  [60, 347],
];

const makeWeaponOne = (
  name: string,
  potential: Potential,
  stat: Partial<{ [K in StatEnum]: number }>,
): Weapon => {
  return weapon(
    name,
    GroupEnumWeapon.R_ONE,
    potential,
    GROWTH_DATA,
    (_) => {
      return statObject(stat);
    },
  );
};

// -----------------------
G_ONE.push(
  makeWeaponOne("Primm Series", AssetPotentials.RECYCLER_UNIT, {
    [StatEnum.CORE_ATTACK]: 177,
    [StatEnum.ADV_OFF_FLOOR]: 1.7,
  }),
);
