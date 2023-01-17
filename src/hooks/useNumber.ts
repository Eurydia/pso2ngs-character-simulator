import { useCallback, useEffect, useState } from "react";

import { isValidJSON } from "./utility";

// ---------------------------------------------
// Setter
const saveData = (storage_key: string, level: number): void => {
  const data_string: string = JSON.stringify(level);
  localStorage.setItem(storage_key, data_string);
};
// ---------------------------------------------
// Getter
const loadData = (storage_key: string): number => {
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
// ---------------------------------------------
// Hook
export const useNumber = (
  storage_key: string,
): {
  value: number;
  setValue: (nextx_value: number) => void;
} => {
  const [value, _setValue] = useState((): number => {
    return loadData(storage_key);
  });

  const setValue = useCallback((next_enhancement: number): void => {
    _setValue(next_enhancement);
  }, []);

  useEffect(() => {
    saveData(storage_key, value);
  }, [value]);

  return { value, setValue };
};
