import { ActionContext } from "../../contexts/ContextAction";
import { statObject, StatObject } from "../stat";
import {
  GroupEnumFoodCategory,
  GroupEnumFoodAttribute,
} from "./groupEnum";
import {
  getStatObjectAttribute,
  getStatObjectCategory,
} from "./helper";

const LOOKUP_FOODS: { [K: string]: Food } = {};

export type Food = {
  label: string;
  attribute: GroupEnumFoodAttribute;
  category: GroupEnumFoodCategory;
};

export const Food = {
  MAX_ITEM: 10,

  toString(items: Food[]): string {
    const labels: string[] = [];
    for (const item of items) {
      labels.push(item.label);
    }
    return JSON.stringify(labels);
  },

  fromLabels(labels: string[]): Food[] {
    const result: Food[] = [];
    for (const label of labels) {
      const item: Food | undefined = LOOKUP_FOODS[label];
      if (item !== undefined) {
        result.push(item);
      }
    }
    return result;
  },

  countOccurence: (
    items: Food[],
  ): {
    [K in GroupEnumFoodAttribute | GroupEnumFoodCategory]: number;
  } => {
    const result: {
      [K in GroupEnumFoodAttribute | GroupEnumFoodCategory]: number;
    } = {
      [GroupEnumFoodAttribute.CRISPY]: 0,
      [GroupEnumFoodAttribute.LIGHT]: 0,
      [GroupEnumFoodAttribute.ROBUST]: 0,
      [GroupEnumFoodAttribute.RICH]: 0,
      [GroupEnumFoodCategory.FRUIT]: 0,
      [GroupEnumFoodCategory.MEAT]: 0,
      [GroupEnumFoodCategory.SEAFOOD]: 0,
      [GroupEnumFoodCategory.VEGETABLE]: 0,
    };

    for (const item of items) {
      const attr = item.attribute;
      result[attr] += 1;
      const cate = item.category;
      result[cate] += 1;
    }
    return result;
  },

  getStatObjectAttribute: (
    ctx: ActionContext,
    data: { [K in GroupEnumFoodAttribute]: number },
  ): StatObject => {
    return getStatObjectAttribute(ctx, data);
  },

  getStatObjectCategory: (
    ctx: ActionContext,
    data: { [K in GroupEnumFoodCategory]: number },
  ): StatObject => {
    return getStatObjectCategory(ctx, data);
  },

  getStatObject: (ctx: ActionContext, items: Food[]): StatObject => {
    const counter = Food.countOccurence(items);
    const stat_attribute = Food.getStatObjectAttribute(ctx, counter);
    const stat_category = Food.getStatObjectCategory(ctx, counter);
    return StatObject.merge(stat_attribute, stat_category);
  },
};

export const food = (
  attribute: GroupEnumFoodAttribute,
  category: GroupEnumFoodCategory,
): Food => {
  const label: string = `${attribute} ${category}`;

  const result: Food = {
    attribute,
    category,
    label,
  };

  LOOKUP_FOODS[label] = result;

  return result;
};
