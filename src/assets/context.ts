type TargetContext = Partial<{
  isBoss: boolean;
  isNonBoss: boolean;

  isBlightMarked: boolean;
  isWeakSpot: boolean;

  isWeakToLightning: boolean;
  isWeakToIce: boolean;
  isWeakToFire: boolean;
  isWeakToWind: boolean;
  isWeakToLight: boolean;
  isWeakToDark: boolean;
}>;

type TimeContext = Partial<{
  isDayTime: boolean;
  isNightTime: boolean;
}>;

export type ActionContext = Partial<{
  isIdle: boolean;
  isAttacking: boolean;
  time: TimeContext;
  target: TargetContext;
}>;
