import { ActionContext } from "../ContextAction";
import { StatEnum, statObject, StatObject } from "../stat";
import { Potential, potential } from "./potential";

export const RECYCLER_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.23, 1.24, 1.25];
  return potential(
    "Recycler Unit",
    DATA_WEAPON_UP.length,
    (_: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      return statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
    },
  );
})();

export const INDOMITABLE_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.23, 1.24, 1.25];
  const DATA_AIL_RES: number[] = [1.1, 1.1, 1.1, 1.2, 1.4];
  return potential(
    "Indomitable Unit",
    DATA_WEAPON_UP.length,
    (_: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const ail_res: number = DATA_AIL_RES[level_index];
      return statObject({
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
    },
  );
})();

export const DEFENSIVE_FORMATION = ((): Potential => {
  const DATA_WEPON_UP: number[] = [1.17, 1.19, 1.22, 1.22, 1.23];
  const DATA_CRIT_CHANCE: number[] = [0.15, 0.15, 0.15, 0.18, 0.27];
  const DATA_DEFENSE_BREAKOFF: number[] = [
    1000, 1000, 1000, 1000, 1200,
  ];
  return potential(
    "Defensive Formation",
    DATA_WEPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEPON_UP[level_index];
      const defense_breakoff: number =
        DATA_DEFENSE_BREAKOFF[level_index];
      const stat: StatObject = statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
      const { defenseValue } = ctx.character;
      if (defenseValue < defense_breakoff) {
        return stat;
      }
      const crit_chance: number = DATA_CRIT_CHANCE[level_index];
      return StatObject.setStat(
        stat,
        StatEnum.ADV_OFF_CRIT_CHANCE,
        crit_chance,
      );
    },
  );
})();

export const OFFENSIVE_FORMATION = (() => {
  const DATA_WEAPON_UP: number[] = [1.17, 1.19, 1.22, 1.22, 1.23];
  const DATA_CRIT_CHANCE: number[] = [0.15, 0.15, 0.15, 0.18, 0.27];
  const DATA_ATTACK_BREAKOFF: number[] = [
    2000, 2000, 2000, 2000, 2400,
  ];
  return potential(
    "Offensive Formation",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const attack_breakoff: number =
        DATA_ATTACK_BREAKOFF[level_index];
      const stat: StatObject = statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
      const { attackValue } = ctx.character;
      if (attackValue < attack_breakoff) {
        return stat;
      }
      const crit_chance: number = DATA_CRIT_CHANCE[level_index];
      return StatObject.setStat(
        stat,
        StatEnum.ADV_OFF_CRIT_CHANCE,
        crit_chance,
      );
    },
  );
})();

export const VALOROUS_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.16, 1.18, 1.21, 1.21, 1.22];
  return potential(
    "Valorous Unit",
    DATA_WEAPON_UP.length,
    (_: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      return statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
    },
  );
})();

export const DYNAMO_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.16, 1.18, 1.21, 1.21, 1.22];
  const DATA_CRIT_CHANCE: number[] = [0.15, 0.15, 0.15, 0.18, 0.25];
  return potential(
    "Dynamo Formation",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const stat: StatObject = statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
      if (!ctx.character.hasDodgedAttack) {
        return stat;
      }
      const crit_chance: number = DATA_CRIT_CHANCE[level_index];
      return StatObject.setStat(
        stat,
        StatEnum.ADV_OFF_CRIT_CHANCE,
        crit_chance,
      );
    },
  );
})();

export const MUSTERED_MIGHT_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.15, 1.17, 1.2, 1.21, 1.22];
  const DATA_WEAPON_UP_EXTRA: number[] = [1.2, 1.22, 1.25, 1.26, 1.3];
  return potential(
    "Mustered Might Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const { hpValue, hpValueCurrent } = ctx.character;
      if (hpValueCurrent < hpValue) {
        const weapon_up: number = DATA_WEAPON_UP[level_index];
        return statObject({
          [StatEnum.WEAPON_MELEE]: weapon_up,
          [StatEnum.WEAPON_RANGED]: weapon_up,
          [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        });
      }
      const weapon_up_extra: number =
        DATA_WEAPON_UP_EXTRA[level_index];
      return statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up_extra,
        [StatEnum.WEAPON_RANGED]: weapon_up_extra,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up_extra,
      });
    },
  );
})();

