import { useState } from "react";
import { isValidJSON } from "./utility";

const saveData = (storage_key: string, level: number): void => {
  localStorage.setItem(storage_key, JSON.stringify(level));
};

const retrieveData = (storage_key: string): number => {
  const loaded_string: string | null =
    localStorage.getItem(storage_key);
  if (loaded_string === null) {
    return 0;
  }

  if (!isValidJSON(loaded_string)) {
    return 0;
  }

  const value_parsed: number = Number.parseInt(loaded_string);

  if (Number.isNaN(value_parsed)) {
    return 0;
  }

  return value_parsed;
};

export const useEnhancement = (
  storage_key: string,
): [number, (new_value: number) => void] => {
  const key: string = `${storage_key}-level`;

  const [value, _setValue] = useState(() => retrieveData(key));

  const setValue = (new_value: number) => {
    _setValue(() => {
      saveData(key, new_value);
      return new_value;
    });
  };

  return [value, setValue];
};
