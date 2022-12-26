import { useState } from "react";
import { AssetUnits, Unit } from "../assets";

const LOOKUP_TABLE: { [key: string]: Unit } = (() => {
  const lookup: { [key: string]: Unit } = {};

  for (const augment of AssetUnits) {
    const label = augment.label;
    lookup[label] = augment;
  }

  return lookup;
})();

const saveToLocalStorage = (
  storage_key: string,
  weapon: Unit | null,
): void => {
  localStorage.setItem(storage_key, JSON.stringify(weapon));
};

const prepareState = (storage_key: string): Unit | null => {
  const loaded_string: string | null =
    localStorage.getItem(storage_key);
  if (loaded_string === null) {
    return null;
  }

  const weapon: Unit | undefined = LOOKUP_TABLE[loaded_string];
  if (weapon === undefined) {
    return null;
  }

  return weapon;
};

export const useUnit = (
  storage_key: string,
): [Unit | null, (new_value: Unit | null) => void] => {
  const key: string = `${storage_key}-unit`;

  const [value, _setValue] = useState(() => prepareState(key));

  const setValue = (new_value: Unit | null) => {
    _setValue(() => {
      saveToLocalStorage(key, new_value);
      return new_value;
    });
  };

  return [value, setValue];
};
