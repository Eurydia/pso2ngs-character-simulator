import statObject, { StatEnum, StatObject } from "../stat";
import { Potential } from "../potentials";
import WeaponGroup from "./groupEnum";

export class Weapon {
  name: string;
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
    this.name = name;
    this.group = group;
    this.potential = potential;
    this.stats = stats;

    this.#growth_rate = growth_rate;
  }

  get label(): string {
    return this.name;
  }

  get base_attack(): number {
    const _base_attack: number | undefined =
      this.stats.stats[StatEnum.CORE_ATTACK];

    if (_base_attack === undefined) {
      return 0;
    }
    return _base_attack;
  }
  // get bp(): number {}

  // getAttack(level: number): number {
  //   return this.#attackGetter(this.base_attack, level);
  // }
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
