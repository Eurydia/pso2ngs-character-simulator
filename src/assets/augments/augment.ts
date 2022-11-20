import { capitalize as ld_capitalize } from "lodash";
import { romanize } from "romans";
import { parseValue } from "../../util";
import {
  StatAdd,
  StatEnum,
  StatEnumString,
  StatSpecial,
} from "../stat";
import GroupEnum from "./groupEnum";

const formatStat = (stat: StatEnum, value: number): string => {
  let res: string = "";

  if (StatAdd.has(stat)) {
    res = parseValue(value, 0, "add");
  } else {
    res = parseValue(value, 1, "percent");
  }

  if (StatSpecial.has(stat)) {
    res = parseValue(value, 0, "percent");
  }

  return res;
};

export class Augment {
  name: string;
  level: number;
  group: GroupEnum;
  conflict: Set<GroupEnum>;
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
    this.conflict = new Set(conflict);
    this.stats = stats;
  }

  get level_roman(): string {
    if (this.level > 0) {
      return romanize(this.level);
    }
    return "";
  }

  get label(): string {
    return `${this.name} ${this.level_roman}`.trimEnd();
  }

  get formatted_stats(): [string, string][] {
    const _formatted_stats: [string, string][] = [];
    for (const stat of Object.keys(this.stats)) {
      const value: number | undefined = this.stats[stat as StatEnum];

      if (value === undefined) {
        continue;
      }

      const f_label = StatEnumString[stat as StatEnum];
      const f_value = formatStat(stat as StatEnum, value);
      _formatted_stats.push([f_label, f_value]);
    }

    return _formatted_stats;
  }

  isConflicting(group: GroupEnum): boolean {
    return this.conflict.has(group);
  }
}

const augment = (
  name: string,
  level: number,
  group: GroupEnum,
  conflict: GroupEnum[],
  stats: Partial<{ [K in StatEnum]: number }>,
): Augment => {
  return new Augment(name, level, group, conflict, stats);
};

export default augment;
