import { ActionContext } from "../ContextAction";
import { StatObject } from "../stat";
import {
  GroupEnumFoodCategory,
  GroupEnumFoodAttribute,
} from "./groupEnum";
import {
  getStatObjectAttribute,
  getStatObjectCategory,
} from "./helper";

const FOOD_LOOKUP: { [K: string]: Food } = {};

export type Food = {
  label: string;
  attribute: GroupEnumFoodAttribute;
  category: GroupEnumFoodCategory;
};

export const Food = {
  MAX_ITEM: 10,

  toString(foods: Food[]): string {
    const labels: string[] = [];
    for (const food of foods) {
      labels.push(food.label);
    }
    return JSON.stringify(labels);
  },

  fromLabel: (label: string): Food | null => {
    if (label in FOOD_LOOKUP) {
      return FOOD_LOOKUP[label];
    }
    return null;
  },

  fromLabels(labels: string[]): Food[] {
    const results: Food[] = [];
    for (const label of labels) {
      const result: Food | null = Food.fromLabel(label);
      if (result !== null) {
        results.push(result);
      }
    }
    return results;
  },

  countOccurence: (
    foods: Food[],
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
    for (const food of foods) {
      const { attribute, category } = food;
      result[attribute] += 1;
      result[category] += 1;
    }
    return result;
  },

  getStatObjectAttribute: (
    ctx: ActionContext,
    occurence: { [K in GroupEnumFoodAttribute]: number },
  ): StatObject => {
    return getStatObjectAttribute(ctx, occurence);
  },

  getStatObjectCategory: (
    ctx: ActionContext,
    occurence: { [K in GroupEnumFoodCategory]: number },
  ): StatObject => {
    return getStatObjectCategory(ctx, occurence);
  },

  getStatObject: (ctx: ActionContext, foods: Food[]): StatObject => {
    const occurrence = Food.countOccurence(foods);
    const stat_attribute: StatObject = Food.getStatObjectAttribute(
      ctx,
      occurrence,
    );
    const stat_category: StatObject = Food.getStatObjectCategory(
      ctx,
      occurrence,
    );
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

  FOOD_LOOKUP[label] = result;

  return result;
};
