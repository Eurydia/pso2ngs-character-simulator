import { romanize } from "romans";

import { statObject, StatEnum, StatObject } from "../stat";

import { GroupEnumAugment } from "./groupEnum";

export class Augment {
  #level: number;
  #conflict: Set<GroupEnumAugment>;

  name: string;
  stats: StatObject;
  group: GroupEnumAugment;

  constructor(
    name: string,
    level: number,
    group: GroupEnumAugment,
    conflict: GroupEnumAugment[],
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

  isConflictingWith(group: GroupEnumAugment): boolean {
    return this.#conflict.has(group);
  }
}

export const augment = (
  name: string,
  level: number,
  group: GroupEnumAugment,
  conflict: GroupEnumAugment[],
  stats: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return new Augment(name, level, group, conflict, statObject(stats));
};
