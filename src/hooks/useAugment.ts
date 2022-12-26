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

const lookupAugments = (labels: string[]): Augment[] => {
  const augments: Augment[] = [];

  for (const label of labels) {
    const augment: Augment | undefined = LOOKUP_TABLE[label];
    if (augment === undefined) {
      continue;
    }
    augments.push(augment);
  }

  return augments;
};

const extractLabels = (augments: (Augment | null)[]): string[] => {
  const labels: string[] = [];

  for (const augment of augments) {
    if (augment === null) {
      continue;
    }
    labels.push(augment.label);
  }
  return labels;
};

export const useAugment = (
  storage_key: string,
): [
  (Augment | null)[],
  (value: Augment | null, index: number) => void,
] => {
  const [value, setValueInner] = useState<(Augment | null)[]>(() => {
    const init: (Augment | null)[] = [null, null, null, null, null];

    const data_string: string | null =
      localStorage.getItem(storage_key);
    if (data_string === null) {
      return init;
    }

    const data_parsed: string[] | any = JSON.parse(data_string);
    if (!Array.isArray(data_parsed)) {
      return init;
    }

    const data: (Augment | null)[] = lookupAugments(data_parsed);

    while (data.length < init.length) {
      data.push(null);
    }

    return data;
  });

  const setValue = (new_value: Augment | null, index: number) => {
    if (index < 0 || value.length <= index) {
      return;
    }

    setValueInner((prev) => {
      const next = [...prev];
      next[index] = new_value;

      localStorage.setItem(
        storage_key,
        JSON.stringify(extractLabels(next)),
      );

      return next;
    });
  };

  return [value, setValue];
};
