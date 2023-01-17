const isValidJSON = (data_string: string): boolean => {
  try {
    JSON.parse(data_string);
    return true;
  } catch (e) {
    return false;
  }
};

const SUFFIX_MAIN_LEVEL: string = "main-level";
const SUFFIX_SUB_LEVELS: string = "sub-levels";
const SUFFIX_SUB_ACTIVES: string = "sub-actives";

// ------------------------------
// STORAGE SETTERS
export const saveMainLevel = (
  storage_key: string,
  level: number,
): void => {
  const KEY: string = `${storage_key}-${SUFFIX_MAIN_LEVEL}`;
  const data_string: string = JSON.stringify(level);
  localStorage.setItem(KEY, data_string);
};
export const saveSubLevels = (
  storage_key: string,
  levels: number[],
): void => {
  const KEY: string = `${storage_key}-${SUFFIX_SUB_LEVELS}`;
  const data_string: string = JSON.stringify(levels);
  localStorage.setItem(KEY, data_string);
};
export const saveSubActiveIndexes = (
  storage_key: string,
  skill_indexes: number[],
): void => {
  const KEY: string = `${storage_key}-${SUFFIX_SUB_ACTIVES}`;
  const data_string: string = JSON.stringify(skill_indexes);
  localStorage.setItem(KEY, data_string);
};

// ------------------------------
// STORAGE GETTERS
export const loadMainLevel = (storage_key: string): number => {
  const KEY: string = `${storage_key}-${SUFFIX_MAIN_LEVEL}`;
  const data_string: string | null = localStorage.getItem(KEY);
  if (data_string === null) {
    return 0;
  }
  if (!isValidJSON(data_string)) {
    return 0;
  }
  const parsed_string: number = Number.parseInt(data_string);
  if (Number.isNaN(parsed_string)) {
    return 0;
  }
  return parsed_string;
};
export const loadSubLevels = (
  storage_key: string,
  size: number,
): number[] => {
  const fallback: number[] = Array(size).fill(0);

  const KEY: string = `${storage_key}-${SUFFIX_SUB_LEVELS}`;
  const data_string: string | null = localStorage.getItem(KEY);
  if (data_string === null) {
    return fallback;
  }
  if (!isValidJSON(data_string)) {
    return fallback;
  }
  const parsed_string: number[] = JSON.parse(data_string);
  if (!Array.isArray(parsed_string)) {
    return fallback;
  }
  while (parsed_string.length < size) {
    parsed_string.push(0);
  }
  return parsed_string;
};
export const loadSubActiveIndexes = (
  storage_keys: string,
  size: number,
): number[] => {
  const fallback: number[] = Array(size).fill(0);
  const KEY: string = `${storage_keys}-${SUFFIX_SUB_ACTIVES}`;
  const data_string: string | null = localStorage.getItem(KEY);
  if (data_string === null) {
    return fallback;
  }
  if (!isValidJSON(data_string)) {
    return fallback;
  }
  const parsed_string: number[] = JSON.parse(data_string);
  if (!Array.isArray(parsed_string)) {
    return fallback;
  }
  while (parsed_string.length < size) {
    parsed_string.push(0);
  }
  return parsed_string;
};
