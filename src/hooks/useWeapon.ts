import { useState, useEffect, useCallback } from "react";

import { Weapon } from "../assets";

import { isValidJSON } from "./utility";

const SUFFIX_KEY_WEAPON: string = "weapon";
const SUFFIX_KEY_POTENTIAL_LEVEL: string = "potential-level";

// ---------------------------------------------
// Setter
const saveWeapon = (
  storage_key: string,
  weapon: Weapon | null,
): void => {
  const KEY: string = `${storage_key}-${SUFFIX_KEY_WEAPON}`;
  const data_string: string = Weapon.toString(weapon);
  localStorage.setItem(KEY, data_string);
};
const savePotentialLevel = (
  storage_key: string,
  potential_level: number,
): void => {
  const KEY: string = `${storage_key}-${SUFFIX_KEY_POTENTIAL_LEVEL}`;
  const data_string: string = potential_level.toString();
  localStorage.setItem(KEY, data_string);
};
// ---------------------------------------------
// Getter
const loadWeapon = (storage_key: string): Weapon | null => {
  const KEY: string = `${storage_key}-${SUFFIX_KEY_WEAPON}`;
  const loaded_string: string | null = localStorage.getItem(KEY);
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
export const loadPotentialLevel = (storage_key: string): number => {
  const KEY: string = `${storage_key}-${SUFFIX_KEY_POTENTIAL_LEVEL}`;
  const loaded_string: string | null = localStorage.getItem(KEY);
  if (loaded_string === null) {
    return 0;
  }
  if (!isValidJSON(loaded_string)) {
    return 0;
  }
  const parsed_string: number = Number.parseInt(loaded_string);
  if (Number.isNaN(parsed_string)) {
    return 0;
  }
  return parsed_string;
};

export const useWeapon = (
  storage_key: string,
): {
  weapon: Weapon | null;
  potentialLevel: number;
  setWeapon: (next_weapon: Weapon | null) => void;
  setPotentialLevel: (next_level: number) => void;
} => {
  const [weapon, _setWeapon] = useState<Weapon | null>(() => {
    return loadWeapon(storage_key);
  });
  const [potentialLevel, _setPotentialLevel] = useState<number>(
    () => {
      return loadPotentialLevel(storage_key);
    },
  );

  const setWeapon = useCallback((next_weapon: Weapon | null) => {
    _setWeapon(next_weapon);
    setPotentialLevel(0);
  }, []);

  const setPotentialLevel = useCallback((next_level: number) => {
    _setPotentialLevel(next_level);
  }, []);

  useEffect(() => {
    saveWeapon(storage_key, weapon);
  }, [weapon]);

  useEffect(() => {
    savePotentialLevel(storage_key, potentialLevel);
  }, [potentialLevel]);

  return { weapon, potentialLevel, setWeapon, setPotentialLevel };
};
