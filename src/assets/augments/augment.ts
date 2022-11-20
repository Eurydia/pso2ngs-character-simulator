import { romanize } from "romans";
import { formatStat, parseValue } from "../../util";
import { StatEnum, StatEnumString } from "../stat";
import AugmentGroup from "./groupEnum";

export class Augment {
  name: string;
  level: number;
  group: AugmentGroup;
  conflict: Set<AugmentGroup>;
  stats: Partial<{ [K in StatEnum]: number }>;

  constructor(
    name: string,
    level: number,
    group: AugmentGroup,
    conflict: AugmentGroup[],
    stats: Partial<{ [K in StatEnum]: number }>,
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
  return new Augment(name, level, group, conflict, stats);
};

export default augment;
