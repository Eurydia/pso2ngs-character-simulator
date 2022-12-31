import { StatEnum, StatAdd, StatSpecial } from "./statEnum";
import { formatStat } from "./helper";

export class StatObject {
  #stat: Partial<{ [K in StatEnum]: number }>;

  constructor(stat: Partial<{ [K in StatEnum]: number }>) {
    this.#stat = stat;
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

  getStat(key: StatEnum): number {
    const value: number | undefined = this.#stat[key];

    if (value !== undefined) {
      return value;
    }

    // fallback
    if (StatAdd.has(key) || StatSpecial.has(key)) {
      return 0;
    }
    return 1;
  }

  toString(): string {
    return JSON.stringify(this.#stat);
  }

  get keys(): StatEnum[] {
    return Object.keys(this.#stat) as StatEnum[];
  }

  getFormattedStat(stat: StatEnum): string | null {
    if (this.keys.includes(stat)) {
      return formatStat(stat, this.getStat(stat));
    }

    return null;
  }
}

export class ContextAwareStatObject {}

export const statObject = (
  stat: Partial<{ [K in StatEnum]: number }> = {},
): StatObject => {
  return new StatObject(stat);
};
