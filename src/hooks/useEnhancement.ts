import { useCallback, useEffect, useState } from "react";

import { isValidJSON } from "./utility";

const SUFFIX_KEY_ENHANCEMENT: string = "enhancement";

// ---------------------------------------------
// Setter
const saveLevel = (storage_key: string, level: number): void => {
  const KEY: string = `${storage_key}-${SUFFIX_KEY_ENHANCEMENT}`;
  const data_string: string = JSON.stringify(level);
  localStorage.setItem(KEY, data_string);
};
// ---------------------------------------------
// Getter
const loadLevel = (storage_key: string): number => {
  const KEY: string = `${storage_key}-${SUFFIX_KEY_ENHANCEMENT}`;
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
// ---------------------------------------------
// Hook
export const useEnhancement = (
  storage_key: string,
): {
  enhacement: number;
  setEnhancement: (next_enhancement: number) => void;
} => {
  const [value, setValue] = useState<number>(() => {
    return loadLevel(storage_key);
  });

  const setEnhancement = useCallback((next_enhancement: number) => {
    setValue(next_enhancement);
  }, []);

  useEffect(() => {
    saveLevel(storage_key, value);
  }, [value]);

  return { enhacement: value, setEnhancement };
};
