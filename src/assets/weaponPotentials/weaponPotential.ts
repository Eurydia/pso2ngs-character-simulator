import statObject, { StatEnum, StatObject } from "../stat";

export class WeaponPotential {
  name: string;
  stats: StatObject[];
  stats_inactive: StatObject[];

  constructor(
    name: string,
    stats: StatObject[],
    stats_inactive: StatObject[],
  ) {
    this.name = name;
    this.stats = stats;
    this.stats_inactive = stats_inactive;
  }

  get label(): string {
    return this.name;
  }

  get toDict(): {
    [K: string]: { stats: StatObject; level: number; label: string };
  } {
    const dict: {
      [K: string]: {
        stats: StatObject;
        level: number;
        label: string;
      };
    } = {};

    for (
      let level_index = 0;
      level_index < this.stats.length;
      level_index++
    ) {
      const level = level_index + 1;
      const label = `${this.label} Lv. ${level}`;
      const stats = this.stats[level_index];
      dict[label] = { level, label, stats };
    }

    for (
      let level_index = 0;
      level_index < this.stats_inactive.length;
      level_index++
    ) {
      const level = level_index + 1;
      const label = `${this.label} Lv. ${level} (inactive)`;
      const stats = this.stats[level_index];
      dict[label] = { level, label, stats };
    }

    return dict;
  }
}

const weaponPotential = (
  name: string,
  stats: Partial<{ [K in StatEnum]: number }>[],
  stats_inactive: Partial<{ [K in StatEnum]: number }>[] = [],
): WeaponPotential => {
  return new WeaponPotential(
    name,
    stats.map(statObject),
    stats_inactive.map(statObject),
  );
};

export default weaponPotential;
