import { toSafeInteger as ld_toSafeInteger } from "lodash";
import { useState } from "react";

const saveToLocalStorage = (
  storage_key: string,
  level: number,
): void => {
  localStorage.setItem(storage_key, JSON.stringify(level));
};

const prepareState = (storage_key: string): number => {
  return ld_toSafeInteger(localStorage.getItem(storage_key));
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
