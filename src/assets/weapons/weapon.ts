import { StatEnum, statObject, StatObject } from "../stat";
import { ActionContext } from "../ContextAction";
import { Potential } from "../potentials";

import { GroupEnumWeaponRarity } from "./groupEnum";

const WEAPON_LOOKUP: { [key: string]: Weapon } = {};

export type Weapon = Readonly<{
  label: string;
  rarity: GroupEnumWeaponRarity;
  base_attack: number;
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
    return JSON.stringify(weapon.label);
  },

  fromLabel: (label: string): Weapon | null => {
    if (label in WEAPON_LOOKUP) {
      return WEAPON_LOOKUP[label];
    }
    return null;
  },

  getAttackBase: (weapon: Weapon): number => {
    return weapon.base_attack;
  },

  getAttackBonus: (
    enhancement: number,
    growth_rate: [number, number][],
  ): number => {
    let result: number = 0;
    for (const entry of growth_rate) {
      const [gr_level, gr_bonus] = entry;

      if (enhancement > gr_level) {
        result = gr_bonus;
        continue;
      }
      // exact match
      if (enhancement === gr_level) {
        return gr_bonus;
      }
      if (enhancement < gr_level) {
        return Math.round((enhancement / gr_level) * gr_bonus);
      }
    }
    return result;
  },

  getAttack: (weapon: Weapon, enhancement: number): number => {
    const attack_base: number = Weapon.getAttackBase(weapon);
    const attack_bonus: number = Weapon.getAttackBonus(
      enhancement,
      weapon.growth_rate,
    );
    return attack_base + attack_bonus;
  },

  getStatObject: (
    ctx: ActionContext,
    weapon: Weapon,
    enhancement: number,
    damage_adjustment: number,
    potential_level: number,
  ): StatObject => {
    let stat_total: StatObject = statObject();

    const stat_weapon: StatObject = weapon.getAwareStatObject(ctx);
    stat_total = StatObject.merge(stat_total, stat_weapon);

    const attack_bonus: number = Weapon.getAttackBonus(
      enhancement,
      weapon.growth_rate,
    );
    stat_total = StatObject.stack(
      stat_total,
      StatEnum.CORE_ATTACK,
      attack_bonus,
    );

    const floor_base: number = StatObject.getStat(
      stat_weapon,
      StatEnum.ADV_OFF_FLOOR,
    );
    const floor_adjustment: number = floor_base * damage_adjustment;
    stat_total = StatObject.stack(
      stat_total,
      StatEnum.CORE_BP,
      Math.round(
        Weapon.getAttack(weapon, enhancement) *
          (floor_adjustment / 2),
      ),
    );

    const stat_potential: StatObject = Potential.getStateObject(
      ctx,
      weapon.potential,
      potential_level,
    );
    stat_total = StatObject.merge(stat_total, stat_potential);

    return stat_total;
  },
};

export const weapon = (
  label: string,
  rarity: GroupEnumWeaponRarity,
  base_attack: number,
  enhancement_max: number,
  level_required: number,
  potential: Potential,
  growth_rate: [number, number][],
  getAwareStatObject: (ctx: ActionContext) => StatObject,
): Weapon => {
  const result: Weapon = {
    label,
    rarity,
    base_attack,
    enhancement_max,
    level_required,
    potential,
    growth_rate,
    getAwareStatObject,
  };

  WEAPON_LOOKUP[label] = result;

  return result;
};
