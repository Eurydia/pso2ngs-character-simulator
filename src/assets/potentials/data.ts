import { ActionContext } from "../context";
import { StatEnum, statObject, StatObject } from "../stat";
import { Potential, potential } from "./potential";

export const RECYCLER_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.23, 1.24, 1.25];
  const _getterFunction = (
    _: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    return statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
      [StatEnum.WEAPON_MELEE]: weapon_up,
      [StatEnum.WEAPON_RANGED]: weapon_up,
      [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
    });
  };
  return potential(
    "Recycler Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const INDOMITABLE_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.23, 1.24, 1.25];
  const DATA_AIL_RES: number[] = [1.1, 1.1, 1.1, 1.2, 1.4];
  const _getterFunction = (
    _: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const ail_res: number = DATA_AIL_RES[level_index];
    return statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
      [StatEnum.WEAPON_MELEE]: weapon_up,
      [StatEnum.WEAPON_RANGED]: weapon_up,
      [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      [StatEnum.AIL_BLIND]: ail_res,
      [StatEnum.AIL_BURN]: ail_res,
      [StatEnum.AIL_FREEZE]: ail_res,
      [StatEnum.AIL_PANIC]: ail_res,
      [StatEnum.AIL_DOWN]: ail_res,
      [StatEnum.AIL_POISON]: ail_res,
      [StatEnum.AIL_SHOCK]: ail_res,
    });
  };
  return potential(
    "Indomitable Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const DEFENSIVE_FORMATION = ((): Potential => {
  const DATA_WEPON_UP: number[] = [1.17, 1.19, 1.22, 1.22, 1.23];
  const DATA_CRIT_CHANCE: number[] = [0.15, 0.15, 0.15, 0.18, 0.27];
  const DATA_DEF_BREAKOFF: number[] = [1000, 1000, 1000, 1000, 1200];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEPON_UP[level_index];
    const crit_chance: number = DATA_CRIT_CHANCE[level_index];
    const def_breakoff: number = DATA_DEF_BREAKOFF[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
      [StatEnum.WEAPON_MELEE]: weapon_up,
      [StatEnum.WEAPON_RANGED]: weapon_up,
      [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
    });

    if (ctx.character === undefined) {
      return stat;
    }

    const char_defense: number | undefined =
      ctx.character.defenseValue;

    if (char_defense === undefined) {
      return stat;
    }

    if (char_defense >= def_breakoff) {
      stat.setStat(StatEnum.ADV_OFF_CRIT_CHANCE, crit_chance);
    }

    return stat;
  };
  return potential(
    "Defensive Formation",
    DATA_WEPON_UP.length,
    _getterFunction,
  );
})();

