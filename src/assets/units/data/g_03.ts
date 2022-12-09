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

const makeUnitThree = (
  name: string,
  stats: Partial<{ [K in StatEnum]: number }>,
): Unit => {
  return unit(name, GroupEnum.R_THREE, GROWTH_RATE, stats);
};

// -------------------------
data.push(
  makeUnitThree("Theseus Armor", {
    [StatEnum.CORE_HP]: 10,
    [StatEnum.CORE_PP]: 1,
  }),
);

data.push(
  makeUnitThree("Gold Primm Armor", {
    [StatEnum.CORE_HP]: 10,
    [StatEnum.CORE_PP]: 1,
  }),
);

export default data;
