import { ActionContext } from "../context";
import {
  getStat,
  stackStat,
  StatEnum,
  statObject,
  StatObject,
} from "../stat";

import { GroupEnumUnitRarity } from "./groupEnum";
import { calcBonusDef } from "./helper";

export type Unit = Readonly<{
  label: string;
  rarity: GroupEnumUnitRarity;
  growth_data: [number, number][];
  getterFunction: (ctx: ActionContext) => StatObject;
}>;

export const getUnitStatObject = (
  ctx: ActionContext,
  unit: Unit,
  unit_level: number,
): StatObject => {
  let result: StatObject = statObject();

  const stat_unit: StatObject = unit.getterFunction(ctx);

  const unit_defense_base: number = getStat(
    stat_unit,
    StatEnum.CORE_DEFENSE,
  );

  const unit_defense_bonus: number = calcBonusDef(
    unit_level,
    unit.growth_data,
  );

  const unit_defense_total: number =
    unit_defense_base + unit_defense_bonus;
  result = stackStat(
    result,
    StatEnum.CORE_DEFENSE,
    unit_defense_total,
  );

  result = stackStat(
    result,
    StatEnum.CORE_BP,
    Math.floor(unit_defense_total / 2),
  );

  const unit_hp: number = getStat(stat_unit, StatEnum.CORE_HP);
  result = stackStat(
    result,
    StatEnum.CORE_BP,
    Math.floor(unit_hp / 10),
  );

  const unit_pp: number = getStat(stat_unit, StatEnum.CORE_PP);
  result = stackStat(result, StatEnum.CORE_BP, unit_pp);

  return result;
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
