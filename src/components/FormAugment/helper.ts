import { Augment } from "../../assets";

export const getConflict = (
  augments: (Augment | null)[],
): Set<number> => {
  const res: Set<number> = new Set();

  for (let i = 0; i < augments.length - 1; i++) {
    const current = augments[i];

    if (current === null) {
      continue;
    }

    for (let j = i + 1; j < augments.length; j++) {
      const next = augments[j];

      if (next === null) {
        continue;
      }

      if (
        current.isConflicting(next.group) ||
        current.name === next.name
      ) {
        res.add(i);
        res.add(j);
      }
    }
  }

  return res;
};
