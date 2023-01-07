import { useEffect, useState } from "react";
import { json } from "react-router-dom";

import { Food } from "../assets";
import { isValidJSON } from "./utility";

export const saveFoods = (
  storage_key: string,
  items: Food[],
): void => {
  const data_string: string = Food.toString(items);
  localStorage.setItem(storage_key, JSON.stringify(data_string));
};

const retrieveFoods = (storage_key: string): Food[] => {
  const loaded_string: string | null =
    localStorage.getItem(storage_key);
  if (loaded_string === null) {
    return [];
  }
  if (!isValidJSON(loaded_string)) {
    return [];
  }
  const labels: string[] | unknown = JSON.parse(loaded_string);
  if (!Array.isArray(labels)) {
    return [];
  }
  return Food.fromLabels(labels);
};

export const useFood = (
  storage_key: string,
): [
  Food[],
  (index: number, item: Food) => void,
  (index: number) => void,
] => {
  const [value, setValue] = useState(() => {
    return retrieveFoods(storage_key);
  });

  useEffect(() => {
    saveFoods(storage_key, value);
  }, [value]);

  const addItem = (index: number, next_value: Food) => {
    if (index < 0 || Food.MAX_ITEM <= index) {
      return;
    }
    setValue((prev) => {
      const next = [...prev];
      if (next.length >= Food.MAX_ITEM) {
        next.pop();
      }
      next.splice(index, 0, next_value);
      return next;
    });
  };
  const removeItem = (index: number): void => {
    if (index < 0 || Food.MAX_ITEM <= index) {
      return;
    }
    setValue((prev) => {
      const next = [...prev];
      next.splice(index, 1);
      return next;
    });
  };
  return [value, addItem, removeItem];
};
