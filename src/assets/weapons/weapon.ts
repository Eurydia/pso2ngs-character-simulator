import { StatEnum } from "../stat";
import WeaponGroup from "./groupEnum";

export class Weapon {
  name: string;
  base_attack: number;
  stats: Partial<{ [K in StatEnum]: number }>;
  group: WeaponGroup;
  #growth_rate: [number, number][];

  constructor(
    name: string,
    base_attack: number,
    group: WeaponGroup,
    stats: Partial<{ [K in StatEnum]: number }>,
    growth_rate: [number, number][],
  ) {
    this.name = name;
    this.base_attack = base_attack;
    this.group = group;
    this.stats = stats;

    this.#growth_rate = growth_rate;
  }

  // get label(): string {}
  // get formatted_stats(): string[] {}
  // get bp(): number {}

  // getAttack(level: number): number {
  //   return this.#attackGetter(this.base_attack, level);
  // }
}

const weapon = (
  name: string,
  base_attack: number,
  group: WeaponGroup,
  growth_rate: [number, number][],
  stats: Partial<{ [K in StatEnum]: number }>,
): Weapon => {
  return new Weapon(name, base_attack, group, stats, growth_rate);
};

export default weapon;
