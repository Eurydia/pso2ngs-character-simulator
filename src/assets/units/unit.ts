import statObject, { StatEnum, StatObject } from "../stat";

import UnitGroup from "./groupEnum";
import { calcBonusDef } from "./helper";

export class Unit {
  name: string;
  stats: StatObject;

  #growth_rate: [number, number][];
  #group: UnitGroup;

  constructor(
    name: string,
    group: UnitGroup,
    stats: StatObject,
    growth_rate: [number, number][],
  ) {
    this.name = name;
    this.stats = stats;

    this.#growth_rate = growth_rate;
    this.#group = group;
  }

  get rarity(): string {
    return this.#group;
  }

  get label(): string {
    return this.name;
  }

  get base_def(): number {
    return this.stats.getStat(StatEnum.CORE_DEFENSE);
  }

  getBonusDef(level: number): number {
    return calcBonusDef(level, this.#growth_rate);
  }
}

const unit = (
  name: string,
  group: UnitGroup,
  growth_rate: [number, number][],
  stats: Partial<{ [K in StatEnum]: number }>,
): Unit => {
  return new Unit(name, group, statObject(stats), growth_rate);
};

export default unit;
