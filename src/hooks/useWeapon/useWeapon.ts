import { useState } from "react";
import { Weapon } from "../../assets";
import {
  retrievePotentialLevel,
  retrieveWeapon,
  savePotentialLevel,
  saveWeapon,
} from "./helper";

export const useWeapon = (
  storage_key: string,
): [
  Weapon | null,
  number,
  (new_value: Weapon | null) => void,
  (new_level: number) => void,
] => {
  const storage_key_weapon = `${storage_key}-weapon`;
  const storage_key_potential_level = `${storage_key}-potential-level`;

  const [weapon, _setWeapon] = useState(() => {
    return retrieveWeapon(storage_key_weapon);
  });
  const [potentialLevel, _setPotentialLevel] = useState(() => {
    if (weapon === null) {
      return 0;
    }
    const level_max: number = weapon.potential.level_max;
    const level: number = retrievePotentialLevel(
      storage_key_potential_level,
    );

    if (level > level_max) {
      return level_max;
    }

    return level;
  });

  const setWeapon = (new_value: Weapon | null) => {
    _setWeapon(new_value);
    saveWeapon(storage_key_weapon, new_value);
    setPotentialLevel(0);
  };

  const setPotentialLevel = (new_level: number) => {
    _setPotentialLevel(new_level);
    savePotentialLevel(storage_key_potential_level, new_level);
  };

  return [weapon, potentialLevel, setWeapon, setPotentialLevel];
};
