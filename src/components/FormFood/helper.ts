import {
  FoodAttributeEnum,
  Food,
  FoodCategoryEnum,
} from "../../assets";
import { SummaryFood } from "../../types";

export const createSummary = (items: Food[]): SummaryFood[] => {
  const counter_attribute: Partial<{
    [K in FoodAttributeEnum]: number;
  }> = {};

  const counter_category: Partial<{
    [K in FoodCategoryEnum]: number;
  }> = {};

  for (const item of items) {
    const attribute = item.attribute;

    if (counter_attribute[attribute] === undefined) {
      counter_attribute[attribute] = 1;
      continue;
    }

    counter_attribute[attribute]! += 1;
  }

  for (const item of items) {
    const category = item.category;

    if (counter_category[category] === undefined) {
      counter_category[category] = 1;
      continue;
    }

    counter_category[category]! += 1;
  }

  const summaries: SummaryFood[] = [];

  for (const key of Object.keys(counter_attribute)) {
    const level: number | undefined =
      counter_attribute[key as FoodAttributeEnum];

    if (level === undefined) {
      continue;
    }

    summaries.push({
      label: key,
      level,
    });
  }

  for (const key of Object.keys(counter_category)) {
    const level: number | undefined =
      counter_category[key as FoodCategoryEnum];

    if (level === undefined) {
      continue;
    }

    if (level < 4) {
      continue;
    }

    summaries.push({
      label: key,
      level: level - 3,
    });
  }

  return summaries;
};
