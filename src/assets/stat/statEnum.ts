export const enum StatEnum {
  CORE_BP = "coreBP",
  CORE_HP = "coreHP",
  CORE_PP = "corePP",
  CORE_ATTACK = "coreAttack",
  CORE_DEFENSE = "coreDefense",

  WEAPON_MELEE = "weaponMelee",
  WEAPON_RANGED = "weaponRanged",
  WEAPON_TECHNIQUE = "weaponTechnique",
  WEAPON_WEAKPOINT = "weaponWeakPoint",

  AIL_BURN = "ailBurn",
  AIL_FREEZE = "ailFreeze",
  AIL_PANIC = "ailPanic",
  AIL_BLIND = "ailBlind",
  AIL_POISON = "ailPoison",
  AIL_SHOCK = "ailShock",
  AIL_DOWN = "ailDown",

  HARSH_COLD = "envCold",

  ADV_PP_USAGE = "ppUsage",
  ADV_PP_ACTIVE_RECOVERY = "ppActiveRecovery",
  ADV_PP_NATURAL_RECOVERY = "ppNaturalRecovery",

  ADV_OFF_FLOOR = "offFloor",
  ADV_OFF_DAMAGE_UP = "offDamageUp",
  ADV_OFF_CRIT_CHANCE = "offCritChance",
  ADV_OFF_CRIT_DAMAGE = "offCritDamage",
  ADV_OFF_PB_RECOVERY = "offPBRecovery",

  ADV_DEF_HEALING = "defHealingUp",
  ADV_DEF_DAMAGE_RES = "defDamageResist",
  ADV_DEF_AILMENT_DURATION = "defAilmentDuration",
}

export const StatEnumString: { [K in StatEnum]: string } = {
  [StatEnum.CORE_BP]: "BP",
  [StatEnum.CORE_HP]: "HP",
  [StatEnum.CORE_PP]: "PP",
  [StatEnum.CORE_ATTACK]: "Attack",
  [StatEnum.CORE_DEFENSE]: "Defense",
  [StatEnum.WEAPON_MELEE]: "MEL Potency",
  [StatEnum.WEAPON_RANGED]: "RNG Potency",
  [StatEnum.WEAPON_TECHNIQUE]: "TEC Potency",
  [StatEnum.WEAPON_WEAKPOINT]: "Weak Point Potency",
  [StatEnum.AIL_BURN]: "Burn Resistance",
  [StatEnum.AIL_FREEZE]: "Freeze Resistance",
  [StatEnum.AIL_PANIC]: "Panic Resistance",
  [StatEnum.AIL_BLIND]: "Blind Resistance",
  [StatEnum.AIL_POISON]: "Poison Resistance",
  [StatEnum.AIL_SHOCK]: "Shock Resistance",
  [StatEnum.AIL_DOWN]: "Physical Down Resistance",
  [StatEnum.HARSH_COLD]: "Harsh Enviroment Resistance",
  [StatEnum.ADV_PP_USAGE]: "PP Usage",
  [StatEnum.ADV_PP_ACTIVE_RECOVERY]: "Active PP Recovery",
  [StatEnum.ADV_PP_NATURAL_RECOVERY]: "Natural PP Recovery",
  [StatEnum.ADV_OFF_FLOOR]: "Floor Potency",
  [StatEnum.ADV_OFF_DAMAGE_UP]: "Damage Up",
  [StatEnum.ADV_OFF_CRIT_CHANCE]: "Critical Chance",
  [StatEnum.ADV_OFF_CRIT_DAMAGE]: "Critical Damage",
  [StatEnum.ADV_OFF_PB_RECOVERY]: "PB Gauge Recovery",
  [StatEnum.ADV_DEF_HEALING]: "Healing Up",
  [StatEnum.ADV_DEF_DAMAGE_RES]: "Damage Resistance",
  [StatEnum.ADV_DEF_AILMENT_DURATION]: "Ailment Duration",
};

export const StatAdd: Set<StatEnum> = new Set([
  StatEnum.CORE_BP,
  StatEnum.CORE_HP,
  StatEnum.CORE_PP,
  StatEnum.CORE_ATTACK,
  StatEnum.CORE_DEFENSE,
]);

export const StatSpecial: Set<StatEnum> = new Set([
  StatEnum.HARSH_COLD,
  StatEnum.ADV_OFF_CRIT_CHANCE,
]);
