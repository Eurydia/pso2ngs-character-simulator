import statObject, { StatEnum, StatObject } from "../stat";
import { Potential } from "../potentials";

import WeaponGroup from "./groupEnum";
import { calcBonusATK } from "./helper";

export type WeaponInterface = {
  label: string;
  stats: StatObject;
  group: WeaponGroup;
  potential: Potential;
  base_attack: number;
  getBonusAttack: (level: number) => number;
};

class Weapon {
  #name: string;
  stats: StatObject;
  group: WeaponGroup;
  potential: Potential;

  #growth_rate: [number, number][];

  constructor(
    name: string,
    group: WeaponGroup,
    potential: Potential,
    stats: StatObject,
    growth_rate: [number, number][],
  ) {
    this.#name = name;
    this.stats = stats;
    this.group = group;
    this.potential = potential;

    this.#growth_rate = growth_rate;
  }

  get label(): string {
    return this.#name;
  }

  get base_attack(): number {
    return this.stats.getStat(StatEnum.CORE_ATTACK);
  }

  getBonusAttack(level: number): number {
    return calcBonusATK(level, this.#growth_rate);
  }
}

const weapon = (
  name: string,
  group: WeaponGroup,
  potential: Potential,
  growth_rate: [number, number][],
  stats: Partial<{ [K in StatEnum]: number }>,
): Weapon => {
  return new Weapon(
    name,
    group,
    potential,
    statObject(stats),
    growth_rate,
  );
};

export default weapon;
