import { ActionContext } from "../context";
import { StatEnum, statObject, StatObject } from "../stat";
import { Potential, potential } from "./potential";

export const RECYCLER_UNIT = ((): Potential => {
  const data_weapon_up: number[] = [1.18, 1.2, 1.23, 1.24, 1.25];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (_: ActionContext): StatObject => {
      const level = level_index + 1;

      return statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Recycler Unit", getStatObject_arr);
})();

export const INDOMITABLE_UNIT = ((): Potential => {
  const data_weapon_up: number[] = [1.18, 1.2, 1.23, 1.24, 1.25];
  const data_ail_res: number[] = [1.1, 1.1, 1.1, 1.2, 1.4];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (_: ActionContext): StatObject => {
      const level = level_index + 1;
      const ail_res_up: number = data_ail_res[level_index];

      return statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.AIL_BLIND]: ail_res_up,
        [StatEnum.AIL_BURN]: ail_res_up,
        [StatEnum.AIL_FREEZE]: ail_res_up,
        [StatEnum.AIL_PANIC]: ail_res_up,
        [StatEnum.AIL_PHYDOWN]: ail_res_up,
        [StatEnum.AIL_POISON]: ail_res_up,
        [StatEnum.AIL_SHOCK]: ail_res_up,
      });
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Indomitable Unit", getStatObject_arr);
})();

