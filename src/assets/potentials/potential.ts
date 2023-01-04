import { StatObject, statObject } from "../stat";
import { ActionContext } from "../context";

type getterFunction = (
  ctx: ActionContext,
  level_index: number,
) => StatObject;

export class Potential {
  name: string;
  level_max: number;
  #getterFunction: getterFunction;

  constructor(
    name: string,
    level_max: number,
    getterFunction: getterFunction,
  ) {
    this.name = name;
    this.level_max = level_max;
    this.#getterFunction = getterFunction;
  }

  getStatObject(ctx: ActionContext, level: number): StatObject {
    if (level < 1 || level > this.level_max) {
      return statObject();
    }
    return this.#getterFunction(ctx, level - 1);
  }
}

export const potential = (
  name: string,
  level_max: number,
  getterFunction: getterFunction,
): Potential => {
  return new Potential(name, level_max, getterFunction);
};
