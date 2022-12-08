import { useState } from "react";

import { Augment } from "../assets";

export const useAugment = (
  init_state: (Augment | null)[] | undefined,
) => {
  let init: (Augment | null)[] | undefined = init_state;
  if (init === undefined) {
    init = [null, null, null, null, null];
  }

  const [value, setValueInner] = useState<(Augment | null)[]>(init);

  const setValue = (new_value: Augment | null, index: number) => {
    setValueInner((prev) => {
      const next = [...prev];
      next[index] = new_value;
      return next;
    });
  };

  return [value, setValue];
};
