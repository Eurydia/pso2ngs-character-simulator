import statObject, { StatEnum, StatObject } from "../stat";
import FixaGroup from "./groupEnum";

export class Fixa {
  #level: number;

  name: string;
  group: FixaGroup;
  stat: StatObject;

  constructor(
    name: string,
    level: number,
    group: FixaGroup,
    stat: StatObject,
  ) {
    this.name = name;
    this.group = group;
    this.stat = stat;

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
  stat: Partial<{ [K in StatEnum]: number }>,
): Fixa => {
  return new Fixa(name, level, group, statObject(stat));
};

export default fixa;
