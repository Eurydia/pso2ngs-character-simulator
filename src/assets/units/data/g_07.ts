import { StatEnum, statObject } from "../../stat";
import { GroupEnumUnitRarity } from "../groupEnum";
import { unit, Unit } from "../unit";

export const G_SEVEN: Unit[] = [];

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
  return unit(name, GroupEnumUnitRarity.R_SIX, GROWTH_DATA, (_) => {
    return statObject(stat);
  });
};

// -------------------------
(() => {
  const DATA_ENTRY: [string, [StatEnum, StatEnum]][] = [
    ["Arga", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_RANGED]],
    ["Belta", [StatEnum.WEAPON_RANGED, StatEnum.WEAPON_TECHNIQUE]],
    ["Sheza", [StatEnum.WEAPON_MELEE, StatEnum.WEAPON_TECHNIQUE]],
  ];

  for (const entry of DATA_ENTRY) {
    const [suffix, [stat_weapon_up_a, stat_weapon_up_b]] = entry;

    G_SEVEN.push(
      makeUnitSeven(`Sestato Armor ${suffix}`, {
        [StatEnum.CORE_DEFENSE]: 39,
        [StatEnum.CORE_HP]: 30,
        [StatEnum.CORE_PP]: 4,
        [stat_weapon_up_a]: 1.03,
        [stat_weapon_up_b]: 1.03,
      }),
    );
  }
})();

// -------------------------
G_SEVEN.push(
  makeUnitSeven("Eptize Armor Vida", {
    [StatEnum.CORE_DEFENSE]: 40,
    [StatEnum.CORE_HP]: 55,
    [StatEnum.WEAPON_MELEE]: 1.03,
    [StatEnum.WEAPON_RANGED]: 1.03,
    [StatEnum.WEAPON_TECHNIQUE]: 1.03,
  }),
);

// -------------------------
G_SEVEN.push(
  makeUnitSeven("Eptize Armor Vio", {
    [StatEnum.CORE_DEFENSE]: 40,
    [StatEnum.CORE_PP]: 10,
    [StatEnum.WEAPON_MELEE]: 1.03,
    [StatEnum.WEAPON_RANGED]: 1.03,
    [StatEnum.WEAPON_TECHNIQUE]: 1.03,
  }),
);

// -------------------------
G_SEVEN.push(
  makeUnitSeven("Eclaireur Armor", {
    [StatEnum.CORE_DEFENSE]: 35,
    [StatEnum.WEAPON_MELEE]: 1.04,
    [StatEnum.WEAPON_RANGED]: 1.04,
    [StatEnum.WEAPON_TECHNIQUE]: 1.04,
    [StatEnum.ADV_DEF_DAMAGE_RES]: 0.95,
  }),
);
