import { useState } from "react";

import { Weapon } from "../assets";

import { isValidJSON } from "./utility";

const saveWeapon = (
  storage_key: string,
  weapon: Weapon | null,
): void => {
  const data_string: string | null = Weapon.toString(weapon);
  localStorage.setItem(storage_key, JSON.stringify(data_string));
};

const retrieveWeapon = (storage_key: string): Weapon | null => {
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

const savePotentialLevel = (
  storage_key: string,
  level: number,
): void => {
  localStorage.setItem(storage_key, JSON.stringify(level));
};

export const retrievePotentialLevel = (
  storage_key: string,
): number => {
  const loaded_string: string | null =
    localStorage.getItem(storage_key);
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
  key_weapon: string,
  key_potential_level: string,
): [
  Weapon | null,
  number,
  (new_value: Weapon | null) => void,
  (new_level: number) => void,
] => {
  const [weapon, _setWeapon] = useState(() => {
    return retrieveWeapon(key_weapon);
  });
  const [potentialLevel, _setPotentialLevel] = useState(() => {
    return retrievePotentialLevel(key_potential_level);
  });

  const setWeapon = (new_value: Weapon | null) => {
    _setWeapon(new_value);
    saveWeapon(key_weapon, new_value);
    setPotentialLevel(0);
  };

  const setPotentialLevel = (new_level: number) => {
    _setPotentialLevel(new_level);
    savePotentialLevel(key_potential_level, new_level);
  };

  return [weapon, potentialLevel, setWeapon, setPotentialLevel];
};
