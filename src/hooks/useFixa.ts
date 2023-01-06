import { useState } from "react";
import { AssetFixas, Fixa } from "../assets";
import { isValidJSON } from "./utility";

const LOOKUP_TABLE: { [key: string]: Fixa } = {};
for (const fixa of AssetFixas) {
  const label = fixa.label;
  LOOKUP_TABLE[label] = fixa;
}

const saveFixa = (storage_key: string, fixa: Fixa | null): void => {
  let label: string | null = null;
  if (fixa !== null) {
    label = fixa.label;
  }

  localStorage.setItem(storage_key, JSON.stringify(label));
};

const retrieveFixa = (storage_key: string): Fixa | null => {
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

  const fixa: Fixa | undefined = LOOKUP_TABLE[label];
  if (fixa === undefined) {
    return null;
  }

  return fixa;
};

export const useFixa = (
  storage_key: string,
): [Fixa | null, (new_value: Fixa | null) => void] => {
  const key: string = `${storage_key}-fixa`;

  const [value, _setValue] = useState(() => retrieveFixa(key));

  const setValue = (new_value: Fixa | null) => {
    _setValue(() => {
      saveFixa(key, new_value);
      return new_value;
    });
  };

  return [value, setValue];
};
