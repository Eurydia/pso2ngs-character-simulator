import statObject, { StatEnum, StatObject } from "../stat";
import FixaGroup from "./groupEnum";

export class Fixa {
  name: string;
  level: number;
  group: FixaGroup;
  stats: StatObject;

  constructor(
    name: string,
    level: number,
    group: FixaGroup,
    stats: StatObject,
  ) {
    this.name = name;
    this.level = level;
    this.group = group;
    this.stats = stats;
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
