import { sum as ld_sum } from "lodash";
import {
  GroupEnumFoodAttribute,
  GroupEnumFoodCategory,
  Food,
  StatObject,
  statObject,
  ActionContext,
  getStatObjectCrispy,
  getStatObjectLight,
  getStatObjectRich,
  getStatObjectMeat,
  getStatObjectFruit,
  getStatObjectVegetable,
  getStatObjectSeafood,
  getStatObjectKvaris,
} from "../../assets";
import { SummaryFood } from "../../types";

const countAttribute = (
  items: Food[],
): { [K in GroupEnumFoodAttribute]: number } => {
  const result: { [K in GroupEnumFoodAttribute]: number } = {
    [GroupEnumFoodAttribute.CRISPY]: -4,
    [GroupEnumFoodAttribute.LIGHT]: -4,
    [GroupEnumFoodAttribute.ROBUST]: -4,
    [GroupEnumFoodAttribute.RICH]: -4,
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
    [GroupEnumFoodCategory.FRUIT]: -1,
    [GroupEnumFoodCategory.MEAT]: -1,
    [GroupEnumFoodCategory.SEAFOOD]: -1,
    [GroupEnumFoodCategory.VEGETABLE]: -1,
  };

  for (const item of items) {
    const cate = item.category;
    result[cate] += 1;
  }

  return result;
};

const collectAttribute = (
  context: ActionContext,
  items: Food[],
  target: StatObject,
): void => {
  const attribute = countAttribute(items);

  const stat_crispy = getStatObjectCrispy(
    context,
    attribute[GroupEnumFoodAttribute.CRISPY],
  );
  target.merge(stat_crispy);

  const stat_light = getStatObjectLight(
    context,
    attribute[GroupEnumFoodAttribute.LIGHT],
  );
  target.merge(stat_light);

  const stat_rich = getStatObjectRich(
    context,
    attribute[GroupEnumFoodAttribute.RICH],
  );
  target.merge(stat_rich);

  const stat_robust = getStatObjectRich(
    context,
    attribute[GroupEnumFoodAttribute.ROBUST],
  );
  target.merge(stat_robust);

  const stat_kvaris = getStatObjectKvaris(
    context,
    ld_sum(Object.values(attribute)),
  );
  target.merge(stat_kvaris);
};

const collectCategory = (
  context: ActionContext,
  items: Food[],
  target: StatObject,
): void => {
  const category = countCategory(items);

  const stat_meat = getStatObjectMeat(
    context,
    category[GroupEnumFoodCategory.MEAT],
  );
  target.merge(stat_meat);

  const stat_fruit = getStatObjectFruit(
    context,
    category[GroupEnumFoodCategory.FRUIT],
  );
  target.merge(stat_fruit);

  const stat_vegetable = getStatObjectVegetable(
    context,
    category[GroupEnumFoodCategory.VEGETABLE],
  );
  target.merge(stat_vegetable);

  const stat_seafood = getStatObjectSeafood(
    context,
    category[GroupEnumFoodCategory.SEAFOOD],
  );
  target.merge(stat_seafood);
};

export const createStat = (
  context: ActionContext,
  items: Food[],
): StatObject => {
  const result = statObject();

  collectAttribute(context, items, result);
  collectCategory(context, items, result);

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

    if (level < 0) {
      continue;
    }

    summaries.push({
      label: attr_key,
      level: level + 1,
    });
  }

  const cate_keys = Object.keys(
    cate_counter,
  ) as GroupEnumFoodCategory[];

  for (const cate_key of cate_keys) {
    const level: number = cate_counter[cate_key];

    if (level < 0) {
      continue;
    }

    summaries.push({
      label: cate_key,
      level: level + 1,
    });
  }

  return summaries;
};