export const BASTION_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.23, 1.24, 1.25];
  const DATA_DAMAGE_RES: number[] = [1.4, 1.4, 1.4, 1.5, 1.5];
  return potential(
    "Bastion Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const stat: StatObject = statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
      const { hpValue, hpValueCurrent } = ctx.character;
      const hp_percent: number = hpValueCurrent / hpValue;
      if (hp_percent < 0.8) {
        return stat;
      }
      const damage_res: number = DATA_DAMAGE_RES[level_index];
      return StatObject.setStat(
        stat,
        StatEnum.ADV_DEF_DAMAGE_RES,
        damage_res,
      );
    },
  );
})();

export const MEDITATION_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.23, 1.24, 1.25];
  const DATA_PP_RECOVERY: number[] = [1.1, 1.1, 1.1, 1.15, 1.2];
  return potential(
    "Meditation Unit",
    DATA_WEAPON_UP.length,
    (_: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const pp_recovery: number = DATA_PP_RECOVERY[level_index];
      return statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_PP_RECOVERY]: pp_recovery,
      });
    },
  );
})();

export const BERSERK_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.21, 1.23, 1.26, 1.27, 1.31];
  const DATA_DAMAGE_RES: number[] = [0.9, 0.9, 0.9, 0.92, 0.95];
  return potential(
    "Berserk Unit",
    DATA_WEAPON_UP.length,
    (_: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const damage_res: number = DATA_DAMAGE_RES[level_index];
      return statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
      });
    },
  );
})();

export const SOULSPRING_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.2, 1.22, 1.25, 1.26, 1.27];
  const DATA_PB_RECOVERY: number[] = [1.2, 1.2, 1.2, 1.2, 1.4];
  return potential(
    "Soulspring Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const stat: StatObject = statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
      if (!ctx.character.isAttacking) {
        return stat;
      }
      const pb_recovery: number = DATA_PB_RECOVERY[level_index];
      return StatObject.setStat(
        stat,
        StatEnum.ADV_OFF_PB_RECOVERY,
        pb_recovery,
      );
    },
  );
})();

export const FORTRESS_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.17, 1.19, 1.22, 1.23, 1.24];
  const DATA_DAMAGE_RES: number[] = [1.5, 1.5, 1.5, 1.5, 1.5];
  return potential(
    "Fortress Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const stat: StatObject = statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
      if (!ctx.character.hasActiveBarrier) {
        return stat;
      }
      const damage_res: number = DATA_DAMAGE_RES[level_index];
      return StatObject.setStat(
        stat,
        StatEnum.ADV_DEF_DAMAGE_RES,
        damage_res,
      );
    },
  );
})();

export const REINVIGORATING_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.17, 1.19, 1.22, 1.23, 1.24];
  return potential(
    "Reinvigorating Unit",
    DATA_WEAPON_UP.length,
    (_: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      return statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
    },
  );
})();

export const FOCUSED_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.15, 1.17, 1.2, 1.21, 1.22];
  const DATA_CRIT_CHANCE: number[] = [0.22, 0.22, 0.22, 0.22, 0.3];
  return potential(
    "Focused Unit",
    DATA_WEAPON_UP.length,
    (_: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const crit_chance: number = DATA_CRIT_CHANCE[level_index];
      return statObject({
        [StatEnum.CORE_BP]: (level_index + 1) * 10,
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_OFF_CRIT_CHANCE]: crit_chance,
      });
    },
  );
})();

export const FIGHTING_SPIRIT_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.14, 1.16, 1.19, 1.2, 1.21];
  const DATA_WEAPON_UP_EXTRA: number[] = [
    1.18, 1.2, 1.23, 1.24, 1.31,
  ];
  return potential(
    "Fighting Spirit Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      if (!ctx.target.isBoss) {
        return statObject({
          [StatEnum.WEAPON_MELEE]: weapon_up,
          [StatEnum.WEAPON_RANGED]: weapon_up,
          [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        });
      }
      const weapon_up_extra: number =
        DATA_WEAPON_UP_EXTRA[level_index];
      return statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up_extra,
        [StatEnum.WEAPON_RANGED]: weapon_up_extra,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up_extra,
      });
    },
  );
})();

