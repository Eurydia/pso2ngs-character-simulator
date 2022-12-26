import {
  isArray as ld_isArray,
  toSafeInteger as ld_toSafeInteger,
} from "lodash";
import { useState } from "react";
import { Augment, AssetAugments } from "../assets";
import { isValidJSON } from "./utility";

const LOOKUP_TABLE: { [key: string]: Augment } = {};
for (const augment of AssetAugments) {
  const label = augment.label;
  LOOKUP_TABLE[label] = augment;
}

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

  if (!isValidJSON(loaded_string)) {
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

export const useAugments = (
  storage_key: string,
): [
  (Augment | null)[],
  (value: Augment | null, index: number) => void,
] => {
  const key: string = `${storage_key}-augments`;

  const [value, _setValue] = useState(() => prepareState(key, 5));

  const setValue = (new_value: Augment | null, index: number) => {
    if (index < 0 || value.length <= index) {
      return;
    }

    _setValue((prev) => {
      const next = [...prev];
      next[index] = new_value;
      saveToLocalStorage(key, next);
      return next;
    });
  };

  return [value, setValue];
};
