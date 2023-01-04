import { ActionContext } from "../context";
import { StatEnum, StatObject } from "../stat";

import { GroupEnumUnitRarity } from "./groupEnum";
import { calcBonusDef } from "./helper";

type statGetterFunction = (ctx: ActionContext) => StatObject;

export class Unit {
  name: string;
  rarity: GroupEnumUnitRarity;

  #growth_data: [number, number][];
  #getStatObject: statGetterFunction;

  constructor(
    name: string,
    rarity: GroupEnumUnitRarity,
    growth_rate: [number, number][],
    getStatObject: statGetterFunction,
  ) {
    this.name = name;
    this.rarity = rarity;

    this.#getStatObject = getStatObject;
    this.#growth_data = growth_rate;
  }

  get label(): string {
    return this.name;
  }

  get defense_base(): number {
    const stat: StatObject = this.#getStatObject({});
    return stat.getStat(StatEnum.CORE_DEFENSE);
  }

  #getBonusDef(level: number): number {
    return calcBonusDef(level, this.#growth_data);
  }

  getStatObject(ctx: ActionContext, unit_level: number): StatObject {
    const stat: StatObject = this.#getStatObject(ctx);

    const defense_bonus: number = this.#getBonusDef(unit_level);
    stat.stackStat(StatEnum.CORE_DEFENSE, defense_bonus);

    const bp_from_defense: number =
      this.defense_base + defense_bonus / 2;
    const bp_from_hp: number = stat.getStat(StatEnum.CORE_HP) / 10;
    const bp_from_pp: number = stat.getStat(StatEnum.CORE_PP);
    stat.stackStat(
      StatEnum.CORE_BP,
      Math.round(bp_from_defense + bp_from_hp + bp_from_pp),
    );

    return stat;
  }
}

export const unit = (
  name: string,
  rarity: GroupEnumUnitRarity,
  growth_data: [number, number][],
  getStatObject: statGetterFunction,
): Unit => {
  return new Unit(name, rarity, growth_data, getStatObject);
};
