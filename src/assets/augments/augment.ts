import { romanize } from "romans";
import AugmentGroup from "./groupEnum";
import statObject, { StatEnum, StatObject } from "../stat";

export class Augment {
  #level: number;
  #conflict: Set<AugmentGroup>;

  name: string;
  stats: StatObject;
  group: AugmentGroup;

  constructor(
    name: string,
    level: number,
    group: AugmentGroup,
    conflict: AugmentGroup[],
    stats: StatObject,
  ) {
    this.name = name;
    this.group = group;
    this.stats = stats;

    this.#level = level;
    this.#conflict = new Set(conflict);
  }

  get level(): string {
    return this.#level.toString();
  }

  get level_roman(): string {
    if (this.#level > 0) {
      return romanize(this.#level);
    }
    return "";
  }

  get label(): string {
    return `${this.name} ${this.level_roman}`.trimEnd();
  }

  isConflictingWith(group: AugmentGroup): boolean {
    return this.#conflict.has(group);
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
