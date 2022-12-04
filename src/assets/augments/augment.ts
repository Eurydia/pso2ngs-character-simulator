import { romanize } from "romans";
import AugmentGroup from "./groupEnum";
import statObject, { StatEnum, StatObject } from "../stat";
export class Augment {
  name: string;
  level: number;
  group: AugmentGroup;
  conflict: Set<AugmentGroup>;
  stats: StatObject;

  constructor(
    name: string,
    level: number,
    group: AugmentGroup,
    conflict: AugmentGroup[],
    stats: StatObject,
  ) {
    this.name = name;
    this.level = level;
    this.group = group;
    this.conflict = new Set(conflict);
    this.stats = stats;
  }

  get level_roman(): string {
    if (this.level > 0) {
      return romanize(this.level);
    }
    return "";
  }

  get label(): string {
    return `${this.name} ${this.level_roman}`.trimEnd();
  }

  isConflicting(group: AugmentGroup): boolean {
    return this.conflict.has(group);
  }
}

const augment = (
  name: string,
  level: number,
  group: AugmentGroup,
  conflict: AugmentGroup[],
  stats: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return new Augment(name, level, group, conflict, statObject(stats));
};

export default augment;