export const VIGOROUS_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.21, 1.23, 1.26, 1.27, 1.28];
  const DATA_DAMAGE_RES: number[] = [1.1, 1.1, 1.1, 1.1, 1.2];
  const DATA_HEALING_UP: number[] = [1.2, 1.2, 1.2, 1.2, 1.25];
  return potential(
    "Vigorous Unit",
    DATA_WEAPON_UP.length,
    (_: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const damage_res: number = DATA_DAMAGE_RES[level_index];
      const healing_up: number = DATA_HEALING_UP[level_index];
      return statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
        [StatEnum.ADV_DEF_HEALING_UP]: healing_up,
      });
    },
  );
})();

export const EXPLOSIVE_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.15, 1.17, 1.2, 1.21, 1.22];
  return potential(
    "Explosive Unit",
    DATA_WEAPON_UP.length,
    (_: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      return statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
    },
  );
})();

export const HARMONIOUS_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.12, 1.14, 1.17, 1.18, 1.19];
  const DATA_CRIT_CHANCE: number[] = [0.15, 0.15, 0.15, 0.15, 0.15];
  const DATA_CRIT_CHANCE_EXTRA: number[] = [
    0.25, 0.25, 0.25, 0.25, 0.3,
  ];
  const DATA_HP_BREAKOFF: number[] = [0.8, 0.8, 0.8, 0.8, 0.5];
  return potential(
    "Harmonious Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const crit_chance: number = DATA_CRIT_CHANCE[level_index];
      const hp_breakpoint: number = DATA_HP_BREAKOFF[level_index];
      const stat: StatObject = statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_OFF_CRIT_CHANCE]: crit_chance,
      });
      const { hpValue, hpValueCurrent } = ctx.character;
      const hp_percent: number = hpValueCurrent / hpValue;
      if (hp_percent < hp_breakpoint) {
        return stat;
      }
      const crit_chance_extra: number =
        DATA_CRIT_CHANCE_EXTRA[level_index];
      return StatObject.setStat(
        stat,
        StatEnum.ADV_OFF_CRIT_CHANCE,
        crit_chance_extra,
      );
    },
  );
})();

export const IMBUED_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.17, 1.23, 1.26, 1.27, 1.28];
  const DATA_PP_USAGE: number[] = [0.9, 0.9, 0.9, 0.9, 0.85];
  const DATA_PP_RECOVERY: number[] = [1.2, 1.2, 1.2, 1.2, 1.3];
  return potential(
    "Imbued Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const pp_usage: number = DATA_PP_USAGE[level_index];
      const stat: StatObject = statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_PP_USAGE]: pp_usage,
      });
      if (!ctx.character.isAttacking) {
        return stat;
      }
      const pp_recovery: number = DATA_PP_RECOVERY[level_index];
      return StatObject.setStat(
        stat,
        StatEnum.ADV_PP_RECOVERY,
        pp_recovery,
      );
    },
  );
})();

export const VIRTUOSO_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.22, 1.26, 1.27];
  const DATA_AUGMENT_MAX: number[] = [15, 15, 15, 20, 10];
  const DATA_EFFECT_MULTIPLIER: number[] = [
    0.01, 0.01, 0.01, 0.01, 0.02,
  ];
  return potential(
    "Virtuoso Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const effect_multiplier: number =
        DATA_EFFECT_MULTIPLIER[level_index];
      const stat: StatObject = statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
      const { uniqueAugments } = ctx.character;
      if (uniqueAugments === 0) {
        return stat;
      }
      const augment_max: number = DATA_AUGMENT_MAX[level_index];
      let unique_augments: number = uniqueAugments;
      if (unique_augments > augment_max) {
        unique_augments = augment_max;
      }
      const effect_value: number =
        unique_augments * effect_multiplier;
      const stat_up: StatObject = statObject({
        [StatEnum.ADV_PP_USAGE]: 1 - effect_value,
        [StatEnum.ADV_DEF_HEALING_UP]: 1 + effect_value,
      });
      return StatObject.merge(stat, stat_up);
    },
  );
})();

