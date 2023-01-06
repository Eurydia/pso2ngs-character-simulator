import { useState } from "react";

import { Augment } from "../assets";
import { isValidJSON } from "./utility";

const saveData = (
  storage_key: string,
  augments: (Augment | null)[],
): void => {
  const string_data: string = Augment.toString(augments);
  localStorage.setItem(storage_key, string_data);
};

const retrieveData = (
  storage_key: string,
  size: number,
): (Augment | null)[] => {
  let result: (Augment | null)[] = Array(size).fill(null);

  const loaded_data: string | null =
    localStorage.getItem(storage_key);
  if (loaded_data === null) {
    return result;
  }
  if (!isValidJSON(loaded_data)) {
    return result;
  }
  const labels: string[] | unknown = JSON.parse(loaded_data);
  if (!Array.isArray(labels)) {
    return result;
  }

  result = Augment.fromLabels(labels.slice(0, size));

  while (result.length < size) {
    result.push(null);
  }

  for (let index = 0; index < size; index++) {
    result = Augment.removeConflict(index, result);
  }

  return result;
};

export const useAugments = (
  storage_key: string,
): [
  (Augment | null)[],
  (value: Augment | null, index: number) => void,
] => {
  const key: string = `${storage_key}-augments`;
  const [value, _setValue] = useState(() => {
    return retrieveData(key, Augment.getAugmentSlot(9999));
  });

  const setValue = (
    new_value: Augment | null,
    augment_index: number,
  ) => {
    if (augment_index < 0 || value.length <= augment_index) {
      return;
    }
    _setValue((prev) => {
      let next = [...prev];
      next[augment_index] = new_value;
      next = Augment.removeConflict(augment_index, next);
      saveData(key, next);
      return next;
    });
  };

  return [value, setValue];
};
