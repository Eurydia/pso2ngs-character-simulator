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

const makeUnitOne = (
  name: string,
  stats: Partial<{ [K in StatEnum]: number }>,
): Unit => {
  return unit(name, GroupEnum.R_ONE, GROWTH_RATE, stats);
};

// -------------------------
data.push(
  makeUnitOne("Primm Armor", {
    [StatEnum.CORE_DEFENSE]: 8,
    [StatEnum.CORE_HP]: 10,
  }),
);
export default data;
