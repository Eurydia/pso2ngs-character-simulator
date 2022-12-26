import {
  isArray as ld_isArray,
  toSafeInteger as ld_toSafeInteger,
} from "lodash";
import { useState } from "react";
import { Augment, AssetAugments } from "../assets";

const LOOKUP_TABLE: { [key: string]: Augment } = (() => {
  const lookup: { [key: string]: Augment } = {};

  for (const augment of AssetAugments) {
    const label = augment.label;
    lookup[label] = augment;
  }

  return lookup;
})();

const saveToLocalStorage = (
  storage_key: string,
  augments: (Augment | null)[],
): void => {
  const labels: string[] = [];
  for (const augment of augments) {
    if (augment === null) {
      continue;
    }

    labels.push(augment.label);
  }

  localStorage.setItem(storage_key, JSON.stringify(labels));
};

const prepareState = (
  storage_key: string,
  size: number,
): (Augment | null)[] => {
  const safe_size: number = ld_toSafeInteger(size);
  const fallback: null[] = Array(safe_size).fill(null);

  const loaded_string: string | null =
    localStorage.getItem(storage_key);
  if (loaded_string === null) {
    return fallback;
  }

  const labels: string[] | any = JSON.parse(loaded_string);
  if (!ld_isArray(labels)) {
    return fallback;
  }

  const augments: (Augment | null)[] = [];
  for (const label of labels) {
    const augment: Augment | undefined = LOOKUP_TABLE[label];
    if (augment === undefined) {
      continue;
    }
    augments.push(augment);
  }

  while (augments.length < safe_size) {
    augments.push(null);
  }

  return augments;
};

export const useAugment = (
  storage_key: string,
): [
  (Augment | null)[],
  (value: Augment | null, index: number) => void,
] => {
  const [value, _setValue] = useState(() =>
    prepareState(storage_key, 5),
  );

  const setValue = (new_value: Augment | null, index: number) => {
    if (index < 0 || value.length <= index) {
      return;
    }

    _setValue((prev) => {
      const next = [...prev];
      next[index] = new_value;
      saveToLocalStorage(storage_key, next);
      return next;
    });
  };

  return [value, setValue];
};
