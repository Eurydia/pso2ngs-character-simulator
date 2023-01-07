import { useEffect, useState } from "react";
import { statObject, StatObject } from "../assets";
import { isValidJSON } from "./utility";

const saveData = (key: string, stat: StatObject): void => {
  localStorage.setItem(key, StatObject.toString(stat));
};

const retrieveData = (key: string): StatObject => {
  const loaded_string: string | null = localStorage.getItem(key);
  if (loaded_string === null) {
    return statObject();
  }
  if (!isValidJSON(loaded_string)) {
    return statObject();
  }
  const obj: StatObject = JSON.parse(loaded_string);
  return statObject(obj);
};

export const useStatObject = (
  key_stat_object: string | null = null,
): [
  StatObject,
  (stat: StatObject | ((prev: StatObject) => StatObject)) => void,
] => {
  const [value, setValue] = useState<StatObject>(() => {
    if (key_stat_object === null) {
      return statObject();
    }
    return retrieveData(key_stat_object);
  });

  useEffect(() => {
    if (key_stat_object === null) {
      return;
    }
    saveData(key_stat_object, value);
  }, [value]);
  return [value, setValue];
};
