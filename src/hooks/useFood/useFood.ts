import { useState } from "react";

import { Food } from "../../assets";

import { retrieveFoods, saveFoods } from "./helper";

const FOOD_ITEM_MAX = 10;

export const useFood = (
  storage_key: string,
): [
  Food[],
  (index: number, item: Food) => void,
  (index: number) => void,
] => {
  const [value, _setValue] = useState<Food[]>(() => {
    return retrieveFoods(storage_key);
  });

  const addItem = (index: number, next_value: Food) => {
    if (index < 0 || FOOD_ITEM_MAX <= index) {
      return;
    }

    _setValue((prev) => {
      const next = [...prev];

      if (next.length >= FOOD_ITEM_MAX) {
        next.pop();
      }

      next.splice(index, 0, next_value);

      saveFoods(storage_key, next);

      return next;
    });
  };

  const removeItem = (index: number): void => {
    if (index < 0 || FOOD_ITEM_MAX <= index) {
      return;
    }

    _setValue((prev) => {
      const next = [...prev];

      next.splice(index, 1);

      saveFoods(storage_key, next);

      return next;
    });
  };

  return [value, addItem, removeItem];
};
