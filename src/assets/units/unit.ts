import { ActionContext } from "../ContextAction";
import { StatEnum, statObject, StatObject } from "../stat";

import { GroupEnumUnitRarity } from "./groupEnum";

const UNIT_LOOKUP: { [key: string]: Unit } = {};

export type Unit = Readonly<{
  label: string;
  rarity: GroupEnumUnitRarity;
  base_defense: number;
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
    return JSON.stringify(unit.label);
  },

  fromLabel(label: string): Unit | null {
    if (label in UNIT_LOOKUP) {
      return UNIT_LOOKUP[label];
    }
    return null;
  },

  getDefenseBase: (unit: Unit): number => {
    return unit.base_defense;
  },

  getDefenseBonus: (
    growth_rate: [number, number][],
    enhancement: number,
  ): number => {
    let result: number = 0;
    for (const entry of growth_rate) {
      const [gr_level, gr_bonus] = entry;
      if (enhancement > gr_level) {
        result = gr_bonus;
        continue;
      }
      // exact match
      if (enhancement === gr_level) {
        return gr_bonus;
      }
      if (enhancement < gr_level) {
        return Math.round((enhancement / gr_level) * gr_bonus);
      }
    }
    return result;
  },

  getDefense: (unit: Unit, enhancement: number): number => {
    const defense_base = Unit.getDefenseBase(unit);
    const defense_bonus = Unit.getDefenseBonus(
      unit.growth_data,
      enhancement,
    );
    return defense_base + defense_bonus;
  },

  getStatObject: (
    ctx: ActionContext,
    unit: Unit,
    enhancement: number,
  ): StatObject => {
    let stat_total: StatObject = statObject();

    const stat_unit: StatObject = unit.getAwareStatObject(ctx);
    stat_total = StatObject.merge(stat_total, stat_unit);

    const defense_bonus: number = Unit.getDefenseBonus(
      unit.growth_data,
      enhancement,
    );
    stat_total = StatObject.stack(
      stat_total,
      StatEnum.CORE_DEFENSE,
      defense_bonus,
    );

    stat_total = StatObject.stack(
      stat_total,
      StatEnum.CORE_BP,
      Math.floor(Unit.getDefense(unit, enhancement) / 2),
    );

    const unit_hp: number = StatObject.getStat(
      stat_unit,
      StatEnum.CORE_HP,
    );
    stat_total = StatObject.stack(
      stat_total,
      StatEnum.CORE_BP,
      Math.floor(unit_hp / 10),
    );

    const unit_pp: number = StatObject.getStat(
      stat_unit,
      StatEnum.CORE_PP,
    );
    stat_total = StatObject.stack(
      stat_total,
      StatEnum.CORE_BP,
      unit_pp,
    );

    return stat_total;
  },
};

export const unit = (
  label: string,
  rarity: GroupEnumUnitRarity,
  base_defense: number,
  enhancement_max: number,
  level_required: number,
  growth_data: [number, number][],
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Unit => {
  const result: Unit = {
    label,
    rarity,
    base_defense,
    enhancement_max,
    level_required,
    growth_data,
    getAwareStatObject,
  };

  UNIT_LOOKUP[label] = result;

  return result;
};
