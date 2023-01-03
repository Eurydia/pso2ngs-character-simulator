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

const collectAttribute = (
  ctx: ActionContext,
  items: Food[],
  target: StatObject,
): void => {
  const attribute = countAttribute(items);

  const stat_crispy = getStatObjectCrispy(
    ctx,
    attribute[GroupEnumFoodAttribute.CRISPY] - 1,
  );
  target.merge(stat_crispy);

  const stat_light = getStatObjectLight(
    ctx,
    attribute[GroupEnumFoodAttribute.LIGHT] - 1,
  );
  target.merge(stat_light);

  const stat_rich = getStatObjectRich(
    ctx,
    attribute[GroupEnumFoodAttribute.RICH] - 1,
  );
  target.merge(stat_rich);

  const stat_robust = getStatObjectRich(
    ctx,
    attribute[GroupEnumFoodAttribute.ROBUST] - 1,
  );
  target.merge(stat_robust);

  const stat_kvaris = getStatObjectKvaris(
    ctx,
    ld_sum(Object.values(attribute)) - 1,
  );
  target.merge(stat_kvaris);
};

const collectCategory = (
  ctx: ActionContext,
  items: Food[],
  target: StatObject,
): void => {
  const category = countCategory(items);

  const stat_meat = getStatObjectMeat(
    ctx,
    category[GroupEnumFoodCategory.MEAT] - 4,
  );
  target.merge(stat_meat);

  const stat_fruit = getStatObjectFruit(
    ctx,
    category[GroupEnumFoodCategory.FRUIT] - 4,
  );
  target.merge(stat_fruit);

  const stat_vegetable = getStatObjectVegetable(
    ctx,
    category[GroupEnumFoodCategory.VEGETABLE] - 4,
  );
  target.merge(stat_vegetable);

  const stat_seafood = getStatObjectSeafood(
    ctx,
    category[GroupEnumFoodCategory.SEAFOOD] - 3,
  );
  target.merge(stat_seafood);
};

export const createStat = (
  ctx: ActionContext,
  items: Food[],
): StatObject => {
  const result = statObject();

  collectAttribute(ctx, items, result);
  collectCategory(ctx, items, result);

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

    if (level < 4) {
      continue;
    }

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

    if (level < 1) {
      continue;
    }

    summaries.push({
      label: cate_key,
      level,
    });
  }

  return summaries;
};
