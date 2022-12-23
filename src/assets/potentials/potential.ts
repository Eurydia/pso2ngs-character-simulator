import statObject, { StatEnum, StatObject } from "../stat";

type PotentialItem = {
  stats: StatObject;
  level: number;
  label: string;
};

export class Potential {
  #name: string;
  #stats: StatObject[];
  #stats_inactive: StatObject[];

  potentials: { [Key: string]: PotentialItem };

  constructor(
    name: string,
    stats: StatObject[],
    stats_inactive: StatObject[],
  ) {
    this.#name = name;
    this.#stats = stats;
    this.#stats_inactive = stats_inactive;

    this.potentials = {};

    for (
      let level_index = 0;
      level_index < this.#stats.length;
      level_index++
    ) {
      const level = level_index + 1;
      const label = `${this.#name} Lv. ${level}`;
      const stats = this.#stats[level_index];
      this.potentials[label] = { level, label, stats };
    }

    for (
      let level_index = 0;
      level_index < this.#stats_inactive.length;
      level_index++
    ) {
      const level = level_index + 1;
      const label = `${this.#name} Lv. ${level} (Inactive)`;
      const stats = this.#stats_inactive[level_index];
      this.potentials[label] = { level, label, stats };
    }
  }

  getPotential(key: string): PotentialItem | null {
    const item: PotentialItem | undefined = this.potentials[key];

    if (item !== undefined) {
      return item;
    }

    return null;
  }
}

const potential = (
  name: string,
  stats: Partial<{ [K in StatEnum]: number }>[],
  stats_inactive: Partial<{ [K in StatEnum]: number }>[] = [],
): Potential => {
  return new Potential(
    name,
    stats.map(statObject),
    stats_inactive.map(statObject),
  );
};

export default potential;
