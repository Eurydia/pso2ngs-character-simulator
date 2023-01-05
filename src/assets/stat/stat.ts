import { StatEnum, StatAdd, StatSpecial } from "./statEnum";
import { formatStat } from "./helper";

type StatObjectPartial = Partial<{ [K in StatEnum]: number }>;

export class StatObject {
  #data: StatObjectPartial;

  constructor(data: StatObjectPartial) {
    this.#data = data;
  }

  #stackStatAdd(key: StatEnum, value: number): StatObject {
    const next_data: StatObjectPartial = { ...this.#data };

    if (next_data[key] === undefined) {
      next_data[key] = value;
      return new StatObject(next_data);
    }

    this.#data[key]! += value;
    return new StatObject(next_data);
  }

  #stackStatMuliply(key: StatEnum, value: number): StatObject {
    const next_data: StatObjectPartial = { ...this.#data };

    if (next_data[key] === undefined) {
      next_data[key] = value;
      return new StatObject(next_data);
    }

    next_data[key]! *= value;
    return new StatObject(next_data);
  }

  stackStat(key: StatEnum, value: number): StatObject {
    if (StatAdd.has(key) || StatSpecial.has(key)) {
      return this.#stackStatAdd(key, value);
    }

    return this.#stackStatMuliply(key, value);
  }

  merge(obj: StatObject): StatObject {
    let result = new StatObject({});

    const keys = obj.keys;
    for (const key of keys) {
      const value: number = obj.getStat(key);
      result = this.stackStat(key, value);
    }

    return result;
  }

  setStat(key: StatEnum, value: number): StatObject {
    const next_data: StatObjectPartial = { ...this.#data };

    next_data[key] = value;

    return new StatObject(next_data);
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
  data: StatObjectPartial = {},
): StatObject => {
  return new StatObject(data);
};
