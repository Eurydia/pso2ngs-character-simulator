import { useState, useEffect } from "react";

import { Unit } from "../assets";

import { isValidJSON } from "./utility";

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
  const [value, setValue] = useState<Unit | null>(() => {
    return retrieveUnit(storage_key);
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
