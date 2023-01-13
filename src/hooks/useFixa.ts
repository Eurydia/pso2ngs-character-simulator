import { useState, useEffect, useCallback } from "react";

import { Fixa } from "../assets";

import { isValidJSON } from "./utility";

const SUFFIX_KEY_FIXA: string = "fixa";

// ---------------------------------------------
// Setter
const saveFixa = (storage_key: string, fixa: Fixa | null): void => {
  const KEY: string = `${storage_key}-${SUFFIX_KEY_FIXA}`;
  const data_string: string = Fixa.toString(fixa);
  localStorage.setItem(KEY, data_string);
};
// ---------------------------------------------
// Getter
const loadFixa = (storage_key: string): Fixa | null => {
  const KEY: string = `${storage_key}-${SUFFIX_KEY_FIXA}`;

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
  return Fixa.fromLabel(label);
};
// ---------------------------------------------
// Hook
export const useFixa = (
  storage_key: string,
): {
  fixa: Fixa | null;
  setFixa: (next_fixa: Fixa | null) => void;
} => {
  const [value, setValue] = useState<Fixa | null>(() => {
    return loadFixa(storage_key);
  });

  const setFixa = useCallback((next_fixa: Fixa | null) => {
    setValue(next_fixa);
  }, []);

  useEffect(() => {
    saveFixa(storage_key, value);
  }, [value]);

  return { fixa: value, setFixa };
};