export const OFFENSIVE_FORMATION = (() => {
  const DATA_WEAPON_UP: number[] = [1.17, 1.19, 1.22, 1.22, 1.23];
  const DATA_CRIT_CHANCE: number[] = [0.15, 0.15, 0.15, 0.18, 0.27];
  const DATA_ATK_BREAKOFF: number[] = [2000, 2000, 2000, 2000, 2400];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const crit_chance: number = DATA_CRIT_CHANCE[level_index];
    const atk_breakoff: number = DATA_ATK_BREAKOFF[level_index];

    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
      [StatEnum.WEAPON_MELEE]: weapon_up,
      [StatEnum.WEAPON_RANGED]: weapon_up,
      [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
    });

    if (ctx.character === undefined) {
      return stat;
    }

    const char_attack: number | undefined = ctx.character.attackValue;

    if (char_attack === undefined) {
      return stat;
    }

    if (char_attack >= atk_breakoff) {
      stat.setStat(StatEnum.ADV_OFF_CRIT_CHANCE, crit_chance);
    }

    return stat;
  };
  return potential(
    "Offensive Formation",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const VALOROUS_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.16, 1.18, 1.21, 1.21, 1.22];
  const _getterFunction = (
    _: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    return statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
      [StatEnum.WEAPON_MELEE]: weapon_up,
      [StatEnum.WEAPON_RANGED]: weapon_up,
      [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
    });
  };
  return potential(
    "Valorous Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const DYNAMO_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.16, 1.18, 1.21, 1.21, 1.22];
  const DATA_CRIT_CHANCE: number[] = [0.15, 0.15, 0.15, 0.18, 0.25];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const crit_chance: number = DATA_CRIT_CHANCE[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
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
  return potential(
    "Dynamo Formation",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const MUSTERED_MIGHT_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.15, 1.17, 1.2, 1.21, 1.22];
  const DATA_WEAPON_UP_EXTRA: number[] = [1.2, 1.22, 1.25, 1.26, 1.3];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const weapon_up_extra: number = DATA_WEAPON_UP_EXTRA[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
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

    const hp_current: number = ctx.character.hpValueCurrent;
    const hp: number = ctx.character.hpValue;

    if (hp_current === hp) {
      stat.setStat(StatEnum.WEAPON_MELEE, weapon_up_extra);
      stat.setStat(StatEnum.WEAPON_RANGED, weapon_up_extra);
      stat.setStat(StatEnum.WEAPON_TECHNIQUE, weapon_up_extra);
    }

    return stat;
  };
  return potential(
    "Mustered Might Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const BASTION_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.23, 1.24, 1.25];
  const DATA_DAMAGE_RES: number[] = [1.4, 1.4, 1.4, 1.5, 1.5];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const damage_res: number = DATA_DAMAGE_RES[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
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

    const hp_current = ctx.character.hpValueCurrent;
    const hp = ctx.character.hpValue;
    const hp_percent = hp_current / hp;

    if (hp_percent >= 0.8) {
      stat.setStat(StatEnum.ADV_DEF_DAMAGE_RES, damage_res);
    }

    return stat;
  };
  return potential(
    "Bastion Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const MEDITATION_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.23, 1.24, 1.25];
  const DATA_PP_RECOVERY: number[] = [1.1, 1.1, 1.1, 1.15, 1.2];
  const _getterFunction = (
    _: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const pp_recovery: number = DATA_PP_RECOVERY[level_index];

    return statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
      [StatEnum.WEAPON_MELEE]: weapon_up,
      [StatEnum.WEAPON_RANGED]: weapon_up,
      [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      [StatEnum.ADV_PP_NATURAL_RECOVERY]: pp_recovery,
      [StatEnum.ADV_PP_ACTIVE_RECOVERY]: pp_recovery,
    });
  };
  return potential(
    "Meditation Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const BERSERK_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.21, 1.23, 1.26, 1.27, 1.31];
  const DATA_DAMAGE_RES: number[] = [0.9, 0.9, 0.9, 0.92, 0.95];
  const _getterFunction = (
    _: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const damage_res: number = DATA_DAMAGE_RES[level_index];
    return statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
      [StatEnum.WEAPON_MELEE]: weapon_up,
      [StatEnum.WEAPON_RANGED]: weapon_up,
      [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
    });
  };
  return potential(
    "Berserk Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const SOULSPRING_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.2, 1.22, 1.25, 1.26, 1.27];
  const DATA_PB_RECOVERY: number[] = [1.2, 1.2, 1.2, 1.2, 1.4];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const pb_recovery: number = DATA_PB_RECOVERY[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
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
  return potential(
    "Soulspring Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const FORTRESS_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.17, 1.19, 1.22, 1.23, 1.24];
  const DATA_DAMAGE_RES: number[] = [1.5, 1.5, 1.5, 1.5, 1.5];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const damage_res: number = DATA_DAMAGE_RES[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
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
  return potential(
    "Fortress Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const REINVIGORATING_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.17, 1.19, 1.22, 1.23, 1.24];
  const DATA_PP: number[] = [10, 10, 10, 10, 15];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const pp: number = DATA_PP[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
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

    const hp_current: number = ctx.character.hpValueCurrent;
    const hp: number = ctx.character.hpValue;
    const hp_percent: number = hp_current / hp;

    if (hp_percent <= 0.5 && ctx.character.isAttacking) {
      stat.setStat(StatEnum.CORE_PP, pp);
    }

    return stat;
  };
  return potential(
    "Reinvigorating Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const FOCUSED_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.15, 1.17, 1.2, 1.21, 1.22];
  const DATA_CRIT_CHANCE: number[] = [0.22, 0.22, 0.22, 0.22, 0.3];
  const _getterFunction = (
    _: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const crit_chance: number = DATA_CRIT_CHANCE[level_index];
    return statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
      [StatEnum.WEAPON_MELEE]: weapon_up,
      [StatEnum.WEAPON_RANGED]: weapon_up,
      [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      [StatEnum.ADV_OFF_CRIT_CHANCE]: crit_chance,
    });
  };
  return potential(
    "Focused Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const FIGHTING_SPIRIT_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.14, 1.16, 1.19, 1.2, 1.21];
  const DATA_WEAPON_UP_EXTRA: number[] = [
    1.18, 1.2, 1.23, 1.24, 1.31,
  ];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const weapon_up_extra: number = DATA_WEAPON_UP_EXTRA[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
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
  return potential(
    "Fighting Spirit Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const VIGOROUS_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.21, 1.23, 1.26, 1.27, 1.28];
  const DATA_DAMAGE_RES: number[] = [1.1, 1.1, 1.1, 1.1, 1.2];
  const DATA_HEALING_UP: number[] = [1.2, 1.2, 1.2, 1.2, 1.25];
  const _getterFunction = (
    _: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const damage_res: number = DATA_DAMAGE_RES[level_index];
    const healing_up: number = DATA_HEALING_UP[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
      [StatEnum.WEAPON_MELEE]: weapon_up,
      [StatEnum.WEAPON_RANGED]: weapon_up,
      [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
      [StatEnum.ADV_DEF_HEALING]: healing_up,
    });
    return stat;
  };
  return potential(
    "Vigorous Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const EXPLOSIVE_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.15, 1.17, 1.2, 1.21, 1.22];
  const _getterFunction = (
    _: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
      [StatEnum.WEAPON_MELEE]: weapon_up,
      [StatEnum.WEAPON_RANGED]: weapon_up,
      [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
    });
    return stat;
  };
  return potential(
    "Explosive Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const HARMONIOUS_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.12, 1.14, 1.17, 1.18, 1.19];
  const DATA_CRIT_CHANCE: number[] = [0.15, 0.15, 0.15, 0.15, 0.15];
  const DATA_CRIT_CHANCE_EXTRA: number[] = [
    0.25, 0.25, 0.25, 0.25, 0.3,
  ];
  const DATA_HP_BREAKOFF: number[] = [0.8, 0.8, 0.8, 0.8, 0.5];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const crit_chance: number = DATA_CRIT_CHANCE[level_index];
    const crit_chance_extra: number =
      DATA_CRIT_CHANCE_EXTRA[level_index];
    const hp_breakpoint: number = DATA_HP_BREAKOFF[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
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

    const hp_current: number = ctx.character.hpValueCurrent;
    const hp: number = ctx.character.hpValue;
    const hp_percent: number = hp_current / hp;

    if (hp_percent >= hp_breakpoint) {
      stat.setStat(StatEnum.ADV_OFF_CRIT_CHANCE, crit_chance_extra);
    }

    return stat;
  };
  return potential(
    "Harmonious Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const IMBUED_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.17, 1.23, 1.26, 1.27, 1.28];
  const DATA_PP_USAGE: number[] = [0.9, 0.9, 0.9, 0.9, 0.85];
  const DATA_PP_RECOVERY: number[] = [1.2, 1.2, 1.2, 1.2, 1.3];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const pp_usage: number = DATA_PP_USAGE[level_index];
    const pp_recovery: number = DATA_PP_RECOVERY[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
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
  return potential(
    "Imbued Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const VIRTUOSO_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.22, 1.26, 1.27];
  const DATA_EFFECT_MAX: number[] = [1.15, 1.15, 1.15, 1.15, 1.2];
  const DATA_EFFECT_MULTIPLIER: number[] = [
    0.01, 0.01, 0.01, 0.01, 0.02,
  ];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const effect_multiplier: number =
      DATA_EFFECT_MULTIPLIER[level_index];
    const effect_max: number = DATA_EFFECT_MAX[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
      [StatEnum.WEAPON_MELEE]: weapon_up,
      [StatEnum.WEAPON_RANGED]: weapon_up,
      [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
    });

    if (ctx.character === undefined) {
      return stat;
    }

    if (ctx.character.uniqueAugments !== undefined) {
      const unique_augments: number = ctx.character.uniqueAugments;
      let effect_value: number = unique_augments * effect_multiplier;
      if (effect_value > effect_max) {
        effect_value = effect_max;
      }
      stat.setStat(StatEnum.ADV_DEF_HEALING, effect_value);
      stat.setStat(StatEnum.ADV_PP_USAGE, 2 - effect_value);
    }
    return stat;
  };
  return potential(
    "Virtuoso Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const UNASSAILABLE_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.15, 1.18, 1.21, 1.22, 1.23];
  const DATA_WEAPON_UP_EXTRA: number[] = [
    1.2, 1.23, 1.26, 1.27, 1.33,
  ];
  const DATA_DAMAGE_RES: number[] = [1.05, 1.05, 1.05, 1.05, 1.1];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const weapon_up_extra: number = DATA_WEAPON_UP_EXTRA[level_index];
    const damage_res: number = DATA_DAMAGE_RES[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
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
  return potential(
    "Unassailable Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const ELUSIVE_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.16, 1.18, 1.21, 1.22, 1.23];
  const DATA_PP_RECOVERY: number[] = [2, 2, 2, 2, 2.5];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const pp_recovery: number = DATA_PP_RECOVERY[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
      [StatEnum.WEAPON_MELEE]: weapon_up,
      [StatEnum.WEAPON_RANGED]: weapon_up,
      [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
    });

    if (ctx.character === undefined) {
      return stat;
    }

    if (ctx.character.hasDodgedAttack) {
      stat.setStat(StatEnum.ADV_PP_NATURAL_RECOVERY, pp_recovery);
    }
    return stat;
  };
  return potential(
    "Elusive Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const TRAMPLE_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.15, 1.17, 1.2, 1.22, 1.23];
  const DATA_WEAPON_UP_EXTRA: number[] = [
    1.21, 1.23, 1.26, 1.26, 1.31,
  ];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const weapon_up_extra: number = DATA_WEAPON_UP_EXTRA[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
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
  return potential(
    "Trample Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const STACCATO_UNIT = ((): Potential => {
  const DATA_WEAPON_UP = [1.18, 1.2, 1.22, 1.23, 1.24];
  const DATA_PP_RECOVERY = [1.2, 1.2, 1.2, 1.2, 1.3];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const pp_recovery: number = DATA_PP_RECOVERY[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
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
  return potential(
    "Staccato Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const DESPERATION_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.12, 1.14, 1.17, 1.18, 1.19];
  const DATA_CRIT_CHANCE: number[] = [1.3, 1.3, 1.3, 1.3, 1.3];
  const DATA_PP_BREAKOFF: number[] = [0.5, 0.5, 0.5, 0.5, 0.7];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const crit_chance: number = DATA_CRIT_CHANCE[level_index];
    const pp_breakpoint: number = DATA_PP_BREAKOFF[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
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

    const pp: number = ctx.character.ppValue;
    const pp_current: number = ctx.character.ppValueCurrent;
    const pp_percent: number = pp_current / pp;

    if (pp_percent < pp_breakpoint) {
      stat.setStat(StatEnum.ADV_OFF_CRIT_CHANCE, crit_chance);
    }
    return stat;
  };
  return potential(
    "Desperation Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const REVOLUTIONARY_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.23, 1.24, 1.25];
  const DATA_PP_RECOVERY: number[] = [1.2, 1.2, 1.2, 1.2, 1.3];
  const getStatObject = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const pp_recovery: number = DATA_PP_RECOVERY[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
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
  return potential(
    "Revolutionary Unit",
    DATA_WEAPON_UP.length,
    getStatObject,
  );
})();

export const ILLUSORY_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.23, 1.24, 1.25];
  const DATA_RECOVERY_UP: number[] = [2, 2, 2, 2, 2.5];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const recovery_up: number = DATA_RECOVERY_UP[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
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
  return potential(
    "Illurosy Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const IMPERVIOUS_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.19, 1.21, 1.24, 1.25, 1.26];
  const DATA_DAMAGE_RES: number[] = [1.4, 1.4, 1.4, 1.4, 1.4];
  const DATA_HP_BREAKOFF: number[] = [1, 1, 1, 1, 0.9];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const damage_res: number = DATA_DAMAGE_RES[level_index];
    const hp_breakoff: number = DATA_HP_BREAKOFF[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
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

    const hp: number = ctx.character.hpValue;
    const hp_current: number = ctx.character.hpValueCurrent;
    const hp_percent: number = hp_current / hp;

    if (hp_percent >= hp_breakoff) {
      stat.setStat(StatEnum.ADV_DEF_DAMAGE_RES, damage_res);
    }
    return stat;
  };
  return potential(
    "Impervious Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const PURSUIT_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.12, 1.14, 1.17, 1.19];
  const _getterFunction = (
    _: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
      [StatEnum.WEAPON_MELEE]: weapon_up,
      [StatEnum.WEAPON_RANGED]: weapon_up,
      [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
    });
    return stat;
  };
  return potential(
    "Pursuit Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const CITADEL_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.23, 1.25];
  const DATA_DAMAGE_RES: number[] = [1.4, 1.4, 1.4, 1.4];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const damage_res: number = DATA_DAMAGE_RES[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
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
  return potential(
    "Citadel Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const GYRATING_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.23, 1.25];
  const DATA_PP_USAGE: number[] = [0.7, 0.7, 0.7, 0.7];
  const _getterFunction = (
    _: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const pp_usage: number = DATA_PP_USAGE[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
      [StatEnum.WEAPON_MELEE]: weapon_up,
      [StatEnum.WEAPON_RANGED]: weapon_up,
      [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      [StatEnum.ADV_PP_USAGE]: pp_usage,
    });
    return stat;
  };
  return potential(
    "Gyrating Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const TEMPERED_FORM = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.12, 1.14, 1.16, 1.17];
  const DATA_CRIT_CHANCE: number[] = [0.1, 0.1, 0.1, 0.1];
  const DATA_PP_USAGE: number[] = [0.9, 0.9, 0.9, 0.9];
  const DATA_PB_RECOVERY: number[] = [1.2, 1.2, 1.2, 1.2];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const crit_chance: number = DATA_CRIT_CHANCE[level_index];
    const pp_usage: number = DATA_PP_USAGE[level_index];
    const pb_recovery: number = DATA_PB_RECOVERY[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
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
  return potential(
    "Tempered Form",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const CORUSCATING_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.12, 1.14, 1.16, 1.17];
  const DATA_CRIT_CHANCE: number[] = [0.1, 0.1, 0.1, 0.1];
  const DATA_PP_RECOVERY: number[] = [1.2, 1.2, 1.2, 1.2];
  const DATA_DAMAGE_RES: number[] = [1.2, 1.2, 1.2, 1.2];
  const _getterFunction = (
    ctx: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const crit_chance: number = DATA_CRIT_CHANCE[level_index];
    const pp_usage: number = DATA_PP_RECOVERY[level_index];
    const damage_res: number = DATA_DAMAGE_RES[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
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
  return potential(
    "Coruscating Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const ABSORPTION_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.19, 1.21, 1.24, 1.25];
  const _getterFunction = (
    _: ActionContext,
    level_index: number,
  ): StatObject => {
    const weapon_up: number = DATA_WEAPON_UP[level_index];
    const stat: StatObject = statObject({
      [StatEnum.CORE_BP]: (level_index + 1) * 10,
      [StatEnum.WEAPON_MELEE]: weapon_up,
      [StatEnum.WEAPON_RANGED]: weapon_up,
      [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
    });
    return stat;
  };
  return potential(
    "Absorption Unit",
    DATA_WEAPON_UP.length,
    _getterFunction,
  );
})();

export const SOOTHING_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.23, 1.24];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  DATA_WEAPON_UP.forEach((weapon_up, level_index) => {
    const getStatObject = (_: ActionContext): StatObject => {
      const level: number = level_index + 1;
      const bp: number = level * 10;

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: bp,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Soothing Unit", getStatObject_arr);
})();

export const BLITZ_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.1, 1.12, 1.14, 1.15];
  const DATA_CRIT_CHANCE: number[] = [0.15, 0.15, 0.15, 0.15];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  DATA_WEAPON_UP.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level: number = level_index + 1;
      const bp: number = level * 10;
      const crit_chance: number = DATA_CRIT_CHANCE[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: bp,
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

  return potential("Blitz Unit", getStatObject_arr);
})();

export const INSTANT_DEATH_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.13, 1.15, 1.18, 1.19];
  const DATA_DAMAGE_RES: number[] = [1.05, 1.05, 1.05, 1.05];
  const DATA_WEAPON_UP_EXTRA: number[] = [1.19, 1.21, 1.24, 1.25];
  const DATA_DAMAGE_RES_EXTRA: number[] = [1.1, 1.1, 1.1, 1.1];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  DATA_WEAPON_UP.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level: number = level_index + 1;
      const bp: number = level * 10;
      const damage_res: number = DATA_DAMAGE_RES[level_index];
      const weapon_up_extra: number =
        DATA_WEAPON_UP_EXTRA[level_index];
      const damage_res_extra: number =
        DATA_DAMAGE_RES_EXTRA[level_index];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: bp,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
      });

      if (ctx.target === undefined) {
        return stat;
      }

      if (ctx.target.isDolls) {
        stat.setStat(StatEnum.WEAPON_MELEE, weapon_up_extra);
        stat.setStat(StatEnum.WEAPON_RANGED, weapon_up_extra);
        stat.setStat(StatEnum.WEAPON_TECHNIQUE, weapon_up_extra);
        stat.setStat(StatEnum.ADV_DEF_DAMAGE_RES, damage_res_extra);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Instant Death Unit", getStatObject_arr);
})();

export const FLAWLESS_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.22, 1.23];
  const DATA_PP_USAGE: number[] = [0.8, 0.8, 0.8, 0.8];
  const DATA_CRIT_CHANCE: number[] = [0.1, 0.1, 0.1, 0.1];

  const getStatObject_arr: ((ctx: ActionContext) => StatObject)[] =
    [];

  DATA_WEAPON_UP.forEach((weapon_up, level_index) => {
    const getStatObject = (ctx: ActionContext): StatObject => {
      const level: number = level_index + 1;
      const bp: number = level * 10;
      const pp_usage: number = DATA_PP_USAGE[level];
      const crit_chance: number = DATA_CRIT_CHANCE[level];

      const stat: StatObject = statObject({
        [StatEnum.CORE_BP]: bp,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_OFF_CRIT_CHANCE]: crit_chance,
        [StatEnum.ADV_PP_USAGE]: pp_usage,
      });

      if (ctx.character === undefined) {
        return stat;
      }

      if (ctx.character.hasTakenDamage) {
        stat.setStat(StatEnum.ADV_PP_USAGE, 1);
        stat.setStat(StatEnum.ADV_OFF_CRIT_CHANCE, 0);
      }

      return stat;
    };

    getStatObject_arr.push(getStatObject);
  });

  return potential("Flawless Unit", getStatObject_arr);
})();
