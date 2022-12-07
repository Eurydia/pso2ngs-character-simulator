import StatEnum from "./statEnum";
import { formatStatObject } from "./helper";

export class StatObject {
  stats: Partial<{ [K in StatEnum]: number }>;

  constructor(stats: Partial<{ [K in StatEnum]: number }>) {
    this.stats = stats;
  }

  get toFormatted(): { label: string; value: string }[] {
    return formatStatObject(this.stats);
  }
}

const statObject = (
  stats: Partial<{ [K in StatEnum]: number }>,
): StatObject => {
  return new StatObject(stats);
};

export default statObject;
