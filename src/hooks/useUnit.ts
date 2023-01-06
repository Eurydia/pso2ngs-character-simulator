import { useState } from "react";

import { Unit } from "../assets";

import { isValidJSON } from "./utility";

const saveData = (storage_key: string, unit: Unit | null): void => {
  const data_string: string | null = Unit.toString(unit);
  localStorage.setItem(storage_key, JSON.stringify(data_string));
};

const retrieveData = (storage_key: string): Unit | null => {
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
  const key: string = `${storage_key}-unit`;
  const [value, _setter] = useState<Unit | null>(() => {
    return retrieveData(key);
  });

  const setValue = (new_value: Unit | null) => {
    _setter(() => {
      saveData(key, new_value);
      return new_value;
    });
  };

  return [value, setValue];
};
