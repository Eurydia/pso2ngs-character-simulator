import { toSafeInteger as ld_toSafeInteger } from "lodash";

import {
  Augment,
  AssetAugments,
  GroupEnumAugment,
} from "../../assets";

import { isValidJSON } from "../utility";

const LOOKUP_TABLE: { [key: string]: Augment } = {};
for (const augment of AssetAugments) {
  const label = augment.label;
  LOOKUP_TABLE[label] = augment;
}

export const saveLocalStorage = (
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

export const loadLocalStorage = (
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
  if (!Array.isArray(labels)) {
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

export const removeConflict = (
  target_index: number,
  augments: (Augment | null)[],
): (Augment | null)[] => {
  const result: (Augment | null)[] = [...augments];

  const next_augment: Augment | null = augments[target_index];

  if (next_augment === null) {
    return augments;
  }

  for (let index = 0; index < augments.length - 1; index++) {
    if (index === target_index) {
      continue;
    }

    const prev_augment: Augment | null = result[index];
    if (prev_augment === null) {
      continue;
    }

    if (next_augment.name === prev_augment.name) {
      result[index] = null;
      continue;
    }

    if (
      next_augment.name === "Mastery" &&
      prev_augment.group === GroupEnumAugment.FUSED
    ) {
      continue;
    }

    if (
      prev_augment.name === "Mastery" &&
      next_augment.group === GroupEnumAugment.FUSED
    ) {
      continue;
    }

    if (next_augment.isConflictingWith(prev_augment.group)) {
      result[index] = null;
      continue;
    }
  }

  return result;
};
