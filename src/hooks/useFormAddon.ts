import { useCallback, useEffect, useState } from "react";
import { ActionContext, AddonSkill, StatObject } from "../assets";
import { isValidJSON } from "./utility";

const SUFFIX_MAIN_LEVEL: string = "main-level";
const SUFFIX_SUB_LEVELS: string = "sub-levels";
const SUFFIX_SUB_ACTIVES: string = "sub-actives";

// ------------------------------
// STORAGE SETTERS
const saveMainLevel = (storage_key: string, level: number): void => {
  const KEY: string = `${storage_key}-${SUFFIX_MAIN_LEVEL}`;
  const data_string: string = JSON.stringify(level);
  localStorage.setItem(KEY, data_string);
};
const saveSubLevels = (
  storage_key: string,
  levels: number[],
): void => {
  const KEY: string = `${storage_key}-${SUFFIX_SUB_LEVELS}`;
  const data_string: string = JSON.stringify(levels);
  localStorage.setItem(KEY, data_string);
};
const saveSubActives = (
  storage_key: string,
  skill_indexes: number[],
): void => {
  const KEY: string = `${storage_key}-${SUFFIX_SUB_ACTIVES}`;
  const data_string: string = JSON.stringify(skill_indexes);
  localStorage.setItem(KEY, data_string);
};

// ------------------------------
// STORAGE GETTERS
const loadMainLevel = (storage_key: string): number => {
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
const loadSubLevels = (
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
  return parsed_string;
};
const loadSubActives = (
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
  return parsed_string;
};

// ------------------------------
// HOOK
export const useFormAddon = (
  storage_key: string,
  main_addon: AddonSkill,
  sub_addons: AddonSkill[],
): {
  mainLevel: number;
  subActiveIndexes: number[];
  subLevels: number[];
  setMainLevel: (next_level: number) => void;
  setSubLevel: (next_level: number, skill_index: number) => void;
  setSubActiveIndex: (skill_index: number) => void;
  getStatObject: (ctx: ActionContext) => StatObject;
} => {
  const [mainLevel, _setMainLevel] = useState<number>(() => {
    return loadMainLevel(storage_key);
  });
  const [subActiveIndexes, _setSubActiveIndexes] = useState<number[]>(
    () => {
      const size: number = sub_addons.length;
      return loadSubActives(storage_key, size);
    },
  );
  const [subLevels, _setSubLevels] = useState<number[]>(() => {
    const size: number = sub_addons.length;
    return loadSubLevels(storage_key, size);
  });

  const setMainLevel = useCallback((next_level: number): void => {
    _setMainLevel(next_level);
  }, []);
  const setSubLevel = useCallback(
    (next_level: number, skill_index: number): void => {
      _setSubLevels((prev) => {
        const next = [...prev];
        next[skill_index] = next_level;
        return next;
      });
    },
    [],
  );
  const setSubActiveIndex = useCallback(
    (skill_index: number): void => {
      _setSubActiveIndexes((prev) => {
        if (prev[skill_index] > 0) {
          return prev;
        }
        let next = [...prev];
        next = next.map((value) => {
          if (value === 0) {
            return 0;
          }
          return value - 1;
        });
        next[skill_index] = 2;
        return next;
      });
    },
    [],
  );
  const getStatObject = useCallback(
    (ctx: ActionContext): StatObject => {
      let stat = AddonSkill.getStatObject(ctx, main_addon, mainLevel);
      subActiveIndexes.forEach((order_number, skill_index) => {
        if (order_number === 0) {
          return;
        }
        const sub_addon: AddonSkill = sub_addons[skill_index];
        const sub_level: number = subLevels[skill_index];
        const sub_stat: StatObject = AddonSkill.getStatObject(
          ctx,
          sub_addon,
          sub_level,
        );
        stat = StatObject.merge(stat, sub_stat);
      });
      return stat;
    },
    [mainLevel, subLevels, subActiveIndexes],
  );

  useEffect(() => {
    saveMainLevel(storage_key, mainLevel);
  }, [mainLevel]);

  useEffect(() => {
    saveSubLevels(storage_key, subLevels);
  }, [subLevels]);

  useEffect(() => {
    saveSubActives(storage_key, subActiveIndexes);
  }, [subActiveIndexes]);

  return {
    mainLevel,
    subLevels,
    subActiveIndexes,
    setMainLevel,
    setSubLevel,
    setSubActiveIndex,
    getStatObject,
  };
};
