import { ActionContext } from "../context";
import { StatObject } from "../stat";
import { GroupEnumFixa } from "./groupEnum";

type getterFunction = (ctx: ActionContext) => StatObject;
export class Fixa {
  #level: number;

  name: string;
  group: GroupEnumFixa;
  getStatObject: getterFunction;

  constructor(
    name: string,
    level: number,
    group: GroupEnumFixa,
    getStatObject: getterFunction,
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
  getStatObject: getterFunction,
): Fixa => {
  return new Fixa(name, level, group, getStatObject);
};
