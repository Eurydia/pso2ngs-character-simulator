import { StatEnum, statObject, StatObject } from "../stat";
import { ActionContext } from "../context";
import { Potential } from "../potentials";

import { GroupEnumWeaponRarity } from "./groupEnum";
import { calcAttackBonus } from "./helper";

// type statGetterFunction = (ctx: ActionContext) => StatObject;
// export class Weapon {
//   name: string;
//   rarity: GroupEnumWeaponRarity;
//   potential: Potential;

//   #getStatObject: statGetterFunction;
//   #growth_data: [number, number][];

//   constructor(
//     name: string,
//     group: GroupEnumWeaponRarity,
//     potential: Potential,
//     growth_rate: [number, number][],
//     getStatObject: statGetterFunction,
//   ) {
//     this.name = name;
//     this.rarity = group;
//     this.potential = potential;

//     this.#getStatObject = getStatObject;
//     this.#growth_data = growth_rate;
//   }

//   get label(): string {
//     return this.name;
//   }

//   get #damage_adjustment(): number {
//     const stat: StatObject = this.#getStatObject({});
//     return stat.getStat(StatEnum.ADV_OFF_FLOOR);
//   }

//   get #attack_base(): number {
//     const stat: StatObject = this.#getStatObject({});
//     return stat.getStat(StatEnum.CORE_ATTACK);
//   }

//   #getBonusAttack(level: number): number {
//     return calcBonusAtk(level, this.#growth_data);
//   }

//   getStatObject(
//     ctx: ActionContext,
//     weapon_level: number,
//     damage_adjustment: number,
//     potential_level: number,
//   ): StatObject {
//     const stat: StatObject = this.#getStatObject(ctx);

//     const attack_bonus: number = this.#getBonusAttack(weapon_level);
//     stat.stackStat(StatEnum.CORE_ATTACK, attack_bonus);

//     const bp_from_attack: number =
//       (this.#attack_base + attack_bonus) *
//       ((damage_adjustment * this.#damage_adjustment) / 2);
//     stat.stackStat(StatEnum.CORE_BP, Math.round(bp_from_attack));

//     const stat_potential: StatObject = this.potential.getStatObject(
//       ctx,
//       potential_level,
//     );
//     stat.merge(stat_potential);

//     return stat;
//   }
// }

export type Weapon = Readonly<{
  label: string;
  rarity: GroupEnumWeaponRarity;
  growth_rate: [number, number][];
  potential: Potential;
  getterFunction: (ctx: ActionContext) => StatObject;
}>;

export const Weapon = {
  getAttackBase: (weapon: Weapon): number => {
    const stat: StatObject = weapon.getterFunction({});
    return StatObject.getStat(stat, StatEnum.CORE_ATTACK);
  },

  getAttackBonus: (weapon: Weapon, weapon_level: number): number => {
    return calcAttackBonus(weapon_level, weapon.growth_rate);
  },

  getAttack: (weapon: Weapon, weapon_level: number): number => {
    const attack_base: number = Weapon.getAttackBase(weapon);
    const attack_bonus: number = Weapon.getAttackBonus(
      weapon,
      weapon_level,
    );
    return attack_base + attack_bonus;
  },

  getStatObject: (
    ctx: ActionContext,
    weapon: Weapon,
    weapon_level: number,
    damage_adjustment: number,
    potential_level: number,
  ): StatObject => {
    let result: StatObject = statObject();

    const stat_weapon: StatObject = weapon.getterFunction(ctx);
    result = StatObject.merge(result, stat_weapon);

    const attack_bonus: number = Weapon.getAttackBonus(
      weapon,
      weapon_level,
    );
    result = StatObject.stack(
      result,
      StatEnum.CORE_ATTACK,
      attack_bonus,
    );

    const floor_base: number = StatObject.getStat(
      stat_weapon,
      StatEnum.ADV_OFF_FLOOR,
    );
    const floor_adjustment: number = floor_base * damage_adjustment;
    result = StatObject.stack(
      result,
      StatEnum.CORE_BP,
      Weapon.getAttack(weapon, weapon_level) * (floor_adjustment / 2),
    );

    const stat_potential: StatObject = weapon.potential.getStatObject(
      ctx,
      potential_level,
    );
    result = StatObject.merge(result, stat_potential);

    return result;
  },
};
// export const getWeaponStatObject = (
//   ctx: ActionContext,
//   weapon: Weapon,
//   weapon_level: number,
//   potential_level: number,
//   damage_adjustment: number,
// ): StatObject => {

//   return result;
// };

export const weapon = (
  label: string,
  rarity: GroupEnumWeaponRarity,
  potential: Potential,
  growth_rate: [number, number][],
  getterFunction: (ctx: ActionContext) => StatObject,
): Weapon => {
  const result: Weapon = {
    label,
    rarity,
    potential,
    growth_rate,
    getterFunction,
  };

  return result;
};