export const UNASSAILABLE_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.15, 1.18, 1.21, 1.22, 1.23];
  const DATA_WEAPON_UP_EXTRA: number[] = [
    1.2, 1.23, 1.26, 1.27, 1.33,
  ];
  const DATA_DAMAGE_RES: number[] = [1.05, 1.05, 1.05, 1.05, 1.1];
  return potential(
    "Unassailable Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      if (!ctx.location.geometricLabyrinth) {
        return statObject({
          [StatEnum.WEAPON_MELEE]: weapon_up,
          [StatEnum.WEAPON_RANGED]: weapon_up,
          [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        });
      }
      const weapon_up_extra: number =
        DATA_WEAPON_UP_EXTRA[level_index];
      const damage_res: number = DATA_DAMAGE_RES[level_index];
      return statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up_extra,
        [StatEnum.WEAPON_RANGED]: weapon_up_extra,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up_extra,
        [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
      });
    },
  );
})();

export const ELUSIVE_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.16, 1.18, 1.21, 1.22, 1.23];
  const DATA_PP_RECOVERY: number[] = [2, 2, 2, 2, 2.5];
  return potential(
    "Elusive Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const stat: StatObject = statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
      if (!ctx.character.hasDodgedAttack) {
        return stat;
      }
      if (ctx.character.isAttacking) {
        return stat;
      }
      const pp_recovery: number = DATA_PP_RECOVERY[level_index];
      return StatObject.setStat(
        stat,
        StatEnum.ADV_PP_RECOVERY,
        pp_recovery,
      );
    },
  );
})();

export const TRAMPLE_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.15, 1.17, 1.2, 1.22, 1.23];
  const DATA_WEAPON_UP_EXTRA: number[] = [
    1.21, 1.23, 1.26, 1.26, 1.31,
  ];
  return potential(
    "Trample Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      if (ctx.target.isBoss) {
        return statObject({
          [StatEnum.WEAPON_MELEE]: weapon_up,
          [StatEnum.WEAPON_RANGED]: weapon_up,
          [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        });
      }
      const weapon_up_extra: number =
        DATA_WEAPON_UP_EXTRA[level_index];
      return statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up_extra,
        [StatEnum.WEAPON_RANGED]: weapon_up_extra,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up_extra,
      });
    },
  );
})();

export const STACCATO_UNIT = ((): Potential => {
  const DATA_WEAPON_UP = [1.18, 1.2, 1.22, 1.23, 1.24];
  const DATA_PP_RECOVERY = [1.2, 1.2, 1.2, 1.2, 1.3];
  return potential(
    "Staccato Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const stat: StatObject = statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
      if (!ctx.character.isAttacking) {
        return stat;
      }
      const pp_recovery: number = DATA_PP_RECOVERY[level_index];
      return StatObject.setStat(
        stat,
        StatEnum.ADV_PP_RECOVERY,
        pp_recovery,
      );
    },
  );
})();

export const DESPERATION_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.12, 1.14, 1.17, 1.18, 1.19];
  const DATA_CRIT_CHANCE: number[] = [1.3, 1.3, 1.3, 1.3, 1.3];
  const DATA_PP_BREAKOFF: number[] = [0.5, 0.5, 0.5, 0.5, 0.7];
  return potential(
    "Desperation Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const pp_breakpoint: number = DATA_PP_BREAKOFF[level_index];
      const stat: StatObject = statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
      const { ppValue, ppValueCurrent } = ctx.character;
      const pp_percent: number = ppValueCurrent / ppValue;
      if (pp_percent >= pp_breakpoint) {
        return stat;
      }
      const crit_chance: number = DATA_CRIT_CHANCE[level_index];
      return StatObject.setStat(
        stat,
        StatEnum.ADV_OFF_CRIT_CHANCE,
        crit_chance,
      );
    },
  );
})();

export const REVOLUTIONARY_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.23, 1.24, 1.25];
  const DATA_PP_RECOVERY: number[] = [1.2, 1.2, 1.2, 1.2, 1.3];
  return potential(
    "Revolutionary Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const stat: StatObject = statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
      if (!ctx.character.hasTakenDamage) {
        return stat;
      }
      const pp_recovery: number = DATA_PP_RECOVERY[level_index];
      return StatObject.setStat(
        stat,
        StatEnum.ADV_PP_RECOVERY,
        pp_recovery,
      );
    },
  );
})();

