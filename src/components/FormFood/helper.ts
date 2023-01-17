import { Food } from "../../assets";

const isValidJSON = (data_string: string): boolean => {
  try {
    JSON.parse(data_string);
    return true;
  } catch (e) {
    return false;
  }
};

// ---------------------------------------------
// Setter
export const saveFoods = (
  storage_key: string,
  foods: Food[],
): void => {
  const data_string: string = Food.toString(foods);
  localStorage.setItem(storage_key, data_string);
};
// ---------------------------------------------
// Getter
export const loadFoods = (storage_key: string): Food[] => {
  const loaded_string: string | null =
    localStorage.getItem(storage_key);
  if (loaded_string === null) {
    return [];
  }
  if (!isValidJSON(loaded_string)) {
    return [];
  }
  const labels: string[] | unknown = JSON.parse(loaded_string);
  if (!Array.isArray(labels)) {
    return [];
  }
  return Food.fromLabels(labels);
};
