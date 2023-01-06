import { ActionContext } from "../../context";
import { StatEnum, StatObject, statObject } from "../../stat";

import { GroupEnumUnitRarity } from "../groupEnum";
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
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Unit => {
  return unit(
    name,
    GroupEnumUnitRarity.R_ONE,
    GROWTH_DATA,
    getAwareStatObject,
  );
};

// -------------------------
G_ONE.push(
  makeUnitOne("Primm Armor", (_: ActionContext): StatObject => {
    return statObject({
      [StatEnum.CORE_DEFENSE]: 8,
      [StatEnum.CORE_HP]: 10,
    });
  }),
);
