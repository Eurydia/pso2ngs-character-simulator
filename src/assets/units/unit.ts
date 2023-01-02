import { ActionContext } from "../context";
import { StatEnum, StatObject } from "../stat";

import { GroupEnumUnit } from "./groupEnum";
import { calcBonusDef } from "./helper";

export class Unit {
  name: string;
  getStatObject: (ctx: ActionContext) => StatObject;

  #growth_data: [number, number][];
  #group: GroupEnumUnit;

  constructor(
    name: string,
    group: GroupEnumUnit,
    growth_rate: [number, number][],
    getStatObject: (ctx: ActionContext) => StatObject,
  ) {
    this.name = name;
    this.getStatObject = getStatObject;

    this.#growth_data = growth_rate;
    this.#group = group;
  }

  get rarity(): string {
    return this.#group;
  }

  get label(): string {
    return this.name;
  }

  get base_def(): number {
    const stat = this.getStatObject({});

    return stat.getStat(StatEnum.CORE_DEFENSE);
  }

  getBonusDef(level: number): number {
    return calcBonusDef(level, this.#growth_data);
  }
}

export const unit = (
  name: string,
  group: GroupEnumUnit,
  growth_data: [number, number][],
  getStatObject: (ctx: ActionContext) => StatObject,
): Unit => {
  return new Unit(name, group, growth_data, getStatObject);
};
