import { useCallback, useEffect, useState } from "react";

import { Augment } from "../assets";
import { isValidJSON } from "./utility";

const SUFFIX_KEY_AUGMENT: string = "augment";

// ---------------------------------------------
// Setter
const saveAugments = (
  storage_key: string,
  augments: (Augment | null)[],
): void => {
  const KEY: string = `${storage_key}-${SUFFIX_KEY_AUGMENT}`;
  const data_string: string = Augment.toString(augments);
  localStorage.setItem(KEY, data_string);
};
// ---------------------------------------------
// Getter
const loadAugments = (
  storage_key: string,
  size: number,
): (Augment | null)[] => {
  const fallback: (Augment | null)[] = Array(size).fill(null);
  const KEY: string = `${storage_key}-${SUFFIX_KEY_AUGMENT}`;

  const loaded_string: string | null = localStorage.getItem(KEY);
  if (loaded_string === null) {
    return fallback;
  }
  if (!isValidJSON(loaded_string)) {
    return fallback;
  }
  const labels: string[] | unknown = JSON.parse(loaded_string);
  if (!Array.isArray(labels)) {
    return fallback;
  }

  let results: (Augment | null)[] = Augment.fromLabels(
    labels.slice(0, size),
  );
  while (results.length < size) {
    results.push(null);
  }
  for (let index = 0; index < size; index++) {
    results = Augment.removeConflict(results, index);
  }
  return results;
};
// ---------------------------------------------
// Hook
export const useAugments = (
  storage_key: string,
): {
  augments: (Augment | null)[];
  setAugment: (
    next_augment: Augment | null,
    augment_index: number,
  ) => void;
} => {
  const [values, setValues] = useState<(Augment | null)[]>(() => {
    return loadAugments(storage_key, Augment.getAugmentSlot(9999));
  });

  const setAugment = useCallback(
    (next_augment: Augment | null, augment_index: number) => {
      if (augment_index < 0 || augment_index >= values.length) {
        return;
      }
      setValues((prev) => {
        let next = [...prev];
        next[augment_index] = next_augment;
        next = Augment.removeConflict(next, augment_index);
        return next;
      });
    },
    [],
  );

  useEffect(() => {
    saveAugments(storage_key, values);
  }, [values]);

  return { augments: values, setAugment };
};
