import { romanize } from "romans";

import { ActionContext } from "../context";
import { StatObject } from "../stat";

import { GroupEnumAugment } from "./groupEnum";

type getterFunction = (ctx: ActionContext) => StatObject;
export class Augment {
  #level: number;
  #conflict: Set<GroupEnumAugment>;

  name: string;
  group: GroupEnumAugment;
  getStatObject: getterFunction;

  constructor(
    name: string,
    level: number,
    group: GroupEnumAugment,
    conflict: GroupEnumAugment[],
    getStatObject: getterFunction,
  ) {
    this.name = name;
    this.group = group;

    this.getStatObject = getStatObject;
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
  getStatObject: getterFunction,
): Augment => {
  return new Augment(name, level, group, conflict, getStatObject);
};
