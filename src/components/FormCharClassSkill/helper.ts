const isValidJSON = (data_string: string): boolean => {
  try {
    JSON.parse(data_string);
    return true;
  } catch (e) {
    return false;
  }
};

export const saveSkillLevels = (
  storage_key: string,
  skill_levels: number[],
): void => {
  const data_string: string = JSON.stringify(skill_levels);
  localStorage.setItem(storage_key, data_string);
};

export const loadSkillLevels = (
  storage_key: string,
  size: number,
): number[] => {
  const fallback: number[] = Array(size).fill(0);

  const loaded_string: string | null =
    localStorage.getItem(storage_key);
  if (loaded_string === null) {
    return fallback;
  }
  if (!isValidJSON(loaded_string)) {
    return fallback;
  }
  const parsed_string: number[] | unknown = JSON.parse(loaded_string);
  if (!Array.isArray(parsed_string)) {
    return fallback;
  }
  while (parsed_string.length < size) {
    parsed_string.push(0);
  }
  return parsed_string;
};
