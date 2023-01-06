import { useState } from "react";

import { Unit } from "../assets";

import { isValidJSON } from "./utility";

const saveUnit = (storage_key: string, unit: Unit | null): void => {
  const data_string: string | null = Unit.toString(unit);
  localStorage.setItem(storage_key, JSON.stringify(data_string));
};

const retrieveUnit = (storage_key: string): Unit | null => {
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
  return Unit.fromLabel(label);
};

export const useUnit = (
  storage_key: string,
): [Unit | null, (new_value: Unit | null) => void] => {
  const KEY_UNIT: string = `${storage_key}-unit`;
  const [value, _setter] = useState<Unit | null>(() => {
    return retrieveUnit(KEY_UNIT);
  });

  const setValue = (new_value: Unit | null) => {
    _setter(() => {
      saveUnit(KEY_UNIT, new_value);
      return new_value;
    });
  };

  return [value, setValue];
};