export const ILLUSORY_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.23, 1.24, 1.25];
  const DATA_PP_RECOVERY: number[] = [2, 2, 2, 2, 2.5];
  return potential(
    "Illurosy Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const stat: StatObject = statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
      if (!ctx.character.hasDodgedAttack) {
        return stat;
      }
      if (ctx.character.isAttacking) {
        return stat;
      }
      const pp_recovery: number = DATA_PP_RECOVERY[level_index];
      return StatObject.setStat(
        stat,
        StatEnum.ADV_PP_RECOVERY,
        pp_recovery,
      );
    },
  );
})();

export const IMPERVIOUS_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.19, 1.21, 1.24, 1.25, 1.26];
  const DATA_DAMAGE_RES: number[] = [1.4, 1.4, 1.4, 1.4, 1.4];
  const DATA_HP_BREAKOFF: number[] = [1, 1, 1, 1, 0.9];
  return potential(
    "Impervious Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const hp_breakoff: number = DATA_HP_BREAKOFF[level_index];
      const stat: StatObject = statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
      const { hpValue, hpValueCurrent } = ctx.character;
      const hp_percent: number = hpValueCurrent / hpValue;
      if (hp_percent < hp_breakoff) {
        return stat;
      }
      const damage_res: number = DATA_DAMAGE_RES[level_index];
      return StatObject.setStat(
        stat,
        StatEnum.ADV_DEF_DAMAGE_RES,
        damage_res,
      );
    },
  );
})();

export const PURSUIT_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.12, 1.14, 1.17, 1.19];
  return potential(
    "Pursuit Unit",
    DATA_WEAPON_UP.length,
    (_: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      return statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
    },
  );
})();

export const CITADEL_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.23, 1.25];
  const DATA_DAMAGE_RES: number[] = [1.4, 1.4, 1.4, 1.4];
  return potential(
    "Citadel Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const stat: StatObject = statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
      if (!ctx.character.hasActiveBarrier) {
        return stat;
      }
      const damage_res: number = DATA_DAMAGE_RES[level_index];
      return StatObject.setStat(
        stat,
        StatEnum.ADV_DEF_DAMAGE_RES,
        damage_res,
      );
    },
  );
})();

export const GYRATING_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.23, 1.25];
  const DATA_PP_USAGE: number[] = [0.7, 0.7, 0.7, 0.7];
  return potential(
    "Gyrating Unit",
    DATA_WEAPON_UP.length,
    (_: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const pp_usage: number = DATA_PP_USAGE[level_index];
      return statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_PP_USAGE]: pp_usage,
      });
    },
  );
})();

export const TEMPERED_FORM = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.12, 1.14, 1.16, 1.17];
  const DATA_CRIT_CHANCE: number[] = [0.1, 0.1, 0.1, 0.1];
  const DATA_PP_USAGE: number[] = [0.9, 0.9, 0.9, 0.9];
  const DATA_PB_RECOVERY: number[] = [1.2, 1.2, 1.2, 1.2];
  return potential(
    "Tempered Form",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const crit_chance: number = DATA_CRIT_CHANCE[level_index];
      const pp_usage: number = DATA_PP_USAGE[level_index];
      const stat: StatObject = statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_OFF_CRIT_CHANCE]: crit_chance,
        [StatEnum.ADV_PP_USAGE]: pp_usage,
      });
      if (!ctx.character.isAttacking) {
        return stat;
      }
      const pb_recovery: number = DATA_PB_RECOVERY[level_index];
      return StatObject.setStat(
        stat,
        StatEnum.ADV_OFF_PB_RECOVERY,
        pb_recovery,
      );
    },
  );
})();

