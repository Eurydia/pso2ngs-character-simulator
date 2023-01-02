import { DYNAMO_UNIT } from "./../../potentials/data";
import { StatEnum, statObject } from "../../stat";
import { GroupEnumUnit } from "../groupEnum";
import { unit, Unit } from "../unit";

export const g_seven: Unit[] = [];

const GROWTH_DATA: [number, number][] = [
  [10, 10],
  [20, 20],
  [30, 30],
  [40, 40],
  [50, 51],
];

const makeUnitSeven = (
  name: string,
  stat: Partial<{ [K in StatEnum]: number }>,
): Unit => {
  return unit(name, GroupEnumUnit.R_SIX, GROWTH_DATA, (_) => {
    return statObject(stat);
  });
};

// -------------------------
(() => {
  const data_stats: [string, [StatEnum, StatEnum]][] = [
    ["Arga", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_RANGED]],
    ["Belta", [StatEnum.WEAPON_RANGED, StatEnum.WEAPON_TECHNIQUE]],
    ["Sheza", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_TECHNIQUE]],
  ];

  for (const data_stat of data_stats) {
    const [suffix, [weapon_up_a, weapon_up_b]] = data_stat;

    g_seven.push(
      makeUnitSeven(`Sestato Armor ${suffix}`, {
        [StatEnum.CORE_DEFENSE]: 39,
        [StatEnum.CORE_HP]: 30,
        [StatEnum.CORE_PP]: 4,
        [weapon_up_a]: 1.03,
        [weapon_up_b]: 1.03,
      }),
    );
  }
})();

// -------------------------
g_seven.push(
  makeUnitSeven("Eptize Armor Vida", {
    [StatEnum.CORE_DEFENSE]: 40,
    [StatEnum.CORE_HP]: 55,
    [StatEnum.WEAPON_MELEE]: 1.03,
    [StatEnum.WEAPON_RANGED]: 1.03,
    [StatEnum.WEAPON_TECHNIQUE]: 1.03,
  }),
);

// -------------------------
g_seven.push(
  makeUnitSeven("Eptize Armor Vio", {
    [StatEnum.CORE_DEFENSE]: 40,
    [StatEnum.CORE_PP]: 10,
    [StatEnum.WEAPON_MELEE]: 1.03,
    [StatEnum.WEAPON_RANGED]: 1.03,
    [StatEnum.WEAPON_TECHNIQUE]: 1.03,
  }),
);

// -------------------------
g_seven.push(
  makeUnitSeven("Eclaireur Armor", {
    [StatEnum.CORE_DEFENSE]: 35,
    [StatEnum.WEAPON_MELEE]: 1.04,
    [StatEnum.WEAPON_RANGED]: 1.04,
    [StatEnum.WEAPON_TECHNIQUE]: 1.04,
    [StatEnum.ADV_DEF_DAMAGE_RES]: 0.95,
  }),
);
