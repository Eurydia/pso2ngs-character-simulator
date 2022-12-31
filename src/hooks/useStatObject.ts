import { useState } from "react";
import { StatEnum, statObject, StatObject } from "../assets";
import { isValidJSON } from "./utility";

const saveData = (key: string, stat: StatObject): void => {
  localStorage.setItem(key, stat.toString());
};

const retrieveData = (key: string): StatObject => {
  const fallback = statObject();

  const loaded_string: string | null = localStorage.getItem(key);
  if (loaded_string === null) {
    return fallback;
  }

  if (!isValidJSON(loaded_string)) {
    return fallback;
  }

  const obj: Partial<{ [K in StatEnum]: number }> =
    JSON.parse(loaded_string);

  return statObject(obj);
};

export const useStatObject = (
  key: string | null = null,
): [StatObject, (stat: StatObject) => void] => {
  const [value, _setValue] = useState<StatObject>(() => {
    if (key === null) {
      return statObject();
    }

    return retrieveData(key);
  });

  const setValue = (stat: StatObject) => {
    _setValue(stat);

    if (key === null) {
      return;
    }

    saveData(key, stat);
  };

  return [value, setValue];
};
