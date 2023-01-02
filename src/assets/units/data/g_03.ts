import { StatEnum, statObject } from "../../stat";
import { GroupEnumUnit } from "../groupEnum";
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
  stat: Partial<{ [K in StatEnum]: number }>,
): Unit => {
  return unit(name, GroupEnumUnit.R_THREE, GROWTH_DATA, (_) => {
    return statObject(stat);
  });
};

// -------------------------
G_THREE.push(
  makeUnitThree("Theseus Armor", {
    [StatEnum.CORE_DEFENSE]: 9,
    [StatEnum.CORE_HP]: 10,
    [StatEnum.CORE_PP]: 1,
  }),
);

G_THREE.push(
  makeUnitThree("Gold Primm Armor", {
    [StatEnum.CORE_DEFENSE]: 9,
    [StatEnum.CORE_HP]: 10,
    [StatEnum.CORE_PP]: 1,
  }),
);

G_THREE.push(
  makeUnitThree("Renaissa Armor", {
    [StatEnum.CORE_DEFENSE]: 10,
    [StatEnum.CORE_HP]: 10,
    [StatEnum.CORE_PP]: 2,
    [StatEnum.WEAPON_MELEE]: 1.01,
    [StatEnum.WEAPON_RANGED]: 1.01,
    [StatEnum.WEAPON_TECHNIQUE]: 1.01,
  }),
);
