import { ActionContext } from "../context";
import { StatObject } from "../stat";
import { GroupEnumFixa } from "./groupEnum";

export class Fixa {
  #level: number;

  name: string;
  group: GroupEnumFixa;
  getStatObject: (ctx: ActionContext) => StatObject;

  constructor(
    name: string,
    level: number,
    group: GroupEnumFixa,
    getStatObject: (ctx: ActionContext) => StatObject,
  ) {
    this.name = name;
    this.group = group;
    this.getStatObject = getStatObject;

    this.#level = level;
  }

  get level(): string {
    return this.#level.toString();
  }

  get label(): string {
    return `${this.name} ${this.level}`.trimEnd();
  }
}

export const fixa = (
  name: string,
  level: number,
  group: GroupEnumFixa,
  getStatObject: (ctx: ActionContext) => StatObject,
): Fixa => {
  return new Fixa(name, level, group, getStatObject);
};
