import { StatEnum, statObject, StatObject } from "../stat";
import { ActionContext } from "../context";
import { Potential } from "../potentials";

import { GroupEnumWeaponRarity } from "./groupEnum";
import { calcAttackBonus } from "./helper";

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

    const stat_potential: StatObject =
      weapon.potential.getAwareStatObject(ctx, potential_level);
    result = StatObject.merge(result, stat_potential);

    return result;
  },
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
