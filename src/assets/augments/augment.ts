import { capitalize as ld_capitalize } from "lodash";
import { romanize } from "romans";
import { parseValue } from "../../util";
import {
  Stat,
  StatAdd,
  StatEnum,
  StatEnumString,
  StatSpecial,
} from "../stat";
import GroupEnum from "./groupEnum";

export class Augment {
  name: string;
  level: number;
  group: GroupEnum;
  conflict: Set<GroupEnum>;
  stats: Partial<{ [K in StatEnum]: number }>;
  is_variant: boolean;

  label: string;

  constructor(
    name: string,
    level: number,
    group: GroupEnum,
    conflict: GroupEnum[],
    stats: Partial<{ [K in StatEnum]: number }>,
    is_variant: boolean,
  ) {
    this.name = name;
    this.level = level;
    this.group = group;
    this.conflict = new Set(conflict);
    this.stats = stats;
    this.is_variant = is_variant;

    this.label = this.#formattedName();
  }

  #formattedName(): string {
    const _name = this.name.split(" ").map(ld_capitalize).join(" ");

    let display_name = `${_name}`;

    if (this.level > 0) {
      display_name = `${display_name} ${romanize(this.level)}`;
    }

    if (this.is_variant) {
      display_name = `* ${display_name}`;
    }

    return display_name;
  }

  isConflicting(group: GroupEnum): boolean {
    return this.conflict.has(group);
  }

  getFormattedStats(): string[] {
    const formatted_stats: string[] = [];

    for (const stat of Object.keys(this.stats)) {
      const stat_name = StatEnumString[stat as StatEnum]
        .split(" ")
        .map(ld_capitalize)
        .join(" ");
      const value = this.stats[stat as StatEnum]!;

      let value_formatted: string = parseValue(value, 1, "percent");
      if (StatAdd.includes(stat as StatEnum)) {
        value_formatted = parseValue(value, 0, "add");
      }
      if (StatSpecial.includes(stat as StatEnum)) {
        value_formatted = parseValue(value, 0, "percent");
      }

      formatted_stats.push(`${value_formatted} ${stat_name}`);
    }

    return formatted_stats;
  }
}

const augment = (
  name: string,
  level: number,
  group: GroupEnum,
  conflict: GroupEnum[],
  stats: Partial<{ [K in StatEnum]: number }>,
  is_variant: boolean = false,
): Augment => {
  return new Augment(name, level, group, conflict, stats, is_variant);
};

export default augment;
