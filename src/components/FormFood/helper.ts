import {
  GroupEnumFoodAttribute,
  GroupEnumFoodCategory,
  Food,
  StatObject,
  statObject,
} from "../../assets";
import { SummaryFood } from "../../types";

const countAttribute = (
  items: Food[],
): { [K in GroupEnumFoodAttribute]: number } => {
  const result: { [K in GroupEnumFoodAttribute]: number } = {
    [GroupEnumFoodAttribute.CRISPY]: 0,
    [GroupEnumFoodAttribute.LIGHT]: 0,
    [GroupEnumFoodAttribute.ROBUST]: 0,
    [GroupEnumFoodAttribute.RICH]: 0,
  };

  for (const item of items) {
    const attr = item.attribute;
    result[attr] += 1;
  }

  return result;
};

const countCategory = (
  items: Food[],
): { [K in GroupEnumFoodCategory]: number } => {
  const result: { [K in GroupEnumFoodCategory]: number } = {
    [GroupEnumFoodCategory.FRUIT]: 0,
    [GroupEnumFoodCategory.MEAT]: 0,
    [GroupEnumFoodCategory.SEAFOOD]: 0,
    [GroupEnumFoodCategory.VEGETABLE]: 0,
  };

  for (const item of items) {
    const cate = item.category;
    result[cate] += 1;
  }

  return result;
};

export const createStat = (items: Food[]): StatObject => {
  const result = statObject();

  return result;
};

export const createSummary = (items: Food[]): SummaryFood[] => {
  const attr_counter = countAttribute(items);
  const cate_counter = countCategory(items);

  const summaries: SummaryFood[] = [];

  const attr_keys = Object.keys(
    attr_counter,
  ) as GroupEnumFoodAttribute[];

  for (const attr_key of attr_keys) {
    const level: number = attr_counter[attr_key];

    summaries.push({
      label: attr_key,
      level,
    });
  }

  const cate_keys = Object.keys(
    cate_counter,
  ) as GroupEnumFoodCategory[];

  for (const cate_key of cate_keys) {
    const level: number = cate_counter[cate_key];

    if (level < 4) {
      continue;
    }

    summaries.push({
      label: cate_key,
      level: level - 3,
    });
  }

  return summaries;
};
