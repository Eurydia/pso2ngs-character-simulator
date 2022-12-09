import { StatEnum } from "../../stat";
import GroupEnum from "../groupEnum";
import unit, { Unit } from "../unit";

const data: Unit[] = [];

const GROWTH_RATE: [number, number][] = [
  [10, 10],
  [20, 20],
  [30, 30],
  [40, 41],
  [50, 51],
  [60, 67],
];

const makeUnitFive = (
  name: string,
  stats: Partial<{ [K in StatEnum]: number }>,
): Unit => {
  return unit(name, GroupEnum.R_FIVE, GROWTH_RATE, stats);
};

// -------------------------
data.push(
  makeUnitFive("Vidal Armor", {
    [StatEnum.CORE_DEFENSE]: 22,
    [StatEnum.CORE_HP]: 45,
    [StatEnum.ADV_DEF_DAMAGE_RES]: 1.01,
  }),
);

data.push(
  makeUnitFive("Vijf Armor", {
    [StatEnum.CORE_DEFENSE]: 17,
    [StatEnum.CORE_HP]: 30,
    [StatEnum.CORE_PP]: 4,
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

    data.push(
      makeUnitFive(`Vijf Armor ${suffix}`, {
        [StatEnum.CORE_DEFENSE]: 18,
        [StatEnum.CORE_HP]: 20,
        [StatEnum.CORE_PP]: 7,
        [weapon_up_a]: 1.01,
        [weapon_up_b]: 1.01,
      }),
    );
  }
})();

data.push(
  makeUnitFive("Vios Armor", {
    [StatEnum.CORE_DEFENSE]: 15,
    [StatEnum.CORE_PP]: 8,
    [StatEnum.WEAPON_MELEE]: 1.01,
    [StatEnum.WEAPON_RANGED]: 1.01,
    [StatEnum.WEAPON_TECHNIQUE]: 1.01,
  }),
);

data.push(
  makeUnitFive("Vindalun Armor", {
    [StatEnum.CORE_DEFENSE]: 20,
    [StatEnum.CORE_HP]: 70,
  }),
);

data.push(
  makeUnitFive("Viosel Armor", {
    [StatEnum.CORE_DEFENSE]: 10,
    [StatEnum.CORE_PP]: 14,
    [StatEnum.AIL_BLIND]: 1.2,
    [StatEnum.AIL_BURN]: 1.2,
    [StatEnum.AIL_FREEZE]: 1.2,
    [StatEnum.AIL_PANIC]: 1.2,
    [StatEnum.AIL_PHYDOWN]: 1.2,
    [StatEnum.AIL_POISON]: 1.2,
    [StatEnum.AIL_SHOCK]: 1.2,
  }),
);

data.push(
  makeUnitFive("Gres Armor", {
    [StatEnum.CORE_DEFENSE]: 21,
    [StatEnum.CORE_HP]: -40,
    [StatEnum.CORE_PP]: 13,
    [StatEnum.AIL_BLIND]: 0.5,
    [StatEnum.AIL_BURN]: 0.5,
    [StatEnum.AIL_FREEZE]: 0.5,
    [StatEnum.AIL_PANIC]: 0.5,
    [StatEnum.AIL_PHYDOWN]: 0.5,
    [StatEnum.AIL_POISON]: 0.5,
    [StatEnum.AIL_SHOCK]: 0.5,
  }),
);

// -------------------------
// schwarz
(() => {
  const data_stats: [string, StatEnum][] = [
    ["Schwarzest", StatEnum.WEAPON_MELEE],
    ["Schwarzgarde", StatEnum.WEAPON_RANGED],
    ["Schwarzrosso", StatEnum.WEAPON_TECHNIQUE],
  ];

  for (const data_stat of data_stats) {
    const [name, weapon_up] = data_stat;

    data.push(
      makeUnitFive(`${name} Armor`, {
        [StatEnum.CORE_DEFENSE]: 20,
        [StatEnum.CORE_HP]: 25,
        [StatEnum.CORE_PP]: 3,
        [weapon_up]: 1.02,
        [StatEnum.ADV_DEF_DAMAGE_RES]: 1.01,
      }),
    );
  }
})();

export default data;
