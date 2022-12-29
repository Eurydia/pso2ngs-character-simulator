import statObject, { StatEnum, StatObject } from "../stat";
import { Potential } from "../potentials";

import WeaponGroup from "./groupEnum";
import { calcBonusAtk } from "./helper";

export class Weapon {
  name: string;
  stat: StatObject;
  potential: Potential;

  #growth_rate: [number, number][];
  #group: WeaponGroup;

  constructor(
    name: string,
    group: WeaponGroup,
    potential: Potential,
    stats: StatObject,
    growth_rate: [number, number][],
  ) {
    this.name = name;
    this.stat = stats;
    this.potential = potential;

    this.#group = group;
    this.#growth_rate = growth_rate;
  }

  get rarity(): string {
    return this.#group;
  }

  get label(): string {
    return this.name;
  }

  get base_attack(): number {
    return this.stat.getStat(StatEnum.CORE_ATTACK);
  }

  getBonusAttack(level: number): number {
    return calcBonusAtk(level, this.#growth_rate);
  }
}

const weapon = (
  name: string,
  group: WeaponGroup,
  potential: Potential,
  growth_rate: [number, number][],
  stat: Partial<{ [K in StatEnum]: number }>,
): Weapon => {
  return new Weapon(
    name,
    group,
    potential,
    statObject(stat),
    growth_rate,
  );
};

export default weapon;
