import { ActionContext } from "../context";
import { StatObject } from "../stat";

type PotentialItem = {
  getStatObject: (ctx: ActionContext) => StatObject;
  label: string;
};

export class Potential {
  #name: string;
  #getStatObject_arr: ((ctx: ActionContext) => StatObject)[];

  #potentials: { [Key: string]: PotentialItem };

  constructor(
    name: string,
    getStatObject_arr: ((ctx: ActionContext) => StatObject)[],
  ) {
    this.#name = name;
    this.#getStatObject_arr = getStatObject_arr;
    this.#potentials = {};

    this.#getStatObject_arr.forEach((getStatObject, level_index) => {
      const level = level_index + 1;
      const label = `${this.#name} Lv. ${level}`;
      this.#potentials[label] = { label, getStatObject };
    });
  }

  getPotential(key: string): PotentialItem | null {
    const item: PotentialItem | undefined = this.#potentials[key];

    if (item === undefined) {
      return null;
    }

    return item;
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
