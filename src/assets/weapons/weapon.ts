import { StatEnum, StatObject } from "../stat";
import { Potential } from "../potentials";

import { GroupEnumWeaponRarity } from "./groupEnum";
import { calcBonusAtk } from "./helper";
import { ActionContext } from "../context";

type statGetterFunctionSignature = (ctx: ActionContext) => StatObject;
export class Weapon {
  name: string;
  rarity: GroupEnumWeaponRarity;
  potential: Potential;

  #getStatObject: statGetterFunctionSignature;
  #growth_data: [number, number][];

  constructor(
    name: string,
    group: GroupEnumWeaponRarity,
    potential: Potential,
    growth_rate: [number, number][],
    getStatObject: statGetterFunctionSignature,
  ) {
    this.name = name;
    this.rarity = group;
    this.potential = potential;

    this.#getStatObject = getStatObject;
    this.#growth_data = growth_rate;
  }

  get label(): string {
    return this.name;
  }

  get #damage_adjustment(): number {
    const stat: StatObject = this.#getStatObject({});
    return stat.getStat(StatEnum.ADV_OFF_FLOOR);
  }

  get #base_attack(): number {
    const stat: StatObject = this.#getStatObject({});
    return stat.getStat(StatEnum.CORE_ATTACK);
  }

  #getBonusAttack(level: number): number {
    return calcBonusAtk(level, this.#growth_data);
  }

  getStatObject(
    ctx: ActionContext,
    weapon_level: number,
    damage_adjustment: number,
    potential_level: number,
  ): StatObject {
    const stat: StatObject = this.#getStatObject(ctx);

    const atk_bonus: number = this.#getBonusAttack(weapon_level);
    stat.stackStat(StatEnum.CORE_ATTACK, atk_bonus);

    const atk_base: number = this.#base_attack;
    const bp_from_atk: number =
      (atk_base + atk_bonus) *
      ((damage_adjustment * this.#damage_adjustment) / 2);
    stat.stackStat(StatEnum.CORE_BP, Math.round(bp_from_atk));

    const stat_potential: StatObject = this.potential.getStatObject(
      ctx,
      potential_level,
    );
    stat.merge(stat_potential);

    return stat;
  }
}

export const weapon = (
  name: string,
  rarity: GroupEnumWeaponRarity,
  potential: Potential,
  growth_rate: [number, number][],
  getStatObject: statGetterFunctionSignature,
): Weapon => {
  return new Weapon(
    name,
    rarity,
    potential,
    growth_rate,
    getStatObject,
  );
};
