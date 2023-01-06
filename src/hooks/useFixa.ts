import { useState } from "react";

import { Fixa } from "../assets";

import { isValidJSON } from "./utility";

const saveFixa = (storage_key: string, fixa: Fixa | null): void => {
  const string_data: string | null = Fixa.toString(fixa);
  localStorage.setItem(storage_key, JSON.stringify(string_data));
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
  return Fixa.fromLabel(label);
};

export const useFixa = (
  key_fixa: string,
): [Fixa | null, (new_value: Fixa | null) => void] => {
  const [value, _setValue] = useState(() => retrieveFixa(key_fixa));

  const setValue = (new_value: Fixa | null) => {
    _setValue(() => {
      saveFixa(key_fixa, new_value);
      return new_value;
    });
  };

  return [value, setValue];
};
