import { ActionContext } from "../../ContextAction";
import { StatEnum, StatObject, statObject } from "../../stat";
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
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Unit => {
  return unit(
    name,
    GroupEnumUnitRarity.R_SEVEN,
    GROWTH_DATA,
    getAwareStatObject,
  );
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
    const _getter = (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_DEFENSE]: 39,
        [StatEnum.CORE_HP]: 30,
        [StatEnum.CORE_PP]: 4,
        [stat_weapon_up_a]: 1.03,
        [stat_weapon_up_b]: 1.03,
      });
    };
    const unit_seven: Unit = makeUnitSeven(
      `Efitus Armor ${suffix}`,
      _getter,
    );
    G_SEVEN.push(unit_seven);
  }
})();

// -------------------------
G_SEVEN.push(
  makeUnitSeven(
    "Eptize Armor Vida",
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_DEFENSE]: 40,
        [StatEnum.CORE_HP]: 55,
        [StatEnum.WEAPON_MELEE]: 1.03,
        [StatEnum.WEAPON_RANGED]: 1.03,
        [StatEnum.WEAPON_TECHNIQUE]: 1.03,
      });
    },
  ),
);

// -------------------------
G_SEVEN.push(
  makeUnitSeven(
    "Eptize Armor Vio",
    (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_DEFENSE]: 40,
        [StatEnum.CORE_PP]: 10,
        [StatEnum.WEAPON_MELEE]: 1.03,
        [StatEnum.WEAPON_RANGED]: 1.03,
        [StatEnum.WEAPON_TECHNIQUE]: 1.03,
      });
    },
  ),
);

// -------------------------
G_SEVEN.push(
  makeUnitSeven("Eclaireur Armor", (_: ActionContext): StatObject => {
    return statObject({
      [StatEnum.CORE_DEFENSE]: 35,
      [StatEnum.WEAPON_MELEE]: 1.04,
      [StatEnum.WEAPON_RANGED]: 1.04,
      [StatEnum.WEAPON_TECHNIQUE]: 1.04,
      [StatEnum.ADV_DEF_DAMAGE_RES]: 0.95,
    });
  }),
);
