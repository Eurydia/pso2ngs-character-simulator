import { StatEnum } from "../../stat";
import GroupEnum from "../groupEnum";
import unit, { Unit } from "../unit";

const data: Unit[] = [];

const GROWTH_RATE: [number, number][] = [
  [10, 10],
  [20, 20],
  [30, 30],
  [40, 40],
  [50, 50],
  [60, 72],
];

const makeUnitTwo = (
  name: string,
  stats: Partial<{ [K in StatEnum]: number }>,
): Unit => {
  return unit(name, GroupEnum.R_TWO, GROWTH_RATE, stats);
};

// -------------------------
data.push(
  makeUnitTwo("Tzvia Armor", {
    [StatEnum.CORE_DEFENSE]: 9,
    [StatEnum.CORE_PP]: 2,
  }),
);

data.push(
  makeUnitTwo("Silver Primm Armor", {
    [StatEnum.CORE_DEFENSE]: 9,
    [StatEnum.CORE_PP]: 2,
  }),
);

data.push(
  makeUnitTwo("N-EXP Armor", {
    [StatEnum.CORE_DEFENSE]: 9,
    [StatEnum.CORE_PP]: 2,
  }),
);

export default data;
