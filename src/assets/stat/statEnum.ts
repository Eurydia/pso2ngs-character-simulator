const enum StatEnum {
  CORE_BP = "coreBP",
  CORE_HP = "coreHP",
  CORE_PP = "corePP",
  CORE_ATTACK = "coreAttack",
  CORE_DEFENSE = "coreDefense",

  WEAPON_MELEE = "weaponMelee",
  WEAPON_RANGED = "weaponRanged",
  WEAPON_TECHNIQUE = "weaponTechnique",

  AIL_BURN = "ailBurn",
  AIL_FREEZE = "ailFreeze",
  AIL_PANIC = "ailPanic",
  AIL_BLIND = "ailBlind",
  AIL_POISON = "ailPoison",
  AIL_SHOCK = "ailShock",
  AIL_PHYDOWN = "ailPhyDown",

  HARSH_COLD = "envCold",

  ADV_PP_USAGE = "ppUsage",
  ADV_PP_ACTIVE_RECOVERY = "ppActiveRecovery",
  ADV_PP_NATURAL_RECOVERY = "ppNaturalRecovery",

  ADV_OFF_FLOOR = "offFloor",
  ADV_OFF_DAMAGE = "offDamageUp",
  ADV_OFF_CRIT_CHANCE = "offCritChance",
  ADV_OFF_CRIT_DAMAGE = "offCritDamage",
  ADV_OFF_PB_RECOVERY = "offPBRecovery",

  ADV_DEF_HEALING = "defHealingUp",
  ADV_DEF_DAMAGE_RES = "defDamageResist",
  ADV_DEF_AILMENT_DURATION = "defAilmentDuration",
}

export const StatEnumString: { [K in StatEnum]: string } = {
  coreBP: "bp",
  coreHP: "hp",
  corePP: "pp",
  coreAttack: "attack",
  coreDefense: "defense",
  weaponMelee: "MEL potency",
  weaponRanged: "RNG potency",
  weaponTechnique: "TEC potency",
  ailBurn: "burn resistance",
  ailFreeze: "freeze resistance",
  ailPanic: "panic resistance",
  ailBlind: "blind resistance",
  ailPoison: "poison resistance",
  ailShock: "shock resistance",
  ailPhyDown: "physical down resistance",
  envCold: "harsh enviroment resistance",
  ppUsage: "pp usage",
  ppActiveRecovery: "active pp recovery",
  ppNaturalRecovery: "passive pp recovery",
  offFloor: "floor potency",
  offDamageUp: "damage up",
  offCritChance: "critical chance",
  offCritDamage: "critical damage",
  offPBRecovery: "pb gauge recovery",
  defHealingUp: "healing up",
  defDamageResist: "damage resistance",
  defAilmentDuration: "ailment duration",
};

export const StatAdd: StatEnum[] = [
  StatEnum.CORE_BP,
  StatEnum.CORE_HP,
  StatEnum.CORE_PP,
  StatEnum.CORE_ATTACK,
  StatEnum.CORE_DEFENSE,
];

export const StatSpecial: StatEnum[] = [
  StatEnum.HARSH_COLD,
  StatEnum.ADV_OFF_CRIT_CHANCE,
];

export default StatEnum;
