import { useState } from "react";
import { AssetFixas, Fixa } from "../assets";

const LOOKUP_TABLE: { [key: string]: Fixa } = (() => {
  const lookup: { [key: string]: Fixa } = {};

  for (const augment of AssetFixas) {
    const label = augment.label;
    lookup[label] = augment;
  }

  return lookup;
})();

const saveToLocalStorage = (
  storage_key: string,
  fixa: Fixa | null,
): void => {
  localStorage.setItem(storage_key, JSON.stringify(fixa));
};

const prepareState = (storage_key: string): Fixa | null => {
  const loaded_string: string | null =
    localStorage.getItem(storage_key);
  if (loaded_string === null) {
    return null;
  }

  const fixa: Fixa | undefined = LOOKUP_TABLE[loaded_string];
  if (fixa === undefined) {
    return null;
  }

  return fixa;
};

export const useFixa = (
  storage_key: string,
): [Fixa | null, (new_value: Fixa | null) => void] => {
  const [value, _setValue] = useState(() =>
    prepareState(storage_key),
  );

  const setValue = (new_value: Fixa | null) => {
    _setValue(() => {
      saveToLocalStorage(storage_key, new_value);
      return new_value;
    });
  };

  return [value, setValue];
};
