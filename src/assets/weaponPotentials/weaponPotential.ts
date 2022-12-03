import { StatObject } from "../../types";

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
}

const weaponPotential = (
  name: string,
  stats: StatObject[],
  stats_inactive: StatObject[] = [],
): WeaponPotential => {
  return new WeaponPotential(name, stats, stats_inactive);
};

export default weaponPotential;
