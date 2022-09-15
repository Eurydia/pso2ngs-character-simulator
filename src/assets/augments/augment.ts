import { Stat } from "../stat/stat";
import GroupEnum from "./groupEnum";

export type Augment = {
  name: string;
  level: number;
  group: GroupEnum;
  conflict: GroupEnum[];
  stats: Stat[];
};

class augmentClass {
  name: string;
  level: number;
  group: GroupEnum;
  conflict: GroupEnum[];
  stats: Stat[];

  constructor(
    name: string,
    level: number,
    group: GroupEnum,
    conflict: GroupEnum[],
    stats: Stat[],
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
  return new augmentClass(name, level, group, conflict, stats);
};

export default augment;
