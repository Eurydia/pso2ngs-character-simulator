export type TargetContext = {
  isBoss: boolean;
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
  hasTakenDamage: boolean;
  hasActiveBarrier: boolean;
  hasDodgedAttack: boolean;
  hasCriticallyHit: boolean;
  isAttacking: boolean;
  isAttackingBlight: boolean;
  isAttackingWeakPoint: boolean;

  uniqueAugments: number;
  defenseValue: number;
  attackValue: number;
  hpValue: number;
  hpValueCurrent: number;
  ppValue: number;
  ppValueCurrent: number;
};

export type TimeContext = {
  isDayTime: boolean;
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
