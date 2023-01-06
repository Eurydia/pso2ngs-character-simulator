import { useState } from "react";
import { isValidJSON } from "./utility";

const saveLevel = (storage_key: string, level: number): void => {
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
  const parsed_string: number = Number.parseInt(loaded_string);
  if (Number.isNaN(parsed_string)) {
    return 0;
  }
  return parsed_string;
};

export const useEnhancement = (
  storage_key: string,
): [number, (new_value: number) => void] => {
  const [value, _setValue] = useState(() => {
    return retrieveData(storage_key);
  });

  const setValue = (new_value: number) => {
    _setValue(() => {
      saveLevel(storage_key, new_value);
      return new_value;
    });
  };

  return [value, setValue];
};
