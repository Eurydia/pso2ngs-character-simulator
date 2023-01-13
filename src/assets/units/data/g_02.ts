import { ActionContext } from "../../ContextAction";
import { StatEnum, StatObject, statObject } from "../../stat";

import { GroupEnumUnitRarity } from "../groupEnum";
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
  level_required: number,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Unit => {
  return unit(
    name,
    GroupEnumUnitRarity.R_TWO,
    60,
    level_required,
    GROWTH_DATA,
    getAwareStatObject,
  );
};

// -------------------------
G_TWO.push(
  makeUnitTwo("Tzvia Armor", 1, (_: ActionContext): StatObject => {
    return statObject({
      [StatEnum.CORE_DEFENSE]: 9,
      [StatEnum.CORE_PP]: 2,
    });
  }),
);

G_TWO.push(
  makeUnitTwo(
    "Silver Primm Armor",
    1,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_DEFENSE]: 9,
        [StatEnum.CORE_PP]: 2,
      });
    },
  ),
);

G_TWO.push(
  makeUnitTwo("N-EXP Armor", 1, (_: ActionContext): StatObject => {
    return statObject({
      [StatEnum.CORE_DEFENSE]: 9,
      [StatEnum.CORE_PP]: 2,
    });
  }),
);
