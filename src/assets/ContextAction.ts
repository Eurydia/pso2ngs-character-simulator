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

  level: number;
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

export const ActionContext = {
  createContext: (): ActionContext => {
    return {
      time: {
        isDayTime: true,
        isDuringSezunEvent: false,
      },
      target: {
        isBoss: false,
        isDolls: false,
        isDowned: false,

        isWeakToLightning: false,
        isWeakToIce: false,
        isWeakToFire: false,
        isWeakToWind: false,
        isWeakToLight: false,
        isWeakToDark: false,
      },
      character: {
        uniqueAugments: 0,
        hasTakenDamage: false,
        hasActiveBarrier: false,
        hasDodgedAttack: false,
        hasCriticallyHit: false,
        isAttacking: false,
        isAttackingBlight: false,
        isAttackingWeakPoint: false,
        defenseValue: 0,
        attackValue: 0,
        hpValue: -1,
        hpValueCurrent: 0,
        ppValue: -1,
        ppValueCurrent: 0,
        level: 1,
      },
      location: {
        kvaris: false,
        geometricLabyrinth: false,
      },
    };
  },
};
