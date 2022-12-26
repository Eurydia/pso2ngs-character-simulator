import { toSafeInteger as ld_toSafeInteger } from "lodash";
import { useState } from "react";
import { isValidJSON } from "./utility";

const saveToLocalStorage = (
  storage_key: string,
  level: number,
): void => {
  localStorage.setItem(storage_key, JSON.stringify(level));
};

const prepareState = (storage_key: string): number => {
  const loaded_string: string | null =
    localStorage.getItem(storage_key);
  if (loaded_string === null) {
    return 0;
  }

  if (!isValidJSON(loaded_string)) {
    return 0;
  }

  return ld_toSafeInteger(loaded_string);
};

export const useEnhancement = (
  storage_key: string,
): [number, (new_value: number) => void] => {
  const key: string = `${storage_key}-level`;

  const [value, _setValue] = useState(() => prepareState(key));

  const setValue = (new_value: number) => {
    _setValue(() => {
      saveToLocalStorage(key, new_value);
      return new_value;
    });
  };

  return [value, setValue];
};
