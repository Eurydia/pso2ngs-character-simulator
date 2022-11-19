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
  [StatEnum.CORE_BP]: "bp",
  [StatEnum.CORE_HP]: "hp",
  [StatEnum.CORE_PP]: "pp",
  [StatEnum.CORE_ATTACK]: "attack",
  [StatEnum.CORE_DEFENSE]: "defense",
  [StatEnum.WEAPON_MELEE]: "mel potency",
  [StatEnum.WEAPON_RANGED]: "rng potency",
  [StatEnum.WEAPON_TECHNIQUE]: "tec potency",
  [StatEnum.AIL_BURN]: "burn resistance",
  [StatEnum.AIL_FREEZE]: "freeze resistance",
  [StatEnum.AIL_PANIC]: "panic resistance",
  [StatEnum.AIL_BLIND]: "blind resistance",
  [StatEnum.AIL_POISON]: "poison resistance",
  [StatEnum.AIL_SHOCK]: "shock resistance",
  [StatEnum.AIL_PHYDOWN]: "physical down resistance",
  [StatEnum.HARSH_COLD]: "harsh enviroment resistance",
  [StatEnum.ADV_PP_USAGE]: "pp usage",
  [StatEnum.ADV_PP_ACTIVE_RECOVERY]: "active pp recovery",
  [StatEnum.ADV_PP_NATURAL_RECOVERY]: "passive pp recovery",
  [StatEnum.ADV_OFF_FLOOR]: "floor potency",
  [StatEnum.ADV_OFF_DAMAGE]: "damage up",
  [StatEnum.ADV_OFF_CRIT_CHANCE]: "critical chance",
  [StatEnum.ADV_OFF_CRIT_DAMAGE]: "critical damage",
  [StatEnum.ADV_OFF_PB_RECOVERY]: "pb gauge recovery",
  [StatEnum.ADV_DEF_HEALING]: "healing up",
  [StatEnum.ADV_DEF_DAMAGE_RES]: "damage resistance",
  [StatEnum.ADV_DEF_AILMENT_DURATION]: "ailment duration",
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

export const StatWeaponUp: Set<StatEnum> = new Set([
  StatEnum.WEAPON_MELEE,
  StatEnum.WEAPON_RANGED,
  StatEnum.WEAPON_TECHNIQUE,
]);

export const StatAilmentRes: Set<StatEnum> = new Set([
  StatEnum.AIL_BURN,
  StatEnum.AIL_FREEZE,
  StatEnum.AIL_PANIC,
  StatEnum.AIL_BLIND,
  StatEnum.AIL_POISON,
  StatEnum.AIL_SHOCK,
  StatEnum.AIL_PHYDOWN,
]);

export default StatEnum;
