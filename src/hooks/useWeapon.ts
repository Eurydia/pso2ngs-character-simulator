import { useState, useEffect, useCallback } from "react";

import { Weapon } from "../assets";
import { useNumber } from "./useNumber";

import { isValidJSON } from "./utility";

// ---------------------------------------------
// Setter
const saveWeapon = (
  storage_key: string,
  weapon: Weapon | null,
): void => {
  const data_string: string = Weapon.toString(weapon);
  localStorage.setItem(storage_key, data_string);
};
// ---------------------------------------------
// Getter
const loadWeapon = (storage_key: string): Weapon | null => {
  const loaded_string: string | null =
    localStorage.getItem(storage_key);
  if (loaded_string === null) {
    return null;
  }
  if (!isValidJSON(loaded_string)) {
    return null;
  }
  const label: string | null = JSON.parse(loaded_string);
  if (label === null) {
    return null;
  }
  return Weapon.fromLabel(label);
};
// ---------------------------------------------
// Hook
export const useWeapon = (
  storage_key: string,
): {
  weapon: Weapon | null;
  potentialLevel: number;
  setWeapon: (next_weapon: Weapon | null) => void;
  setPotentialLevel: (next_level: number) => void;
} => {
  const [weapon, _setWeapon] = useState((): Weapon | null => {
    return loadWeapon(storage_key);
  });
  const { value: potentialLevel, setValue: setPotentialLevel } =
    useNumber(`${storage_key}-potential-level`);

  const setWeapon = useCallback(
    (next_weapon: Weapon | null): void => {
      _setWeapon(next_weapon);
      setPotentialLevel(0);
    },
    [],
  );

  useEffect(() => {
    saveWeapon(storage_key, weapon);
  }, [weapon]);

  return { weapon, potentialLevel, setWeapon, setPotentialLevel };
};
