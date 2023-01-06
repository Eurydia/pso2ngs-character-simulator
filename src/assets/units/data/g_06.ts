import { ActionContext } from "../../context";
import { StatEnum, StatObject, statObject } from "../../stat";
import { GroupEnumUnitRarity } from "../groupEnum";
import { unit, Unit } from "../unit";

export const G_SIX: Unit[] = [];

const GROWTH_DATA: [number, number][] = [
  [10, 10],
  [20, 20],
  [30, 30],
  [40, 40],
  [50, 50],
  [60, 66],
];

const makeUnitSix = (
  name: string,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Unit => {
  return unit(
    name,
    GroupEnumUnitRarity.R_SIX,
    GROWTH_DATA,
    getAwareStatObject,
  );
};

// -------------------------
G_SIX.push(
  makeUnitSix("Defrozza Armor", (_: ActionContext): StatObject => {
    return statObject({
      [StatEnum.CORE_DEFENSE]: 22,
      [StatEnum.CORE_HP]: 50,
      [StatEnum.WEAPON_MELEE]: 1.01,
      [StatEnum.WEAPON_RANGED]: 1.01,
      [StatEnum.WEAPON_TECHNIQUE]: 1.01,
      [StatEnum.ADV_DEF_DAMAGE_RES]: 1.01,
      [StatEnum.HARSH_COLD]: 0.2,
    });
  }),
);

G_SIX.push(
  makeUnitSix("Defrozzi Armor", (_: ActionContext): StatObject => {
    return statObject({
      [StatEnum.CORE_DEFENSE]: 20,
      [StatEnum.CORE_PP]: 9,
      [StatEnum.WEAPON_MELEE]: 1.02,
      [StatEnum.WEAPON_RANGED]: 1.02,
      [StatEnum.WEAPON_TECHNIQUE]: 1.02,
      [StatEnum.HARSH_COLD]: 0.2,
    });
  }),
);

G_SIX.push(
  makeUnitSix("Sestato Armor", (_: ActionContext): StatObject => {
    return statObject({
      [StatEnum.CORE_DEFENSE]: 21,
      [StatEnum.CORE_HP]: 35,
      [StatEnum.CORE_PP]: 5,
      [StatEnum.WEAPON_MELEE]: 1.015,
      [StatEnum.WEAPON_RANGED]: 1.015,
      [StatEnum.WEAPON_TECHNIQUE]: 1.015,
      [StatEnum.HARSH_COLD]: 0.2,
    });
  }),
);
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
        [StatEnum.CORE_DEFENSE]: 20,
        [StatEnum.CORE_HP]: 30,
        [StatEnum.CORE_PP]: 4,
        [stat_weapon_up_a]: 1.0225,
        [stat_weapon_up_b]: 1.0225,
        [StatEnum.AIL_DOWN]: 1.3,
      });
    };
    const unit_six: Unit = makeUnitSix(
      `Sestato Armor ${suffix}`,
      _getter,
    );
    G_SIX.push(unit_six);
  }
})();

G_SIX.push(
  makeUnitSix("Behlgren Armor", (_: ActionContext): StatObject => {
    return statObject({
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
      [StatEnum.AIL_DOWN]: 0.5,
      [StatEnum.AIL_POISON]: 0.5,
      [StatEnum.AIL_SHOCK]: 0.5,
    });
  }),
);
