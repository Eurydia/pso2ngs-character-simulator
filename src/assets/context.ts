export type TargetContext = {
  isBoss: boolean;
  isNonBoss: boolean;
  isDolls: boolean;
  isDowned: boolean;

  isWeakToLightning: boolean;
  isWeakToIce: boolean;
  isWeakToFire: boolean;
  isWeakToWind: boolean;
  isWeakToLight: boolean;
  isWeakToDark: boolean;
};

export type CharacterContext = {
  uniqueAugments: number;
  hasTakenDamage: boolean;
  hasActiveBarrier: boolean;
  hasDodgedAttack: boolean;
  hasCriticallyHit: boolean;
  isAttacking: boolean;
  isAttackingBlightMark: boolean;
  isAttackingWeakpoint: boolean;
  defenseValue: number;
  attackValue: number;
  hpValue: number;
  hpValueCurrent: number;
  ppValue: number;
  ppValueCurrent: number;
};

export type TimeContext = {
  isDayTime: boolean;
  isNightTime: boolean;
  isDuringSezunEvent: boolean;
};

export type LocationContext = {
  kvaris: boolean;
  geometricLabyrinth: boolean;
};

export type ActionContext = {
  time: TimeContext;
  target: TargetContext;
  character: CharacterContext;
  location: LocationContext;
};
