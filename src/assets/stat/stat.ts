import { ActionContext } from "../context";

import { StatEnum, StatAdd, StatSpecial } from "./statEnum";
import { formatStat } from "./helper";

type PartialStatObject = Partial<{ [K in StatEnum]: number }>;

export class StatObject {
  #stat: PartialStatObject;
  getContextAware: (context: ActionContext) => PartialStatObject;

  constructor(
    stat: PartialStatObject,
    getContextAware: (context: ActionContext) => PartialStatObject,
  ) {
    this.#stat = stat;
    this.getContextAware = getContextAware;
  }

  #stackStatAdd(key: StatEnum, value: number): void {
    if (this.#stat[key] === undefined) {
      this.#stat[key] = value;
      return;
    }

    this.#stat[key]! += value;
  }

  #stackStatMuliply(key: StatEnum, value: number): void {
    if (this.#stat[key] === undefined) {
      this.#stat[key] = value;
      return;
    }

    this.#stat[key]! *= value;
  }

  stackStat(key: StatEnum, value: number): void {
    if (StatAdd.has(key) || StatSpecial.has(key)) {
      this.#stackStatAdd(key, value);
      return;
    }

    this.#stackStatMuliply(key, value);
  }

  merge(obj: StatObject): void {
    const keys = obj.keys;
    for (const key of keys) {
      const value: number = obj.getStat(key);
      this.stackStat(key, value);
    }
  }

  getStat(key: StatEnum, context: ActionContext = {}): number {
    const lookup_target = this.getContextAware(context);

    const value: number | undefined = lookup_target[key];

    if (value !== undefined) {
      return value;
    }

    // fallback
    if (StatAdd.has(key) || StatSpecial.has(key)) {
      return 0;
    }
    return 1;
  }

  getFormattedStat(stat: StatEnum): string | null {
    if (this.keys.includes(stat)) {
      return formatStat(stat, this.getStat(stat));
    }

    return null;
  }

  toString(): string {
    return JSON.stringify(this.#stat);
  }

  get keys(): StatEnum[] {
    return Object.keys(this.#stat) as StatEnum[];
  }
}

export const statObject = (
  stat: PartialStatObject = {},
  ctxFunction:
    | ((context: ActionContext) => PartialStatObject)
    | undefined = undefined,
): StatObject => {
  if (ctxFunction === undefined) {
    return new StatObject(stat, (ctx) => stat);
  }

  return new StatObject(stat, ctxFunction);
};
