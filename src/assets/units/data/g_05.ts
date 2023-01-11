import { ActionContext } from "../../ContextAction";
import { StatEnum, StatObject, statObject } from "../../stat";

import { GroupEnumUnitRarity } from "../groupEnum";
import { unit, Unit } from "../unit";

export const G_FIVE: Unit[] = [];

const GROWTH_DATA: [number, number][] = [
  [10, 10],
  [20, 20],
  [30, 30],
  [40, 41],
  [50, 51],
  [60, 67],
];

const makeUnitFive = (
  name: string,
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Unit => {
  return unit(
    name,
    GroupEnumUnitRarity.R_FIVE,
    GROWTH_DATA,
    getAwareStatObject,
  );
};

// -------------------------
G_FIVE.push(
  makeUnitFive("Vidal Armor", (_: ActionContext): StatObject => {
    return statObject({
      [StatEnum.CORE_DEFENSE]: 22,
      [StatEnum.CORE_HP]: 45,
      [StatEnum.ADV_DEF_DAMAGE_RES]: 1.01,
    });
  }),
);

G_FIVE.push(
  makeUnitFive("Vijf Armor", (_: ActionContext): StatObject => {
    return statObject({
      [StatEnum.CORE_DEFENSE]: 17,
      [StatEnum.CORE_HP]: 30,
      [StatEnum.CORE_PP]: 4,
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
        [StatEnum.CORE_DEFENSE]: 18,
        [StatEnum.CORE_HP]: 20,
        [StatEnum.CORE_PP]: 7,
        [stat_weapon_up_a]: 1.01,
        [stat_weapon_up_b]: 1.01,
      });
    };
    const unit_five: Unit = makeUnitFive(
      `Vijf Armor ${suffix}`,
      _getter,
    );
    G_FIVE.push(unit_five);
  }
})();

G_FIVE.push(
  makeUnitFive("Vios Armor", (_: ActionContext): StatObject => {
    return statObject({
      [StatEnum.CORE_DEFENSE]: 15,
      [StatEnum.CORE_PP]: 8,
      [StatEnum.WEAPON_MELEE]: 1.01,
      [StatEnum.WEAPON_RANGED]: 1.01,
      [StatEnum.WEAPON_TECHNIQUE]: 1.01,
    });
  }),
);

G_FIVE.push(
  makeUnitFive("Vindalun Armor", (_: ActionContext): StatObject => {
    return statObject({
      [StatEnum.CORE_DEFENSE]: 20,
      [StatEnum.CORE_HP]: 70,
    });
  }),
);

G_FIVE.push(
  makeUnitFive("Viosel Armor", (_: ActionContext): StatObject => {
    return statObject({
      [StatEnum.CORE_DEFENSE]: 10,
      [StatEnum.CORE_PP]: 14,
      [StatEnum.AIL_BLIND]: 1.2,
      [StatEnum.AIL_BURN]: 1.2,
      [StatEnum.AIL_FREEZE]: 1.2,
      [StatEnum.AIL_PANIC]: 1.2,
      [StatEnum.AIL_DOWN]: 1.2,
      [StatEnum.AIL_POISON]: 1.2,
      [StatEnum.AIL_SHOCK]: 1.2,
    });
  }),
);

G_FIVE.push(
  makeUnitFive("Gres Armor", (_: ActionContext): StatObject => {
    return statObject({
      [StatEnum.CORE_DEFENSE]: 21,
      [StatEnum.CORE_HP]: -40,
      [StatEnum.CORE_PP]: 13,
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

// -------------------------
// schwarz
(() => {
  const DATA_ENTRY: [string, StatEnum][] = [
    ["Schwarzest", StatEnum.WEAPON_MELEE],
    ["Schwarzgarde", StatEnum.WEAPON_RANGED],
    ["Schwarzrosso", StatEnum.WEAPON_TECHNIQUE],
  ];
  for (const entry of DATA_ENTRY) {
    const [name, stat_weapon_up] = entry;
    const _getter = (_: ActionContext): StatObject => {
      return statObject({
        [StatEnum.CORE_DEFENSE]: 20,
        [StatEnum.CORE_HP]: 25,
        [StatEnum.CORE_PP]: 3,
        [stat_weapon_up]: 1.02,
        [StatEnum.ADV_DEF_DAMAGE_RES]: 1.01,
      });
    };
    const unit_five: Unit = makeUnitFive(`${name} Armor`, _getter);
    G_FIVE.push(unit_five);
  }
})();
