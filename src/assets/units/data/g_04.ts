import { StatEnum, statObject } from "../../stat";
import { GroupEnumUnit } from "../groupEnum";
import { unit, Unit } from "../unit";

export const g_four: Unit[] = [];

const GROWTH_DATA: [number, number][] = [
  [10, 10],
  [20, 20],
  [30, 30],
  [40, 41],
  [50, 51],
  [60, 71],
];

const makeUnitFour = (
  name: string,
  stat: Partial<{ [K in StatEnum]: number }>,
): Unit => {
  return unit(name, GroupEnumUnit.R_FOUR, GROWTH_DATA, (_) => {
    return statObject(stat);
  });
};

// -------------------------
g_four.push(
  makeUnitFour("Qual De Armor", {
    [StatEnum.CORE_DEFENSE]: 8,
    [StatEnum.CORE_PP]: 6,
  }),
);

(() => {
  const data_stats: [string, [StatEnum, StatEnum]][] = [
    ["Arga", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_RANGED]],
    ["Belta", [StatEnum.WEAPON_RANGED, StatEnum.WEAPON_TECHNIQUE]],
    ["Sheza", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_TECHNIQUE]],
  ];
  for (const data_stat of data_stats) {
    const [suffix, [weapon_up_a, weapon_up_b]] = data_stat;

    g_four.push(
      makeUnitFour(`Qual De Armor ${suffix}`, {
        [StatEnum.CORE_DEFENSE]: 13,
        [StatEnum.CORE_PP]: 4,
        [weapon_up_a]: 1.01,
        [weapon_up_b]: 1.01,
      }),
    );
  }
})();

g_four.push(
  makeUnitFour("Cattleya Armor", {
    [StatEnum.CORE_DEFENSE]: 12,
    [StatEnum.CORE_HP]: 20,
    [StatEnum.CORE_PP]: 2,
  }),
);

g_four.push(
  makeUnitFour("Vialto Armor", {
    [StatEnum.CORE_DEFENSE]: 14,
    [StatEnum.CORE_HP]: 30,
    [StatEnum.ADV_DEF_DAMAGE_RES]: 1.01,
  }),
);

(() => {
  const data_stats: [string, [StatEnum, StatEnum]][] = [
    ["Arga", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_RANGED]],
    ["Belta", [StatEnum.WEAPON_RANGED, StatEnum.WEAPON_TECHNIQUE]],
    ["Sheza", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_TECHNIQUE]],
  ];

  // arga
  for (const data_stat of data_stats) {
    const [suffix, [weapon_up_a, weapon_up_b]] = data_stat;

    g_four.push(
      makeUnitFour(`Vialto Armor ${suffix}`, {
        [StatEnum.CORE_DEFENSE]: 16,
        [StatEnum.CORE_HP]: 25,
        [weapon_up_a]: 1.005,
        [weapon_up_b]: 1.005,
        [StatEnum.ADV_DEF_DAMAGE_RES]: 1.01,
      }),
    );
  }
})();

g_four.push(
  makeUnitFour("Geant Armor", {
    [StatEnum.CORE_DEFENSE]: 15,
    [StatEnum.CORE_HP]: -20,
    [StatEnum.CORE_PP]: 10,
    [StatEnum.WEAPON_MELEE]: 1.02,
    [StatEnum.WEAPON_RANGED]: 1.02,
    [StatEnum.WEAPON_TECHNIQUE]: 1.02,
    [StatEnum.AIL_BLIND]: 1.02,
    [StatEnum.AIL_BURN]: 1.02,
    [StatEnum.AIL_FREEZE]: 1.02,
    [StatEnum.AIL_PANIC]: 1.02,
    [StatEnum.AIL_PANIC]: 1.02,
    [StatEnum.AIL_PHYDOWN]: 1.02,
    [StatEnum.AIL_POISON]: 1.02,
    [StatEnum.AIL_SHOCK]: 1.02,
  }),
);

export default g_four;
