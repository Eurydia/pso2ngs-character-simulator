import { useState, useEffect, useCallback } from "react";

import { Fixa } from "../assets";

import { isValidJSON } from "./utility";

// ---------------------------------------------
// Setter
const saveFixa = (storage_key: string, fixa: Fixa | null): void => {
  const data_string: string = Fixa.toString(fixa);
  localStorage.setItem(storage_key, data_string);
};
// ---------------------------------------------
// Getter
const loadFixa = (storage_key: string): Fixa | null => {
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
  const [value, setValue] = useState((): Fixa | null => {
    return loadFixa(storage_key);
  });

  const setFixa = useCallback((next_fixa: Fixa | null): void => {
    setValue(next_fixa);
  }, []);

  useEffect(() => {
    saveFixa(storage_key, value);
  }, [value]);

  return { fixa: value, setFixa };
};
