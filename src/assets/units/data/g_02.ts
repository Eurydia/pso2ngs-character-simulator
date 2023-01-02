import { StatEnum, statObject } from "../../stat";
import { GroupEnumUnit } from "../groupEnum";
import { unit, Unit } from "../unit";

export const G_TWO: Unit[] = [];

const GROWTH_DATA: [number, number][] = [
  [10, 10],
  [20, 20],
  [30, 30],
  [40, 40],
  [50, 50],
  [60, 72],
];

const makeUnitTwo = (
  name: string,
  stat: Partial<{ [K in StatEnum]: number }>,
): Unit => {
  return unit(name, GroupEnumUnit.R_TWO, GROWTH_DATA, (_) => {
    return statObject(stat);
  });
};

// -------------------------
G_TWO.push(
  makeUnitTwo("Tzvia Armor", {
    [StatEnum.CORE_DEFENSE]: 9,
    [StatEnum.CORE_PP]: 2,
  }),
);

G_TWO.push(
  makeUnitTwo("Silver Primm Armor", {
    [StatEnum.CORE_DEFENSE]: 9,
    [StatEnum.CORE_PP]: 2,
  }),
);

G_TWO.push(
  makeUnitTwo("N-EXP Armor", {
    [StatEnum.CORE_DEFENSE]: 9,
    [StatEnum.CORE_PP]: 2,
  }),
);
