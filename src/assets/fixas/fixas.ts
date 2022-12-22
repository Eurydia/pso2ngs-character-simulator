import statObject, { StatEnum, StatObject } from "../stat";
import FixaGroup from "./groupEnum";

export type FixaInterface = {
  label: string;
  name: string;
  level: string;
  group: FixaGroup;
  stats: StatObject;
};

export class Fixa {
  name: string;
  #level: number;
  group: FixaGroup;
  stats: StatObject;

  constructor(
    name: string,
    level: number,
    group: FixaGroup,
    stats: StatObject,
  ) {
    this.name = name;
    this.group = group;
    this.stats = stats;

    this.#level = level;
  }

  get level(): string {
    return this.#level.toString();
  }

  get label(): string {
    return `${this.name} ${this.level}`.trimEnd();
  }
}

const fixa = (
  name: string,
  level: number,
  group: FixaGroup,
  stats: Partial<{ [K in StatEnum]: number }>,
): Fixa => {
  return new Fixa(name, level, group, statObject(stats));
};

export default fixa;
