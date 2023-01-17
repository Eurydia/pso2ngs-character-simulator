import { AssetCharacterClasses, CharacterClass } from "../../assets";

const HUNTER_CLASS: string = AssetCharacterClasses.G_HUNTER.label;
const FIGHTER_CLASS: string = AssetCharacterClasses.G_FIGHTER.label;

const isValidJSON = (data: string): boolean => {
  try {
    JSON.parse(data);
    return true;
  } catch (e) {
    return false;
  }
};

// ------------------------------------

const SUFFIX_CLASS: string = "class";

export const saveCharacterClass = (
  storage_key: string,
  class_data: [string, string],
): void => {
  const KEY: string = `${storage_key}-${SUFFIX_CLASS}`;
  const data_string: string = JSON.stringify(class_data);
  localStorage.setItem(KEY, data_string);
};

export const loadCharacterClass = (
  storage_key: string,
): [string, string] => {
  const KEY: string = `${storage_key}-${SUFFIX_CLASS}`;

  const loaded_string: string | null = localStorage.getItem(KEY);
  if (loaded_string === null) {
    return [HUNTER_CLASS, FIGHTER_CLASS];
  }
  if (!isValidJSON(loaded_string)) {
    return [HUNTER_CLASS, FIGHTER_CLASS];
  }
  const parsed_string: [string, string] | unknown =
    JSON.parse(loaded_string);
  if (!Array.isArray(parsed_string)) {
    return [HUNTER_CLASS, FIGHTER_CLASS];
  }

  const label_main: string = parsed_string[0];
  const label_sub: string = parsed_string[1];
  if (CharacterClass.fromLabel(label_main) === null) {
    return [HUNTER_CLASS, FIGHTER_CLASS];
  }
  if (CharacterClass.fromLabel(label_sub) === null) {
    return [HUNTER_CLASS, FIGHTER_CLASS];
  }
  if (label_main === label_sub) {
    return [HUNTER_CLASS, FIGHTER_CLASS];
  }
  return [label_main, label_sub];
};
