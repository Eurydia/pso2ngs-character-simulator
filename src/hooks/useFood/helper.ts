import { AssetFoods, Food } from "../../assets";
import { isValidJSON } from "../utility";

const LOOKUP_TABLE: { [key: string]: Food } = {};
for (const augment of AssetFoods) {
  const label = augment.label;
  LOOKUP_TABLE[label] = augment;
}

export const sortAlphabetAscending = (
  a: string,
  b: string,
): number => {
  if (a > b) {
    return 1;
  }

  if (b > a) {
    return -1;
  }

  return 0;
};

export const saveData = (
  storage_key: string,
  items: Food[],
): void => {
  const labels: string[] = [];

  for (const item of items) {
    labels.push(item.label);
  }

  localStorage.setItem(storage_key, JSON.stringify(labels));
};

export const retrieveData = (storage_key: string): Food[] => {
  const loaded_string: string | null =
    localStorage.getItem(storage_key);
  if (loaded_string === null) {
    return [];
  }

  if (isValidJSON(loaded_string)) {
    return [];
  }

  const labels: string[] | unknown = JSON.parse(loaded_string);
  if (!Array.isArray(labels)) {
    return [];
  }

  const items: Food[] = [];

  for (const label of labels) {
    const item: Food | undefined = LOOKUP_TABLE[label];

    if (item === undefined) {
      continue;
    }

    items.push(item);
  }

  return items;
};
