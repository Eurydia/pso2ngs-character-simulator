import { StatEnum, StatAdd, StatSpecial } from "./statEnum";
import {
  formatStatAdd,
  formatStatPercent,
  formatStatPercentSpecial,
} from "./helper";

export type StatObject = Partial<{ [K in StatEnum]: number }>;

export const statObject = (data: StatObject = {}): StatObject => {
  return data;
};

export const getKeys = (data: StatObject): StatEnum[] => {
  return Object.keys(data) as StatEnum[];
};

export const getStat = (data: StatObject, key: StatEnum): number => {
  const keys = getKeys(data);
  if (keys.includes(key)) {
    return data[key]!;
  }

  if (StatAdd.has(key) || StatSpecial.has(key)) {
    return 0;
  }
  return 1;
};

export const stackStat = (
  data: StatObject,
  key: StatEnum,
  value: number,
): StatObject => {
  const next_data: StatObject = { ...data };

  if (next_data[key] === undefined) {
    next_data[key] = value;
    return statObject(next_data);
  }

  if (StatAdd.has(key) || StatSpecial.has(key)) {
    next_data[key]! += value;
    return statObject(next_data);
  }

  next_data[key]! *= value;
  return statObject(next_data);
};

export const mergeStat = (
  primary: StatObject,
  secondary: StatObject,
): StatObject => {
  let result = statObject({ ...primary });

  const keys = getKeys(secondary);
  for (const key of keys) {
    result = stackStat(result, key, secondary[key]!);
  }

  return statObject(result);
};

export const setStat = (
  data: StatObject,
  key: StatEnum,
  value: number,
): StatObject => {
  const next_data: StatObject = { ...data };

  next_data[key] = value;

  return statObject(next_data);
};

export const formatStat = (
  data: StatObject,
  key: StatEnum,
): string | null => {
  const keys: StatEnum[] = getKeys(data);

  if (!keys.includes(key)) {
    return null;
  }

  const value: number = data[key]!;

  if (StatAdd.has(key)) {
    return formatStatAdd(value);
  }

  if (StatSpecial.has(key)) {
    return formatStatPercentSpecial(value);
  }

  return formatStatPercent(value);
};

export const toString = (data: StatObject): string => {
  return JSON.stringify(data);
};
