import statObject, { StatEnum, StatObject } from "../stat";

type PotentialItem = {
  stat: StatObject;
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

    this.#stats.forEach((stat, level_index) => {
      const level = level_index + 1;
      const label = `${this.#name} Lv. ${level}`;
      this.potentials[label] = { level, label, stat };
    });

    this.#stats_inactive.forEach((stat, level_index) => {
      const level = level_index + 1;
      const label = `(Inactive) ${this.#name} Lv. ${level}`;
      this.potentials[label] = { level, label, stat };
    });
  }

  getPotential(key: string): PotentialItem | null {
    const item: PotentialItem | undefined = this.potentials[key];

    if (item !== undefined) {
      return item;
    }

    return null;
  }

  get keys(): string[] {
    return Object.keys(this.potentials);
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