export const CORUSCATING_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.12, 1.14, 1.16, 1.17];
  const DATA_CRIT_CHANCE: number[] = [0.1, 0.1, 0.1, 0.1];
  const DATA_PP_RECOVERY: number[] = [1.2, 1.2, 1.2, 1.2];
  const DATA_DAMAGE_RES: number[] = [1.2, 1.2, 1.2, 1.2];
  return potential(
    "Coruscating Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const crit_chance: number = DATA_CRIT_CHANCE[level_index];
      const stat: StatObject = statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
        [StatEnum.ADV_OFF_CRIT_CHANCE]: crit_chance,
      });
      if (!ctx.character.hasCriticallyHit) {
        return stat;
      }
      const pp_usage: number = DATA_PP_RECOVERY[level_index];
      const damage_res: number = DATA_DAMAGE_RES[level_index];
      const stat_up: StatObject = statObject({
        [StatEnum.ADV_PP_USAGE]: pp_usage,
        [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
      });
      return StatObject.merge(stat, stat_up);
    },
  );
})();

export const ABSORPTION_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.19, 1.21, 1.24, 1.25];
  return potential(
    "Absorption Unit",
    DATA_WEAPON_UP.length,
    (_: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      return statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
    },
  );
})();

export const SOOTHING_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.23, 1.24];
  return potential(
    "Soothing Unit",
    DATA_WEAPON_UP.length,
    (_: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      return statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
    },
  );
})();

export const BLITZ_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.1, 1.12, 1.14, 1.15];
  const DATA_CRIT_CHANCE: number[] = [0.15, 0.15, 0.15, 0.15];
  return potential(
    "Blitz Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const stat: StatObject = statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
      if (!ctx.character.hasDodgedAttack) {
        return stat;
      }
      const crit_chance: number = DATA_CRIT_CHANCE[level_index];
      return StatObject.setStat(
        stat,
        StatEnum.ADV_OFF_CRIT_CHANCE,
        crit_chance,
      );
    },
  );
})();

export const INSTANT_DEATH_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.13, 1.15, 1.18, 1.19];
  const DATA_DAMAGE_RES: number[] = [1.05, 1.05, 1.05, 1.05];
  const DATA_WEAPON_UP_EXTRA: number[] = [1.19, 1.21, 1.24, 1.25];
  const DATA_DAMAGE_RES_EXTRA: number[] = [1.1, 1.1, 1.1, 1.1];
  return potential(
    "Instant Death Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      if (!ctx.target.isDolls) {
        const weapon_up: number = DATA_WEAPON_UP[level_index];
        const damage_res: number = DATA_DAMAGE_RES[level_index];
        return statObject({
          [StatEnum.WEAPON_MELEE]: weapon_up,
          [StatEnum.WEAPON_RANGED]: weapon_up,
          [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
          [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res,
        });
      }
      const weapon_up_extra: number =
        DATA_WEAPON_UP_EXTRA[level_index];
      const damage_res_extra: number =
        DATA_DAMAGE_RES_EXTRA[level_index];
      return statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up_extra,
        [StatEnum.WEAPON_RANGED]: weapon_up_extra,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up_extra,
        [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res_extra,
      });
    },
  );
})();

export const FLAWLESS_UNIT = ((): Potential => {
  const DATA_WEAPON_UP: number[] = [1.18, 1.2, 1.22, 1.23];
  const DATA_PP_USAGE: number[] = [0.8, 0.8, 0.8, 0.8];
  const DATA_CRIT_CHANCE: number[] = [0.1, 0.1, 0.1, 0.1];
  return potential(
    "Flawless Unit",
    DATA_WEAPON_UP.length,
    (ctx: ActionContext, level_index: number): StatObject => {
      const weapon_up: number = DATA_WEAPON_UP[level_index];
      const stat: StatObject = statObject({
        [StatEnum.WEAPON_MELEE]: weapon_up,
        [StatEnum.WEAPON_RANGED]: weapon_up,
        [StatEnum.WEAPON_TECHNIQUE]: weapon_up,
      });
      if (ctx.character.hasTakenDamage) {
        return stat;
      }
      const pp_usage: number = DATA_PP_USAGE[level_index];
      const crit_chance: number = DATA_CRIT_CHANCE[level_index];
      const stat_up: StatObject = statObject({
        [StatEnum.ADV_PP_USAGE]: pp_usage,
        [StatEnum.ADV_OFF_CRIT_CHANCE]: crit_chance,
      });
      return StatObject.merge(stat, stat_up);
    },
  );
})();
