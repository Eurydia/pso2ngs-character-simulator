export type SummaryEquipment = {
  equipment: string | null;
  fixa: string | null;
  augments: string[];
};

export type SummaryFood = {
  level: number;
  label: string;
};

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

export type CharacterActionContext = Partial<{
  isIdle: boolean;
  isAttacking: boolean;
  target: TargetContext;
  time: TimeContext;
}>;
