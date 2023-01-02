import { StatEnum, statObject } from "../../stat";

import { GroupEnumUnit } from "../groupEnum";
import { unit, Unit } from "../unit";

export const G_ONE: Unit[] = [];

const GROWTH_DATA: [number, number][] = [
  [10, 10],
  [20, 20],
  [30, 30],
  [40, 40],
  [50, 50],
  [60, 72],
];

const makeUnitOne = (
  name: string,
  stat: Partial<{ [K in StatEnum]: number }>,
): Unit => {
  return unit(name, GroupEnumUnit.R_ONE, GROWTH_DATA, (_) => {
    return statObject(stat);
  });
};

// -------------------------
G_ONE.push(
  makeUnitOne("Primm Armor", {
    [StatEnum.CORE_DEFENSE]: 8,
    [StatEnum.CORE_HP]: 10,
  }),
);
