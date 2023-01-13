import { ActionContext } from "../ContextAction";
import { StatEnum, statObject, StatObject } from "../stat";

import { GroupEnumUnitRarity } from "./groupEnum";

const LOOKUP_UNIT: { [key: string]: Unit } = {};

export type Unit = Readonly<{
  label: string;
  rarity: GroupEnumUnitRarity;
  enhancement_max: number;
  level_required: number;
  growth_data: [number, number][];
  getAwareStatObject: (ctx: ActionContext) => StatObject;
}>;

export const Unit = {
  toString(unit: Unit | null): string {
    if (unit === null) {
      return JSON.stringify(null);
    }
    return unit.label;
  },

  fromLabel(label: string): Unit | null {
    if (label in LOOKUP_UNIT) {
      return LOOKUP_UNIT[label];
    }
    return null;
  },

  getDefenseBase: (unit: Unit): number => {
    const stat_unit = unit.getAwareStatObject({});
    return StatObject.getStat(stat_unit, StatEnum.CORE_DEFENSE);
  },

  getDefenseBonus: (
    growth_rate: [number, number][],
    unit_level: number,
  ): number => {
    let result: number = 0;
    for (const entry of growth_rate) {
      const [gr_level, gr_bonus] = entry;
      if (unit_level > gr_level) {
        result = gr_bonus;
        continue;
      }
      // exact match
      if (unit_level === gr_level) {
        return gr_bonus;
      }
      if (unit_level < gr_level) {
        return Math.round((unit_level / gr_level) * gr_bonus);
      }
    }
    return result;
  },

  getDefense: (unit: Unit, unit_level: number): number => {
    const defense_base = Unit.getDefenseBase(unit);
    const defense_bonus = Unit.getDefenseBonus(
      unit.growth_data,
      unit_level,
    );
    return defense_base + defense_bonus;
  },

  getStatObject: (
    ctx: ActionContext,
    unit: Unit,
    unit_level: number,
  ): StatObject => {
    let result: StatObject = statObject();

    const stat_unit: StatObject = unit.getAwareStatObject(ctx);
    result = StatObject.merge(result, stat_unit);

    const defense_bonus: number = Unit.getDefenseBonus(
      unit.growth_data,
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
  enhancement_max: number,
  level_required: number,
  growth_data: [number, number][],
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Unit => {
  const result: Unit = {
    label,
    rarity,
    enhancement_max,
    level_required,
    growth_data,
    getAwareStatObject,
  };

  LOOKUP_UNIT[label] = result;

  return result;
};
