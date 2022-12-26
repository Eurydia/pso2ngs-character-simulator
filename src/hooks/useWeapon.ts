import { useState } from "react";
import { AssetWeapons, Weapon } from "../assets";

const LOOKUP_TABLE: { [key: string]: Weapon } = (() => {
  const lookup: { [key: string]: Weapon } = {};

  for (const augment of AssetWeapons) {
    const label = augment.label;
    lookup[label] = augment;
  }

  return lookup;
})();

const saveToLocalStorage = (
  storage_key: string,
  weapon: Weapon | null,
): void => {
  let label: string | null = null;
  if (weapon !== null) {
    label = weapon.label;
  }

  localStorage.setItem(storage_key, JSON.stringify(label));
};

const prepareState = (storage_key: string): Weapon | null => {
  const loaded_string: string | null =
    localStorage.getItem(storage_key);
  if (loaded_string === null) {
    return null;
  }

  const weapon: Weapon | undefined = LOOKUP_TABLE[loaded_string];
  if (weapon === undefined) {
    return null;
  }

  return weapon;
};

export const useWeapon = (
  storage_key: string,
): [Weapon | null, (new_value: Weapon | null) => void] => {
  const key: string = `${storage_key}-weapon`;

  const [value, _setValue] = useState(() => prepareState(key));

  const setValue = (new_value: Weapon | null) => {
    _setValue(() => {
      saveToLocalStorage(key, new_value);
      return new_value;
    });
  };

  return [value, setValue];
};
