import StatEnum, { StatAdd, StatSpecial } from "./statEnum";
import { formatStat, formatStatObject } from "./helper";

export class StatObject {
  stats: Partial<{ [K in StatEnum]: number }>;

  constructor(stats: Partial<{ [K in StatEnum]: number }>) {
    this.stats = stats;
  }

  get toFormatted(): { label: string; value: string }[] {
    return formatStatObject(this.stats);
  }

  stackStat(key: StatEnum, value: number): void {
    if (StatAdd.has(key) || StatSpecial.has(key)) {
      if (this.stats[key] === undefined) {
        this.stats[key] = value;
        return;
      }
      this.stats[key]! += value;
      return;
    }

    if (this.stats[key] === undefined) {
      this.stats[key] = value;
      return;
    }
    this.stats[key]! *= value;
  }

  getStat(stat: StatEnum): number {
    const value: number | undefined = this.stats[stat];

    if (value !== undefined) {
      return value;
    }

    // fallback
    if (StatAdd.has(stat) || StatSpecial.has(stat)) {
      return 0;
    }
    return 1;
  }

  getFormattedStat(stat: StatEnum): string {
    return formatStat(stat, this.getStat(stat));
  }
}

const statObject = (
  stats: Partial<{ [K in StatEnum]: number }>,
): StatObject => {
  return new StatObject(stats);
};

export default statObject;
