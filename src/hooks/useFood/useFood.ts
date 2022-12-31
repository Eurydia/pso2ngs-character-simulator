import { useState } from "react";
import { Food } from "../../assets";
import {
  retrieveData,
  saveData,
  sortAlphabetAscending,
} from "./helper";

const FOOD_ITEM_MAX = 10;

export const useFood = (
  storage_key: string,
): [
  Food[],
  (index: number, item: Food) => void,
  (index: number) => void,
] => {
  const [value, _setValue] = useState<Food[]>(() => {
    return retrieveData(storage_key);
  });

  const addItem = (index: number, next_value: Food) => {
    _setValue((prev) => {
      const next = [...prev];

      if (next.length >= FOOD_ITEM_MAX) {
        next.pop();
      }

      next.splice(index, 0, next_value);

      next.sort((a, b) => {
        return sortAlphabetAscending(a.label, b.label);
      });

      saveData(storage_key, next);

      return next;
    });
  };

  const removeItem = (index: number): void => {
    _setValue((prev) => {
      const next = [...prev];

      if (index < 0 || FOOD_ITEM_MAX <= index) {
        return next;
      }

      next.splice(index, 1);

      next.sort((a, b) => {
        return sortAlphabetAscending(a.label, b.label);
      });

      saveData(storage_key, next);

      return next;
    });
  };

  return [value, addItem, removeItem];
};
