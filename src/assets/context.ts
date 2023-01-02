type TargetContext = Partial<{
  isBoss: boolean;
  isNonBoss: boolean;
  isDolls: boolean;

  isWeakToLightning: boolean;
  isWeakToIce: boolean;
  isWeakToFire: boolean;
  isWeakToWind: boolean;
  isWeakToLight: boolean;
  isWeakToDark: boolean;
}>;

type CharacterContext = Partial<{
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
}>;

type TimeContext = Partial<{
  isDayTime: boolean;
  isNightTime: boolean;
  isDuringSezunEvent: boolean;
}>;

type LocationContext = Partial<{
  kvaris: boolean;
  geometricLabyrinth: boolean;
}>;

export type ActionContext = Partial<{
  time: TimeContext;
  target: TargetContext;
  character: CharacterContext;
  location: LocationContext;
}>;
