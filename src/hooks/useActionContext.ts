import { useEffect, useState } from "react";
import { ActionContext } from "../assets";
import { isValidJSON } from "./utility";

const retrieveData = (storage_key: string): ActionContext => {
  const result: ActionContext = {
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
    },
    location: {
      kvaris: false,
      geometricLabyrinth: false,
    },
  };

  const loaded_data: string | null =
    localStorage.getItem(storage_key);
  if (loaded_data === null) {
    return result;
  }
  if (!isValidJSON(loaded_data)) {
    return result;
  }
  const data: Object | unknown = JSON.parse(loaded_data);
  if (typeof data !== "object") {
    return result;
  }
  return { ...result, ...data };
};

export const useActionContext = (
  storage_key: string,
): [
  ActionContext,
  (
    data: ActionContext | ((prev: ActionContext) => ActionContext),
  ) => void,
] => {
  const [value, setValue] = useState<ActionContext>(() => {
    return retrieveData(storage_key);
  });

  useEffect(() => {
    const string_data: string = JSON.stringify(value);
    localStorage.setItem(storage_key, string_data);
  }, [value]);

  return [value, setValue];
};
