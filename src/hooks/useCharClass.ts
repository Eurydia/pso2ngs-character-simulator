import { useCallback, useEffect, useState } from "react";
import { CharacterClass } from "../assets";
import { isValidJSON } from "./utility";

// ---------------------------------------------
// Setter
const saveData = (storage_key: string, data: string): void => {
  const data_string: string = JSON.stringify(data);
  localStorage.setItem(storage_key, data_string);
};
// ---------------------------------------------
// Getter
const loadData = (storage_key: string, fallback: string): string => {
  const loaded_string: string | null =
    localStorage.getItem(storage_key);
  if (loaded_string === null) {
    return fallback;
  }
  if (!isValidJSON(loaded_string)) {
    return fallback;
  }
  const parsed_string: string | unknown = JSON.parse(loaded_string);
  if (typeof parsed_string !== "string") {
    return fallback;
  }
  if (CharacterClass.fromLabel(parsed_string) === null) {
    return fallback;
  }
  return parsed_string;
};
// ---------------------------------------------
// Hooks
export const useCharClass = (
  storage_key: string,
  default_value: CharacterClass,
): {
  charClass: string;
  setCharClass: (
    next_class: string | ((prev_class: string) => string),
  ) => void;
} => {
  const [value, setValue] = useState((): string => {
    return loadData(storage_key, default_value.label);
  });

  const setCharClass = useCallback(
    (next_class: string | ((prev_class: string) => string)): void => {
      setValue(next_class);
    },
    [],
  );

  useEffect(() => {
    saveData(storage_key, value);
  }, [value]);

  return {
    charClass: value,
    setCharClass,
  };
};
