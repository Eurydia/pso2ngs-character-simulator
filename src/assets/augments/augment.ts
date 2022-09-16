import { StatEnum } from "../stat";
import { Stat } from "../stat/stat";
import GroupEnum from "./groupEnum";

// export type Augment = {
//   name: string;
//   level: number;
//   group: GroupEnum;
//   conflict: GroupEnum[];
//   stats: Stat[];
// };

export class Augment {
  name: string;
  level: number;
  group: GroupEnum;
  conflict: GroupEnum[];
  stats: Partial<{ [K in StatEnum]: number }>;

  constructor(
    name: string,
    level: number,
    group: GroupEnum,
    conflict: GroupEnum[],
    stats: Partial<{ [K in StatEnum]: number }>,
  ) {
    this.name = name;
    this.level = level;
    this.group = group;
    this.conflict = conflict;
    this.stats = stats;
  }

  checkConflict(group: GroupEnum): boolean {
    return this.conflict.includes(group);
  }
}

const augment = (
  name: string,
  level: number,
  group: GroupEnum,
  conflict: GroupEnum[],
  stats: Stat[],
): Augment => {
  const _stats: Partial<{ [K in StatEnum]: number }> = {};
  for (const stat of stats) {
    _stats[stat.stat_type] = stat.amount;
  }

  return new Augment(name, level, group, conflict, _stats);
};

export default augment;
