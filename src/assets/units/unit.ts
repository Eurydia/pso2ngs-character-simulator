import statObject, { StatEnum, StatObject } from "../stat";
import UnitGroup from "./groupEnum";

export class Unit {
  name: string;
  stats: StatObject;
  group: UnitGroup;

  #growth_rate: [number, number][];

  constructor(
    name: string,
    group: UnitGroup,
    stats: StatObject,
    growth_rate: [number, number][],
  ) {
    this.name = name;
    this.group = group;
    this.stats = stats;

    this.#growth_rate = growth_rate;
  }

  get label(): string {
    return this.name;
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
