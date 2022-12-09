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
  [60, 66],
];

const makeUnitSix = (
  name: string,
  stats: Partial<{ [K in StatEnum]: number }>,
): Unit => {
  return unit(name, GroupEnum.R_SIX, GROWTH_RATE, stats);
};

// -------------------------
data.push(
  makeUnitSix("Defrozza Armor", {
    [StatEnum.CORE_DEFENSE]: 22,
    [StatEnum.CORE_HP]: 50,
    [StatEnum.WEAPON_MELEE]: 1.01,
    [StatEnum.WEAPON_RANGED]: 1.01,
    [StatEnum.WEAPON_TECHNIQUE]: 1.01,
    [StatEnum.ADV_DEF_DAMAGE_RES]: 1.01,
    [StatEnum.HARSH_COLD]: 0.2,
  }),
);

data.push(
  makeUnitSix("Defrozzi Armor", {
    [StatEnum.CORE_DEFENSE]: 20,
    [StatEnum.CORE_PP]: 9,
    [StatEnum.WEAPON_MELEE]: 1.02,
    [StatEnum.WEAPON_RANGED]: 1.02,
    [StatEnum.WEAPON_TECHNIQUE]: 1.02,
    [StatEnum.HARSH_COLD]: 0.2,
  }),
);

data.push(
  makeUnitSix("Sestato Armor", {
    [StatEnum.CORE_DEFENSE]: 21,
    [StatEnum.CORE_HP]: 35,
    [StatEnum.CORE_PP]: 5,
    [StatEnum.WEAPON_MELEE]: 1.015,
    [StatEnum.WEAPON_RANGED]: 1.015,
    [StatEnum.WEAPON_TECHNIQUE]: 1.015,
    [StatEnum.HARSH_COLD]: 0.2,
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
      makeUnitSix(`Sestato Armor ${suffix}`, {
        [StatEnum.CORE_DEFENSE]: 20,
        [StatEnum.CORE_HP]: 30,
        [StatEnum.CORE_PP]: 4,
        [weapon_up_a]: 1.0225,
        [weapon_up_b]: 1.0225,
        [StatEnum.AIL_PHYDOWN]: 1.3,
      }),
    );
  }
})();

data.push(
  makeUnitSix("Behlgren Armor", {
    [StatEnum.CORE_DEFENSE]: 26,
    [StatEnum.CORE_HP]: -40,
    [StatEnum.CORE_PP]: 13,
    [StatEnum.WEAPON_MELEE]: 1.0275,
    [StatEnum.WEAPON_RANGED]: 1.0275,
    [StatEnum.WEAPON_TECHNIQUE]: 1.0275,
    [StatEnum.AIL_BLIND]: 0.5,
    [StatEnum.AIL_BURN]: 0.5,
    [StatEnum.AIL_FREEZE]: 0.5,
    [StatEnum.AIL_PANIC]: 0.5,
    [StatEnum.AIL_PHYDOWN]: 0.5,
    [StatEnum.AIL_POISON]: 0.5,
    [StatEnum.AIL_SHOCK]: 0.5,
  }),
);

export default data;
