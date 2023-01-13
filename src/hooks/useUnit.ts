import { useState, useEffect } from "react";

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

export const useUnit = (
  storage_key: string,
): [Unit | null, (new_value: Unit | null) => void] => {
  const [value, setValue] = useState<Unit | null>(() => {
    return loadUnit(storage_key);
  });

  useEffect(() => {
    const data_string: string | null = Unit.toString(value);
    localStorage.setItem(storage_key, JSON.stringify(data_string));
  }, [value]);

  const setter = (new_value: Unit | null) => {
    setValue(new_value);
  };

  return [value, setter];
};
