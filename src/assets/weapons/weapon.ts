import { StatEnum, StatObject } from "../stat";
import { Potential } from "../potentials";

import { GroupEnumWeapon } from "./groupEnum";
import { calcBonusAtk } from "./helper";
import { ActionContext } from "../context";

export class Weapon {
  name: string;
  potential: Potential;
  getStatObject: (ctx: ActionContext) => StatObject;

  #growth_data: [number, number][];
  #group: GroupEnumWeapon;

  constructor(
    name: string,
    group: GroupEnumWeapon,
    potential: Potential,
    growth_rate: [number, number][],
    getStatObject: (ctx: ActionContext) => StatObject,
  ) {
    this.name = name;
    this.getStatObject = getStatObject;
    this.potential = potential;

    this.#group = group;
    this.#growth_data = growth_rate;
  }

  get rarity(): string {
    return this.#group;
  }

  get label(): string {
    return this.name;
  }

  get base_attack(): number {
    const stat = this.getStatObject({});
    return stat.getStat(StatEnum.CORE_ATTACK);
  }

  getBonusAttack(level: number): number {
    return calcBonusAtk(level, this.#growth_data);
  }
}

export const weapon = (
  name: string,
  group: GroupEnumWeapon,
  potential: Potential,
  growth_rate: [number, number][],
  getStatObject: (ctx: ActionContext) => StatObject,
): Weapon => {
  return new Weapon(
    name,
    group,
    potential,
    growth_rate,
    getStatObject,
  );
};
