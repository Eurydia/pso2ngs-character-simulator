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

export const useAugment = (
  storage_key: string,
): [
  (Augment | null)[],
  (value: Augment | null, index: number) => void,
] => {
  const [value, _setValue] = useState(() => {
    const init: (Augment | null)[] = [null, null, null, null, null];

    const data_string: string | null =
      localStorage.getItem(storage_key);
    if (data_string === null) {
      return init;
    }

    const labels: string[] | any = JSON.parse(data_string);
    if (!Array.isArray(labels)) {
      return init;
    }

    const augments: (Augment | null)[] = [];

    for (const label of labels) {
      const augment: Augment | undefined = LOOKUP_TABLE[label];
      if (augment === undefined) {
        continue;
      }
      augments.push(augment);
    }

    while (augments.length < init.length) {
      augments.push(null);
    }

    return augments;
  });

  const setValue = (new_value: Augment | null, index: number) => {
    if (index < 0 || value.length <= index) {
      return;
    }

    _setValue((prev) => {
      const next = [...prev];
      next[index] = new_value;

      const labels: string[] = [];
      for (const augment of next) {
        if (augment === null) {
          continue;
        }
        labels.push(augment.label);
      }

      localStorage.setItem(storage_key, JSON.stringify(labels));

      return next;
    });
  };

  return [value, setValue];
};
