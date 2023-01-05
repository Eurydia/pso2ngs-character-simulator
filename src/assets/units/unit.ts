import { ActionContext } from "../context";
import { StatEnum, StatObject } from "../stat";

import { GroupEnumUnitRarity } from "./groupEnum";
import { calcBonusDef } from "./helper";

export class Unit {
  label: string;
  rarity: GroupEnumUnitRarity;

  #growth_data: [number, number][];
  #getterFunction: (ctx: ActionContext) => StatObject;

  constructor(
    label: string,
    rarity: GroupEnumUnitRarity,
    growth_data: [number, number][],
    getterFunction: (ctx: ActionContext) => StatObject,
  ) {
    this.label = label;
    this.rarity = rarity;
    this.#growth_data = growth_data;
    this.#getterFunction = getterFunction;
  }

  getStatObject(ctx: ActionContext, unit_level: number): StatObject {
    let stat: StatObject = this.#getterFunction(ctx);
    console.log(stat.getStat(StatEnum.CORE_DEFENSE));

    const defense_base: number = stat.getStat(StatEnum.CORE_DEFENSE);
    const defense_bonus: number = calcBonusDef(
      unit_level,
      this.#growth_data,
    );
    stat = stat.stackStat(StatEnum.CORE_DEFENSE, defense_bonus);

    const bp_from_defense: number =
      (defense_base + defense_bonus) / 2;
    const bp_from_hp: number = stat.getStat(StatEnum.CORE_HP) / 10;
    const bp_from_pp: number = stat.getStat(StatEnum.CORE_PP);
    stat = stat.stackStat(
      StatEnum.CORE_BP,
      Math.round(bp_from_defense + bp_from_hp + bp_from_pp),
    );

    return stat;
  }
}

export const unit = (
  label: string,
  rarity: GroupEnumUnitRarity,
  growth_data: [number, number][],
  getterFunction: (ctx: ActionContext) => StatObject,
): Unit => {
  return new Unit(label, rarity, growth_data, getterFunction);
};