export const DEFENSIVE_FORMATION = ((): Potential => {
  const data_weapon_up: number[] = [1.17, 1.19, 1.22, 1.22, 1.23];
  const data_crit_chance: number[] = [0.15, 0.15, 0.15, 0.18, 0.27];
  const data_defense_breakoff: number[] = [
    1000, 1000, 1000, 1000, 1200,
  ];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const crit_chance = data_crit_chance[level_index];
      const defense_breakoff = data_defense_breakoff[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      const characer_defense: number | undefined =
        ctx.character.defenseValue;

      if (characer_defense === undefined) {
        return stat;
      }

      if (characer_defense >= defense_breakoff) {
        stat.setStat(StatEnum.ADV_OFF_CRIT_CHANCE, crit_chance);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Defensive Formation", getStatObject_arr);
})();

export const OFFENSIVE_FORMATION = (() => {
  const data_weapon_up: number[] = [1.17, 1.19, 1.22, 1.22, 1.23];
  const data_crit_chance: number[] = [0.15, 0.15, 0.15, 0.18, 0.27];
  const data_attack_breakoff: number[] = [
    2000, 2000, 2000, 2000, 2400,
  ];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const crit_chance = data_crit_chance[level_index];
      const attack_breakoff = data_attack_breakoff[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      const character_attack: number | undefined =
        ctx.character.attackValue;

      if (character_attack === undefined) {
        return stat;
      }

      if (character_attack >= attack_breakoff) {
        stat.setStat(StatEnum.ADV_OFF_CRIT_CHANCE, crit_chance);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Offensive Formation", getStatObject_arr);
})();

export const VALOROUS_UNIT = ((): Potential => {
  const data_weapon_up: number[] = [1.16, 1.18, 1.21, 1.21, 1.22];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (_: ActionContext): StatObject => {
      const level = level_index + 1;

      return statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Valorous Unit", getStatObject_arr);
})();

export const DYNAMO_UNIT = ((): Potential => {
  const data_weapon_up: number[] = [1.16, 1.18, 1.21, 1.21, 1.22];
  const data_crit_chance: number[] = [0.15, 0.15, 0.15, 0.18, 0.25];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const crit_chance = data_crit_chance[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      if (ctx.character.hasDodgedAttack) {
        stat.setStat(StatEnum.ADV_OFF_CRIT_CHANCE, crit_chance);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Dynamo Formation", getStatObject_arr);
})();

export const MUSTERED_MIGHT_UNIT = ((): Potential => {
  const data_weapon_up: number[] = [1.15, 1.17, 1.2, 1.21, 1.22];
  const data_weapon_up_extra: number[] = [1.2, 1.22, 1.25, 1.26, 1.3];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const weapon_up_extra = data_weapon_up_extra[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      if (
        ctx.character.hpValue === undefined ||
        ctx.character.hpValue === undefined
      ) {
        return stat;
      }

      if (ctx.character.hpValue === ctx.character.hpValueCurrent) {
        stat.setStat(StatEnum.WEAPON_MELEE, weapon_up_extra);
        stat.setStat(StatEnum.WEAPON_RANGED, weapon_up_extra);
        stat.setStat(StatEnum.WEAPON_TECHNIQUE, weapon_up_extra);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Mustered Might Unit", getStatObject_arr);
})();

export const BASTION_UNIT = ((): Potential => {
  const data_weapon_up: number[] = [1.18, 1.2, 1.23, 1.24, 1.25];
  const data_dmg_res: number[] = [1.4, 1.4, 1.4, 1.5, 1.5];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const dmg_res = data_dmg_res[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      if (
        ctx.character.hpValue === undefined ||
        ctx.character.hpValueCurrent === undefined
      ) {
        return stat;
      }

      const hp_percent =
        ctx.character.hpValueCurrent / ctx.character.hpValue;

      if (hp_percent >= 0.8) {
        stat.setStat(StatEnum.ADV_DEF_DAMAGE_RES, dmg_res);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Bastion Unit", getStatObject_arr);
})();

export const MEDITATION_UNIT = ((): Potential => {
  const data_weapon_up: number[] = [1.18, 1.2, 1.23, 1.24, 1.25];
  const data_pp_recovery: number[] = [1.1, 1.1, 1.1, 1.15, 1.2];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (_: ActionContext): StatObject => {
      const level = level_index + 1;
      const pp_recovery = data_pp_recovery[level_index];

      return statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_PP_NATURAL_RECOVERY]: pp_recovery,
        [StatEnum.ADV_PP_ACTIVE_RECOVERY]: pp_recovery,
      });
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Meditation Unit", getStatObject_arr);
})();

export const BERSERK_UNIT = ((): Potential => {
  const data_weapon_up: number[] = [1.21, 1.23, 1.26, 1.27, 1.31];
  const data_damage_res: number[] = [0.9, 0.9, 0.9, 0.92, 0.95];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (_: ActionContext): StatObject => {
      const level = level_index + 1;
      const damage_res = data_damage_res[level_index];

      return statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
      });
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Berserk Unit", getStatObject_arr);
})();

export const SOULSPRING_UNIT = ((): Potential => {
  const data_weapon_up: number[] = [1.2, 1.22, 1.25, 1.26, 1.27];
  const data_pb_recovery: number[] = [1.2, 1.2, 1.2, 1.2, 1.4];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const pb_recovery = data_pb_recovery[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      if (ctx.character.isAttacking) {
        stat.setStat(StatEnum.ADV_OFF_PB_RECOVERY, pb_recovery);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Soulspring Unit", getStatObject_arr);
})();

export const FORTRESS_UNIT = ((): Potential => {
  const data_weapon_up: number[] = [1.17, 1.19, 1.22, 1.23, 1.24];
  const data_damage_res: number[] = [1.5, 1.5, 1.5, 1.5, 1.5];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const damage_res = data_damage_res[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      if (ctx.character.hasActiveBarrier) {
        stat.setStat(StatEnum.ADV_DEF_DAMAGE_RES, damage_res);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Soulspring Unit", getStatObject_arr);
})();

export const REINVIGORATING_UNIT = ((): Potential => {
  const data_weapon_up: number[] = [1.17, 1.19, 1.22, 1.23, 1.24];
  const data_pp: number[] = [10, 10, 10, 10, 15];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const pp = data_pp[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      if (
        ctx.character.hpValue === undefined ||
        ctx.character.hpValueCurrent === undefined
      ) {
        return stat;
      }

      const hp_percent =
        ctx.character.hpValueCurrent / ctx.character.hpValue;

      if (hp_percent <= 0.5 && ctx.character.isAttacking) {
        stat.setStat(StatEnum.CORE_PP, pp);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Reinvigorating Unit", getStatObject_arr);
})();

export const FOCUSED_UNIT = ((): Potential => {
  const data_weapon_up: number[] = [1.15, 1.17, 1.2, 1.21, 1.22];
  const data_crit_chance: number[] = [0.22, 0.22, 0.22, 0.22, 0.3];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (_: ActionContext): StatObject => {
      const level = level_index + 1;
      const crit_chance = data_crit_chance[level_index];

      return statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_OFF_CRIT_CHANCE]: crit_chance,
      });
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Focused Unit", getStatObject_arr);
})();

export const FIGHTING_SPIRIT_UNIT = ((): Potential => {
  const data_weapon_up: number[] = [1.14, 1.16, 1.19, 1.2, 1.21];
  const data_weapon_up_extra: number[] = [
    1.18, 1.2, 1.23, 1.24, 1.31,
  ];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const weapon_up_extra = data_weapon_up_extra[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      if (ctx.target === undefined) {
        return stat;
      }

      if (ctx.target.isBoss) {
        stat.setStat(StatEnum.WEAPON_MELEE, weapon_up_extra);
        stat.setStat(StatEnum.WEAPON_RANGED, weapon_up_extra);
        stat.setStat(StatEnum.WEAPON_TECHNIQUE, weapon_up_extra);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Fighting Spirit Unit", getStatObject_arr);
})();

export const VIGOROUS_UNIT = ((): Potential => {
  const data_weapon_up: number[] = [1.21, 1.23, 1.26, 1.27, 1.28];
  const data_damage_res: number[] = [1.1, 1.1, 1.1, 1.1, 1.2];
  const data_healing_up: number[] = [1.2, 1.2, 1.2, 1.2, 1.25];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (_: ActionContext): StatObject => {
      const level = level_index + 1;
      const damage_res = data_damage_res[level_index];
      const healing_up = data_healing_up[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
        [StatEnum.ADV_DEF_HEALING]: healing_up,
      });

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Vigorous Unit", getStatObject_arr);
})();

export const EXPLOSIVE_UNIT = ((): Potential => {
  const data_weapon_up: number[] = [1.15, 1.17, 1.2, 1.21, 1.22];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (_: ActionContext): StatObject => {
      const level = level_index + 1;

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Explosive Unit", getStatObject_arr);
})();

export const HARMONIOUS_UNIT = ((): Potential => {
  const data_weapon_up: number[] = [1.12, 1.14, 1.17, 1.18, 1.19];
  const data_crit_chance: number[] = [0.15, 0.15, 0.15, 0.15, 0.15];
  const data_crit_chance_extra: number[] = [
    0.25, 0.25, 0.25, 0.25, 0.3,
  ];
  const data_hp_breakpoint: number[] = [0.8, 0.8, 0.8, 0.8, 0.5];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const crit_chance = data_crit_chance[level_index];
      const crit_chance_extra = data_crit_chance_extra[level_index];
      const hp_breakpoint = data_hp_breakpoint[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_OFF_CRIT_CHANCE]: crit_chance,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      if (
        ctx.character.hpValue === undefined ||
        ctx.character.hpValueCurrent === undefined
      ) {
        return stat;
      }

      const hp_percent =
        ctx.character.hpValueCurrent / ctx.character.hpValue;

      if (hp_percent >= hp_breakpoint) {
        stat.setStat(StatEnum.ADV_OFF_CRIT_CHANCE, crit_chance_extra);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Harmonious Unit", getStatObject_arr);
})();

export const IMBUED_UNIT = ((): Potential => {
  const data_weapon_up: number[] = [1.17, 1.23, 1.26, 1.27, 1.28];
  const data_pp_usage: number[] = [0.9, 0.9, 0.9, 0.9, 0.85];
  const data_pp_recovery: number[] = [1.2, 1.2, 1.2, 1.2, 1.3];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const pp_usage = data_pp_usage[level_index];
      const pp_recovery = data_pp_recovery[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_PP_USAGE]: pp_usage,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      if (ctx.character.isAttacking) {
        stat.setStat(StatEnum.ADV_PP_ACTIVE_RECOVERY, pp_recovery);
        stat.setStat(StatEnum.ADV_PP_NATURAL_RECOVERY, pp_recovery);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Imbued Unit", getStatObject_arr);
})();

export const VIRTUOSO_UNIT = ((): Potential => {
  const data_weapon_up: number[] = [1.18, 1.2, 1.22, 1.26, 1.27];
  const data_value_max: number[] = [1.15, 1.15, 1.15, 1.15, 1.2];
  const data_value_per_augment: number[] = [
    0.01, 0.01, 0.01, 0.01, 0.02,
  ];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const value_per_augment = data_value_per_augment[level_index];
      const value_max = data_value_max[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      if (ctx.character.uniqueAugments !== undefined) {
        let effect_up =
          ctx.character.uniqueAugments * value_per_augment;

        if (effect_up > value_max) {
          effect_up = value_max;
        }

        stat.setStat(StatEnum.ADV_DEF_HEALING, effect_up);
        stat.setStat(StatEnum.ADV_PP_USAGE, 2 - effect_up);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Virtuoso Unit", getStatObject_arr);
})();

export const UNASSAILABLE_UNIT = ((): Potential => {
  const data_weapon_up = [1.15, 1.18, 1.21, 1.22, 1.23];
  const data_weapon_up_extra = [1.2, 1.23, 1.26, 1.27, 1.33];
  const data_damage_res = [1.05, 1.05, 1.05, 1.05, 1.1];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const weapon_up_extra = data_weapon_up_extra[level_index];
      const damage_res = data_damage_res[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      if (ctx.location === undefined) {
        return stat;
      }

      if (ctx.location.geometricLabyrinth) {
        stat.setStat(StatEnum.WEAPON_MELEE, weapon_up_extra);
        stat.setStat(StatEnum.WEAPON_RANGED, weapon_up_extra);
        stat.setStat(StatEnum.WEAPON_TECHNIQUE, weapon_up_extra);
        stat.setStat(StatEnum.ADV_DEF_DAMAGE_RES, damage_res);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Unassailable Unit", getStatObject_arr);
})();

export const ELUSIVE_UNIT = ((): Potential => {
  const data_weapon_up = [1.16, 1.18, 1.21, 1.22, 1.23];
  const data_recovery_up = [2, 2, 2, 2, 2.5];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const recovery_up = data_recovery_up[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      if (ctx.character.hasDodgedAttack) {
        stat.setStat(StatEnum.ADV_PP_NATURAL_RECOVERY, recovery_up);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Elusive Unit", getStatObject_arr);
})();

export const TRAMPLE_UNIT = ((): Potential => {
  const data_weapon_up = [1.15, 1.17, 1.2, 1.22, 1.23];
  const data_weapon_up_extra = [1.21, 1.23, 1.26, 1.26, 1.31];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const weapon_up_extra = data_weapon_up_extra[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      if (ctx.target === undefined) {
        return stat;
      }

      if (ctx.target.isNonBoss) {
        stat.setStat(StatEnum.WEAPON_MELEE, weapon_up_extra);
        stat.setStat(StatEnum.WEAPON_RANGED, weapon_up_extra);
        stat.setStat(StatEnum.WEAPON_TECHNIQUE, weapon_up_extra);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Trample Unit", getStatObject_arr);
})();

export const STACCATO_UNIT = ((): Potential => {
  const data_weapon_up = [1.18, 1.2, 1.22, 1.23, 1.24];
  const data_pp_recovery = [1.2, 1.2, 1.2, 1.2, 1.3];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const pp_recovery = data_pp_recovery[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      if (ctx.character.isAttacking) {
        stat.setStat(StatEnum.ADV_PP_ACTIVE_RECOVERY, pp_recovery);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Staccato Unit", getStatObject_arr);
})();

export const DESPERATION_UNIT = ((): Potential => {
  const data_weapon_up = [1.12, 1.14, 1.17, 1.18, 1.19];
  const data_crit_chance = [1.3, 1.3, 1.3, 1.3, 1.3];
  const data_pp_breakpoint = [0.5, 0.5, 0.5, 0.5, 0.7];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const crit_chance = data_crit_chance[level_index];
      const pp_breakpoint = data_pp_breakpoint[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      if (
        ctx.character.ppValue === undefined ||
        ctx.character.ppValueCurrent === undefined
      ) {
        return stat;
      }

      const pp_percent =
        ctx.character.ppValueCurrent / ctx.character.ppValue;

      if (pp_percent < pp_breakpoint) {
        stat.setStat(StatEnum.ADV_OFF_CRIT_CHANCE, crit_chance);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Desperation Unit", getStatObject_arr);
})();

export const REVOLUTIONARY_UNIT = ((): Potential => {
  const data_weapon_up = [1.18, 1.2, 1.23, 1.24, 1.25];
  const data_pp_recovery = [1.2, 1.2, 1.2, 1.2, 1.3];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const pp_recovery = data_pp_recovery[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      if (ctx.character.hasTakenDamage) {
        stat.setStat(StatEnum.ADV_PP_ACTIVE_RECOVERY, pp_recovery);
        stat.setStat(StatEnum.ADV_PP_NATURAL_RECOVERY, pp_recovery);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Revolutionary Unit", getStatObject_arr);
})();

export const ILLUSORY_UNIT = ((): Potential => {
  const data_weapon_up = [1.18, 1.2, 1.23, 1.24, 1.25];
  const data_recovery_up = [2, 2, 2, 2, 2.5];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const recovery_up = data_recovery_up[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      if (ctx.character.hasDodgedAttack) {
        stat.setStat(StatEnum.ADV_PP_NATURAL_RECOVERY, recovery_up);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Illurosy Unit", getStatObject_arr);
})();

export const IMPERVIOUS_UNIT = ((): Potential => {
  const data_weapon_up = [1.19, 1.21, 1.24, 1.25, 1.26];
  const data_damage_res = [1.4, 1.4, 1.4, 1.4, 1.4];
  const data_hp_breakpoint = [1, 1, 1, 1, 0.9];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const damage_res = data_damage_res[level_index];
      const hp_breakpoint = data_hp_breakpoint[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      if (
        ctx.character.hpValue === undefined ||
        ctx.character.hpValueCurrent === undefined
      ) {
        return stat;
      }

      const hp_percent =
        ctx.character.hpValueCurrent / ctx.character.hpValue;

      if (hp_percent >= hp_breakpoint) {
        stat.setStat(StatEnum.ADV_DEF_DAMAGE_RES, damage_res);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Impervious Unit", getStatObject_arr);
})();

export const PURSUIT_UNIT = ((): Potential => {
  const data_weapon_up = [1.12, 1.14, 1.17, 1.19];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (_: ActionContext): StatObject => {
      const level = level_index + 1;

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Pursuit Unit", getStatObject_arr);
})();

export const CITADEL_UNIT = ((): Potential => {
  const data_weapon_up = [1.18, 1.2, 1.23, 1.25];
  const data_damage_res = [1.4, 1.4, 1.4, 1.4];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const damage_res = data_damage_res[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      if (ctx.character.hasActiveBarrier) {
        stat.setStat(StatEnum.ADV_DEF_DAMAGE_RES, damage_res);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Citadel Unit", getStatObject_arr);
})();

export const GYRATING_UNIT = ((): Potential => {
  const data_weapon_up = [1.18, 1.2, 1.23, 1.25];
  const data_pp_usage = [0.7, 0.7, 0.7, 0.7];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (_: ActionContext): StatObject => {
      const level = level_index + 1;
      const pp_usage = data_pp_usage[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_PP_USAGE]: pp_usage,
      });

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Gyrating Unit", getStatObject_arr);
})();

export const TEMPERED_FORM = ((): Potential => {
  const data_weapon_up = [1.12, 1.14, 1.16, 1.17];
  const data_crit_chance = [0.1, 0.1, 0.1, 0.1];
  const data_pp_usage = [0.9, 0.9, 0.9, 0.9];
  const data_pb_recovery = [1.2, 1.2, 1.2, 1.2];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const crit_chance = data_crit_chance[level_index];
      const pp_usage = data_pp_usage[level_index];
      const pb_recovery = data_pb_recovery[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_OFF_CRIT_CHANCE]: crit_chance,
        [StatEnum.ADV_PP_USAGE]: pp_usage,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      if (ctx.character.isAttacking) {
        stat.setStat(StatEnum.ADV_OFF_PB_RECOVERY, pb_recovery);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Tempered Form", getStatObject_arr);
})();

export const CORUSCATING_UNIT = ((): Potential => {
  const data_weapon_up = [1.12, 1.14, 1.16, 1.17];
  const data_crit_chance = [0.1, 0.1, 0.1, 0.1];
  const data_pp_recovery = [1.2, 1.2, 1.2, 1.2];
  const data_damage_res = [1.2, 1.2, 1.2, 1.2];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level = level_index + 1;
      const crit_chance = data_crit_chance[level_index];
      const pp_usage = data_pp_recovery[level_index];
      const damage_res = data_damage_res[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_OFF_CRIT_CHANCE]: crit_chance,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      if (ctx.character.hasCriticallyHit) {
        stat.setStat(StatEnum.ADV_PP_USAGE, pp_usage);
        stat.setStat(StatEnum.ADV_DEF_DAMAGE_RES, damage_res);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Coruscating Unit", getStatObject_arr);
})();

export const ABSORPTION_UNIT = ((): Potential => {
  const data_weapon_up = [1.19, 1.21, 1.24, 1.25];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  data_weapon_up.forEach((weapon_up, level_index) => {
    const getStatObject = (_: ActionContext): StatObject => {
      const level = level_index + 1;

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: level * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Absorption Unit", getStatObject_arr);
})();
