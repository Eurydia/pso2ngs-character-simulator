import { useState } from "react";

import { Augment } from "../../assets";

import { retrieveData, removeConflict, saveData } from "./helper";

export const useAugments = (
  storage_key: string,
): [
  (Augment | null)[],
  (value: Augment | null, index: number) => void,
] => {
  const key: string = `${storage_key}-augments`;

  const [value, _setValue] = useState(() => retrieveData(key, 5));

  const setValue = (new_value: Augment | null, index: number) => {
    if (index < 0 || value.length <= index) {
      return;
    }

    _setValue((prev) => {
      const next = [...prev];
      next[index] = new_value;

      const checked = removeConflict(index, next);

      saveData(key, checked);
      return checked;
    });
  };

  return [value, setValue];
};
