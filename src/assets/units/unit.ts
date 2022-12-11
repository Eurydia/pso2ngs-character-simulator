import statObject, { StatEnum, StatObject } from "../stat";
import UnitGroup from "./groupEnum";
import { calcBonusDEF } from "./helper";

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

  get base_def(): number {
    const _base_def: number | undefined =
      this.stats.stats[StatEnum.CORE_DEFENSE];

    if (_base_def === undefined) {
      return 0;
    }
    return _base_def;
  }

  getBonusDef(level: number): number {
    return calcBonusDEF(level, this.base_def, this.#growth_rate);
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
