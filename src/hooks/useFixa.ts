import { useState, useEffect } from "react";

import { Fixa } from "../assets";

import { isValidJSON } from "./utility";

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
  storage_key: string,
): [Fixa | null, (new_value: Fixa | null) => void] => {
  const [value, setValue] = useState(() => retrieveFixa(storage_key));

  useEffect(() => {
    const string_data: string | null = Fixa.toString(value);
    localStorage.setItem(storage_key, string_data);
  }, [value]);

  const setter = (new_value: Fixa | null) => {
    setValue(new_value);
  };

  return [value, setter];
};
