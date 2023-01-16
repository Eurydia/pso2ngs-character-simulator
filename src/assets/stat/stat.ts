import { StatEnum, StatAdd, StatSpecial } from "./statEnum";
import {
  formatStatAdd,
  formatStatPercent,
  formatStatPercentSpecial,
} from "./helper";

export type StatObject = Partial<{ [K in StatEnum]: number }>;

export const StatObject = {
  getKeys: (stat: StatObject): StatEnum[] => {
    return Object.keys(stat) as StatEnum[];
  },

  format: (data: StatObject, key: StatEnum): string | null => {
    const keys: StatEnum[] = StatObject.getKeys(data);
    if (!keys.includes(key)) {
      return null;
    }
    const value: number | undefined = data[key];
    if (value === undefined) {
      return null;
    }
    if (StatAdd.has(key)) {
      return formatStatAdd(value);
    }
    if (StatSpecial.has(key)) {
      return formatStatPercentSpecial(value);
    }
    return formatStatPercent(value);
  },

  toString: (stat: StatObject): string => {
    return JSON.stringify(stat);
  },

  getStat: (stat: StatObject, key: StatEnum): number => {
    const keys = StatObject.getKeys(stat);
    if (keys.includes(key)) {
      return stat[key]!;
    }
    if (StatAdd.has(key) || StatSpecial.has(key)) {
      return 0;
    }
    return 1;
  },

  setStat: (
    stat: StatObject,
    key: StatEnum,
    value: number | undefined,
  ): StatObject => {
    const next_data: StatObject = { ...stat };
    next_data[key] = value;
    return statObject(next_data);
  },

  merge: (stat_a: StatObject, stat_b: StatObject): StatObject => {
    let result = statObject({ ...stat_a });
    const keys = StatObject.getKeys(stat_b);
    for (const key of keys) {
      result = StatObject.stack(result, key, stat_b[key]!);
    }
    return statObject(result);
  },

  stack: (
    stat: StatObject,
    key: StatEnum,
    value: number,
  ): StatObject => {
    let next: StatObject = statObject({ ...stat });

    const keys = StatObject.getKeys(stat);
    if (!keys.includes(key)) {
      return StatObject.setStat(next, key, value);
    }

    const prev_value = StatObject.getStat(stat, key);
    if (StatAdd.has(key) || StatSpecial.has(key)) {
      return StatObject.setStat(next, key, prev_value + value);
    }

    return StatObject.setStat(next, key, prev_value * value);
  },
};

export const statObject = (data: StatObject = {}): StatObject => {
  return data;
};
