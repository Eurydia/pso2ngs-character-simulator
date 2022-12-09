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
];

const makeUnitOne = (
  name: string,
  stats: Partial<{ [K in StatEnum]: number }>,
): Unit => {
  return unit(name, GroupEnum.R_ONE, GROWTH_RATE, stats);
};

// -------------------------
// primm
data.push(
  makeUnitOne("Primm Armor", {
    [StatEnum.CORE_HP]: 10,
    [StatEnum.CORE_DEFENSE]: 8,
  }),
);
export default data;
