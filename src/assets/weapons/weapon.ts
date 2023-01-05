import {
  getStat,
  mergeStat,
  stackStat,
  StatEnum,
  statObject,
  StatObject,
} from "../stat";
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

export type Weapon = Readonly<{
  label: string;
  rarity: GroupEnumWeaponRarity;
  growth_rate: [number, number][];
  potential: Potential;
  getterFunction: (ctx: ActionContext) => StatObject;
}>;

export const getWeaponStatObject = (
  ctx: ActionContext,
  weapon: Weapon,
  weapon_level: number,
  potential_level: number,
  damage_adjustment: number,
): StatObject => {
  let result: StatObject = statObject();

  const stat_weapon: StatObject = weapon.getterFunction(ctx);
  result = mergeStat(result, stat_weapon);

  const weapon_attack_bonus: number = calcBonusAtk(
    weapon_level,
    weapon.growth_rate,
  );
  result = stackStat(
    result,
    StatEnum.CORE_ATTACK,
    weapon_attack_bonus,
  );

  const weapon_attack_base: number = getStat(
    stat_weapon,
    StatEnum.CORE_ATTACK,
  );

  const weapon_attack_total =
    weapon_attack_base + weapon_attack_bonus;

  const weapon_damage_adjustment: number = getStat(
    stat_weapon,
    StatEnum.ADV_OFF_FLOOR,
  );

  const damage_adjustment_total: number =
    damage_adjustment * weapon_damage_adjustment;
  result = stackStat(
    result,
    StatEnum.CORE_BP,
    Math.round(weapon_attack_total * (damage_adjustment_total / 2)),
  );

  const stat_potential: StatObject = weapon.potential.getStatObject(
    ctx,
    potential_level,
  );
  result = mergeStat(result, stat_potential);

  return result;
};

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
