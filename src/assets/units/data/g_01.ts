import { ActionContext } from "../../ContextAction";
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
  level_required: number,
  base_defense: number,
  getAwareStatObject: (ctx: ActionContext | null) => StatObject,
): Unit => {
  return unit(
    name,
    GroupEnumUnitRarity.R_ONE,
    base_defense,
    60,
    level_required,
    GROWTH_DATA,
    getAwareStatObject,
  );
};

// -------------------------
G_ONE.push(
  makeUnitOne(
    "Primm Armor",
    1,
    8,
    (_: ActionContext | null): StatObject => {
      return statObject({
        [StatEnum.CORE_HP]: 10,
      });
    },
  ),
);
