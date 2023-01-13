import { useCallback, useEffect, useState } from "react";

import { ActionContext, Food, StatObject } from "../assets";

import { isValidJSON } from "./utility";

const SUFFIX_KEY_FOOD: string = "food";

// ---------------------------------------------
// Setter
const saveFoods = (storage_key: string, foods: Food[]): void => {
  const KEY: string = `${storage_key}-${SUFFIX_KEY_FOOD}`;
  const data_string: string = Food.toString(foods);
  localStorage.setItem(KEY, data_string);
};
// ---------------------------------------------
// Getter
const loadFoods = (storage_key: string): Food[] => {
  const KEY: string = `${storage_key}-${SUFFIX_KEY_FOOD}`;
  const loaded_string: string | null = localStorage.getItem(KEY);
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
): {
  foods: Food[];
  addFood: (next_food: Food, food_index: number) => void;
  removeFood: (food_index: number) => void;
} => {
  const [values, setValues] = useState<Food[]>(() => {
    return loadFoods(storage_key);
  });

  const addFood = useCallback(
    (next_food: Food, food_index: number) => {
      if (food_index < 0 || food_index >= Food.MAX_ITEM) {
        return;
      }
      setValues((prev) => {
        const next = [...prev];
        if (next.length >= Food.MAX_ITEM) {
          next.pop();
        }
        next.splice(food_index, 0, next_food);
        return next;
      });
    },
    [],
  );
  const removeFood = useCallback((food_index: number): void => {
    if (food_index < 0 || food_index >= Food.MAX_ITEM) {
      return;
    }
    setValues((prev) => {
      const next = [...prev];
      next.splice(food_index, 1);
      return next;
    });
  }, []);

  useEffect(() => {
    saveFoods(storage_key, values);
  }, [values]);

  return { foods: values, addFood, removeFood };
};
