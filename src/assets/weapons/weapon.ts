import { StatEnum, StatObject } from "../stat";
import { Potential } from "../potentials";

import { GroupEnumWeaponRarity } from "./groupEnum";
import { calcBonusAtk } from "./helper";
import { ActionContext } from "../context";

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

export type Weapon = {
  label: string;
  rarity: GroupEnumWeaponRarity;
  potential: Potential;
  getStatObject: (
    ctx: ActionContext,
    weapon_level: number,
    damage_adjustment: number,
    potential_level: number,
  ) => StatObject;
};

export const weapon = (
  label: string,
  rarity: GroupEnumWeaponRarity,
  potential: Potential,
  growth_rate: [number, number][],
  getterFunction: (ctx: ActionContext) => StatObject,
): Weapon => {
  const getStatObject = (
    ctx: ActionContext,
    weapon_level: number,
    damage_adjustment: number,
    potential_level: number,
  ) => {
    const stat: StatObject = getterFunction(ctx);

    const attack_bonus: number = calcBonusAtk(
      weapon_level,
      growth_rate,
    );
    stat.stackStat(StatEnum.CORE_ATTACK, attack_bonus);

    const attack_base: number = stat.getStat(StatEnum.CORE_ATTACK);

    const damage_adjustment_base: number = stat.getStat(
      StatEnum.ADV_OFF_FLOOR,
    );
    const bp_from_attack: number =
      (attack_base + attack_bonus) *
      ((damage_adjustment * damage_adjustment_base) / 2);
    stat.stackStat(StatEnum.CORE_BP, Math.round(bp_from_attack));

    return stat;
  };

  const result: Weapon = {
    label,
    rarity,
    potential,
    getStatObject,
  };

  return result;
};
