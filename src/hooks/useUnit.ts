import { useState, useEffect, useCallback } from "react";

import { Unit } from "../assets";

import { isValidJSON } from "./utility";

const SUFFIX_KEY_UNIT: string = "unit";

// ---------------------------------------------
// Setter
const saveUnit = (storage_key: string, unit: Unit | null): void => {
  const KEY: string = `${storage_key}-${SUFFIX_KEY_UNIT}`;
  const data_string: string = Unit.toString(unit);
  localStorage.setItem(KEY, data_string);
};
// ---------------------------------------------
// Getter
const loadUnit = (storage_key: string): Unit | null => {
  const KEY: string = `${storage_key}-${SUFFIX_KEY_UNIT}`;
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
  return Unit.fromLabel(label);
};
// ---------------------------------------------
// Hook
export const useUnit = (
  storage_key: string,
): {
  unit: Unit | null;
  setUnit: (new_value: Unit | null) => void;
} => {
  const [value, setValue] = useState<Unit | null>(() => {
    return loadUnit(storage_key);
  });

  const setUnit = useCallback((next_unit: Unit | null) => {
    setValue(next_unit);
  }, []);

  useEffect(() => {
    saveUnit(storage_key, value);
  }, [value]);

  return { unit: value, setUnit };
};
