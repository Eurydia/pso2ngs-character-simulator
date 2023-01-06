import { ActionContext } from "../context";
import { statObject, StatObject } from "../stat";
import {
  GroupEnumFoodCategory,
  GroupEnumFoodAttribute,
} from "./groupEnum";
import {
  getStatObjectAttribute,
  getStatObjectCategory,
} from "./helper";

export type Food = {
  label: string;
  attribute: GroupEnumFoodAttribute;
  category: GroupEnumFoodCategory;
};

export const Food = {
  summarize: (
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
    const summary = Food.summarize(items);
    const stat_attribute = Food.getStatObjectAttribute(ctx, summary);
    const stat_category = Food.getStatObjectCategory(ctx, summary);
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

  return result;
};
