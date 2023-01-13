import { ActionContext } from "../../ContextAction";
import { StatEnum, StatObject, statObject } from "../../stat";
import { GroupEnumUnitRarity } from "../groupEnum";
import { unit, Unit } from "../unit";

export const G_THREE: Unit[] = [];

const GROWTH_DATA: [number, number][] = [
  [10, 10],
  [20, 20],
  [30, 30],
  [40, 40],
  [50, 50],
  [60, 72],
];

const makeUnitThree = (
  name: string,
  level_required: number,
  getterFunction: (ctx: ActionContext) => StatObject,
): Unit => {
  return unit(
    name,
    GroupEnumUnitRarity.R_THREE,
    60,
    level_required,
    GROWTH_DATA,
    getterFunction,
  );
};

// -------------------------
G_THREE.push(
  makeUnitThree(
    "Theseus Armor",
    5,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_DEFENSE]: 9,
        [StatEnum.CORE_HP]: 10,
        [StatEnum.CORE_PP]: 1,
      });
    },
  ),
);

G_THREE.push(
  makeUnitThree(
    "Gold Primm Armor",
    5,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_DEFENSE]: 9,
        [StatEnum.CORE_HP]: 10,
        [StatEnum.CORE_PP]: 1,
      });
    },
  ),
);

G_THREE.push(
  makeUnitThree(
    "Renaissa Armor",
    1,
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_DEFENSE]: 10,
        [StatEnum.CORE_HP]: 10,
        [StatEnum.CORE_PP]: 2,
        [StatEnum.WEAPON_MELEE]: 1.01,
        [StatEnum.WEAPON_RANGED]: 1.01,
        [StatEnum.WEAPON_TECHNIQUE]: 1.01,
      });
    },
  ),
);
