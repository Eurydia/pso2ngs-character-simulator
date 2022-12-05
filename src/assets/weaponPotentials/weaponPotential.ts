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
