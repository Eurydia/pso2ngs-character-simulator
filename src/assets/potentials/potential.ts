import { ActionContext } from "../context";
import { StatObject } from "../stat";

export class Potential {
  #name: string;
  #potentials: { [Key: string]: (ctx: ActionContext) => StatObject };

  constructor(
    name: string,
    getStatObject_arr: ((ctx: ActionContext) => StatObject)[],
  ) {
    this.#name = name;
    this.#potentials = {};

    getStatObject_arr.forEach((_getStatObject, level_index) => {
      const level = level_index + 1;
      const label = `${this.#name} Lv. ${level}`;
      this.#potentials[label] = _getStatObject;
    });
  }

  getPotential(
    key: string,
  ): ((ctx: ActionContext) => StatObject) | null {
    const _getterFunction:
      | ((ctx: ActionContext) => StatObject)
      | undefined = this.#potentials[key];

    if (_getterFunction === undefined) {
      return null;
    }

    return _getterFunction;
  }

  get keys(): string[] {
    return Object.keys(this.#potentials);
  }
}

export const potential = (
  name: string,
  getStatObject_arr: ((ctx: ActionContext) => StatObject)[],
): Potential => {
  return new Potential(name, getStatObject_arr);
};
