import { StatEnum, statObject, StatObject } from "../stat";
import { ActionContext } from "../ContextAction";
import { Potential } from "../potentials";

import { GroupEnumWeaponRarity } from "./groupEnum";
import { calcAttackBonus } from "./helper";

const LOOKUP_WEAPON: { [key: string]: Weapon } = {};

export type Weapon = Readonly<{
  label: string;
  rarity: GroupEnumWeaponRarity;
  growth_rate: [number, number][];
  potential: Potential;
  enhancement_max: number;
  level_required: number;
  getAwareStatObject: (ctx: ActionContext) => StatObject;
}>;

export const Weapon = {
  toString: (weapon: Weapon | null): string => {
    if (weapon === null) {
      return JSON.stringify(null);
    }
    return weapon.label;
  },

  fromLabel: (label: string): Weapon | null => {
    if (label in LOOKUP_WEAPON) {
      return LOOKUP_WEAPON[label];
    }
    return null;
  },

  getAttackBase: (weapon: Weapon): number => {
    const stat: StatObject = weapon.getAwareStatObject({});
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

    const stat_weapon: StatObject = weapon.getAwareStatObject(ctx);
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
      Math.round(
        Weapon.getAttack(weapon, weapon_level) *
          (floor_adjustment / 2),
      ),
    );

    const stat_potential: StatObject = Potential.getStateObject(
      ctx,
      weapon.potential,
      potential_level,
    );
    result = StatObject.merge(result, stat_potential);

    return result;
  },
};

export const weapon = (
  label: string,
  rarity: GroupEnumWeaponRarity,
  enhancement_max: number,
  level_required: number,
  potential: Potential,
  growth_rate: [number, number][],
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Weapon => {
  const result: Weapon = {
    label,
    rarity,
    enhancement_max,
    level_required,
    potential,
    growth_rate,
    getAwareStatObject,
  };

  LOOKUP_WEAPON[label] = result;

  return result;
};
