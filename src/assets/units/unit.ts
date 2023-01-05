import { ActionContext } from "../context";
import { StatEnum, statObject, StatObject } from "../stat";

import { GroupEnumUnitRarity } from "./groupEnum";
import { calcBonusDefense } from "./helper";

export type Unit = Readonly<{
  label: string;
  rarity: GroupEnumUnitRarity;
  growth_data: [number, number][];
  getterFunction: (ctx: ActionContext) => StatObject;
}>;

export const Unit = {
  getDefenseBase: (unit: Unit): number => {
    const stat_unit = unit.getterFunction({});
    return StatObject.getStat(stat_unit, StatEnum.CORE_DEFENSE);
  },

  getDefenseBonus: (unit: Unit, unit_level: number): number => {
    return calcBonusDefense(unit_level, unit.growth_data);
  },

  getDefense: (unit: Unit, unit_level: number): number => {
    const defense_base = Unit.getDefenseBase(unit);
    const defense_bonus = Unit.getDefenseBonus(unit, unit_level);
    return defense_base + defense_bonus;
  },

  getStatObject: (
    ctx: ActionContext,
    unit: Unit,
    unit_level: number,
  ): StatObject => {
    let result: StatObject = statObject();

    const stat_unit: StatObject = unit.getterFunction(ctx);
    result = StatObject.merge(result, stat_unit);

    const defense_bonus: number = Unit.getDefenseBonus(
      unit,
      unit_level,
    );
    result = StatObject.stack(
      result,
      StatEnum.CORE_DEFENSE,
      defense_bonus,
    );

    result = StatObject.stack(
      result,
      StatEnum.CORE_BP,
      Math.floor(Unit.getDefense(unit, unit_level) / 2),
    );

    const unit_hp: number = StatObject.getStat(
      stat_unit,
      StatEnum.CORE_HP,
    );
    result = StatObject.stack(
      result,
      StatEnum.CORE_BP,
      Math.floor(unit_hp / 10),
    );

    const unit_pp: number = StatObject.getStat(
      stat_unit,
      StatEnum.CORE_PP,
    );
    result = StatObject.stack(result, StatEnum.CORE_BP, unit_pp);

    return result;
  },
};

export const unit = (
  label: string,
  rarity: GroupEnumUnitRarity,
  growth_data: [number, number][],
  getterFunction: (ctx: ActionContext) => StatObject,
): Unit => {
  const result: Unit = {
    label,
    rarity,
    growth_data,
    getterFunction,
  };

  return result;
};
