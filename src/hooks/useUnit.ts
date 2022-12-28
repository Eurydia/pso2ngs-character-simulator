import { useState } from "react";
import { AssetUnits, Unit } from "../assets";
import { isValidJSON } from "./utility";

const LOOKUP_TABLE: { [key: string]: Unit } = {};
for (const unit of AssetUnits) {
  const label = unit.label;
  LOOKUP_TABLE[label] = unit;
}

const saveData = (storage_key: string, unit: Unit | null): void => {
  let label: string | null = null;
  if (unit !== null) {
    label = unit.label;
  }

  localStorage.setItem(storage_key, JSON.stringify(label));
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

  const unit: Unit | undefined = LOOKUP_TABLE[label];
  if (unit === undefined) {
    return null;
  }

  return unit;
};

export const useUnit = (
  storage_key: string,
): [Unit | null, (new_value: Unit | null) => void] => {
  const key: string = `${storage_key}-unit`;

  const [value, _setValue] = useState(() => retrieveData(key));

  const setValue = (new_value: Unit | null) => {
    _setValue(() => {
      saveData(key, new_value);
      return new_value;
    });
  };

  return [value, setValue];
};
