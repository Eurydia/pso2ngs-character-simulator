import { romanize } from "romans";

import { ActionContext } from "../context";
import { StatObject } from "../stat";

import { GroupEnumAugment } from "./groupEnum";

export class Augment {
  #level: number;
  #conflict: Set<GroupEnumAugment>;
  #getStatObject: (ctx: ActionContext) => StatObject;

  name: string;
  group: GroupEnumAugment;

  constructor(
    name: string,
    level: number,
    group: GroupEnumAugment,
    conflict: GroupEnumAugment[],
    getStatObject: (ctx: ActionContext) => StatObject,
  ) {
    this.name = name;
    this.group = group;

    this.#getStatObject = getStatObject;
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

  getStatObject(ctx: ActionContext = {}): StatObject {
    return this.#getStatObject(ctx);
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
  getStatObject: (ctx: ActionContext) => StatObject,
): Augment => {
  return new Augment(name, level, group, conflict, getStatObject);
};
