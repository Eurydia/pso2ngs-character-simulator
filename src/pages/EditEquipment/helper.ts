import { StatEnum, statObject, StatObject } from "../../assets";

export const collectStat = (items: StatObject[]): StatObject => {
  const result: StatObject = statObject();

  for (const item of items) {
    const keys: StatEnum[] = item.keys;
    for (const key of keys) {
      const value: number = item.getStat(key);
      result.stackStat(key, value);
    }
  }

  return result;
};
