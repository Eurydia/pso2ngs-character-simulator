import StatEnum, { StatAdd, StatSpecial } from "./statEnum";
import { formatStat } from "./helper";

export class StatObject {
  stats: Partial<{ [K in StatEnum]: number }>;

  constructor(stats: Partial<{ [K in StatEnum]: number }>) {
    this.stats = stats;
  }

  #stackStatAdd(key: StatEnum, value: number): void {
    if (this.stats[key] === undefined) {
      this.stats[key] = value;
      return;
    }

    this.stats[key]! += value;
  }

  #stackStatMuliply(key: StatEnum, value: number): void {
    if (this.stats[key] === undefined) {
      this.stats[key] = value;
      return;
    }

    this.stats[key]! *= value;
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
    const value: number | undefined = this.stats[key];

    if (value !== undefined) {
      return value;
    }

    // fallback
    if (StatAdd.has(key) || StatSpecial.has(key)) {
      return 0;
    }
    return 1;
  }

  get keys(): StatEnum[] {
    return Object.keys(this.stats) as StatEnum[];
  }

  getFormattedStat(stat: StatEnum): string | null {
    if (this.keys.includes(stat)) {
      return formatStat(stat, this.getStat(stat));
    }

    return null;
  }
}

const statObject = (
  stats: Partial<{ [K in StatEnum]: number }> = {},
): StatObject => {
  return new StatObject(stats);
};

export default statObject;
