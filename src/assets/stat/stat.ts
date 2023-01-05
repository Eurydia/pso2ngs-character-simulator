import { StatEnum, StatAdd, StatSpecial } from "./statEnum";
import { formatStat } from "./helper";

type PartialStatObject = Partial<{ [K in StatEnum]: number }>;

export class StatObject {
  #data: PartialStatObject;

  constructor(data: PartialStatObject) {
    this.#data = data;
  }

  #stackStatAdd(key: StatEnum, value: number): void {
    if (this.#data[key] === undefined) {
      this.#data[key] = value;
      return;
    }

    this.#data[key]! += value;
  }

  #stackStatMuliply(key: StatEnum, value: number): void {
    if (this.#data[key] === undefined) {
      this.#data[key] = value;
      return;
    }

    this.#data[key]! *= value;
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

  setStat(key: StatEnum, value: number): void {
    this.#data[key] = value;
  }

  getStat(key: StatEnum): number {
    const value: number | undefined = this.#data[key];

    if (value !== undefined) {
      return value;
    }

    // fallback
    if (StatAdd.has(key) || StatSpecial.has(key)) {
      return 0;
    }
    return 1;
  }

  formatStat(stat: StatEnum): string | null {
    if (this.keys.includes(stat)) {
      return formatStat(stat, this.getStat(stat));
    }

    return null;
  }

  toString(): string {
    return JSON.stringify(this.#data);
  }

  get keys(): StatEnum[] {
    return Object.keys(this.#data) as StatEnum[];
  }
}

export const statObject = (
  data: PartialStatObject = {},
): StatObject => {
  return new StatObject(data);
};
