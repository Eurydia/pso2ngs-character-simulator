import { StatEnum, StatAdd, StatSpecial } from "./statEnum";
import {
  formatStatAdd,
  formatStatPercent,
  formatStatPercentSpecial,
} from "./helper";

// export class StatObject {
//   #data: StatObjectPartial;

//   constructor(data: StatObjectPartial) {
//     this.#data = data;
//   }

//   mergeStat(obj: StatObject): StatObject {
//     let result = new StatObject({});

//     const keys = obj.keys;
//     for (const key of keys) {
//       const value: number = obj.getStat(key);
//       result = this.stackStat(key, value);
//     }

//     return result;
//   }

// }

export type StatObject = Partial<{ [K in StatEnum]: number }>;

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

  if (StatAdd.has(key) || StatSpecial.has(key)) {
    if (next_data[key] === undefined) {
      next_data[key] = value;
      return next_data;
    }

    next_data[key]! += value;
    return next_data;
  }

  if (next_data[key] === undefined) {
    next_data[key] = value;
    return next_data;
  }

  next_data[key]! *= value;
  return next_data;
};

export const mergeStat = (
  primary: StatObject,
  secondary: StatObject,
): StatObject => {
  let result = { ...primary };

  const keys = getKeys(secondary);
  for (const key of keys) {
    result = stackStat(result, key, secondary[key]!);
  }

  return result;
};

export const setStat = (
  data: StatObject,
  key: StatEnum,
  value: number,
): StatObject => {
  const next_data: StatObject = { ...data };

  next_data[key] = value;

  return next_data;
};

export const formatStat = (
  data: StatObject,
  key: StatEnum,
  value: number,
): string | null => {
  const keys: StatEnum[] = getKeys(data);

  if (!keys.includes(key)) {
    return null;
  }

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

export const statObject = (data: StatObject = {}): StatObject => {
  return data;
};
