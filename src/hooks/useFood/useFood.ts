import { useState } from "react";
import { Food } from "../../assets";

export const useFood = (): [
  Food[],
  (item: Food | null, index: number) => void,
] => {
  const [value, _setValue] = useState<Food[]>([]);

  const setValue = (next_value: Food | null, index: number) => {
    if (index < 0 || value.length <= index) {
      return;
    }

    _setValue((prev) => {
      const next = [...prev];

      if (next_value === null) {
        next.splice(index, 1);
        return next;
      }

      next[index] = next_value!;
      return next;
    });
  };

  return [value, setValue];
};
