import {
  GroupEnumFoodAttribute,
  GroupEnumFoodCategory,
  Food,
  StatObject,
  statObject,
  ActionContext,
  getAwareStatObjectCrispy,
  getAwareStatObjectLight,
  getAwareStatObjectRich,
  getAwareStatObjectMeat,
  getAwareStatObjectFruit,
  getAwareStatObjectVegetable,
  getAwareStatObjectSeafood,
  getAwareStatObjectKvaris,
} from "../../assets";

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
): StatObject => {
  let _result: StatObject = target;
  const attribute = countAttribute(items);

  const stat_crispy = getAwareStatObjectCrispy(
    ctx,
    attribute[GroupEnumFoodAttribute.CRISPY],
  );
  _result = _result.mergeStat(stat_crispy);

  const stat_light = getAwareStatObjectLight(
    ctx,
    attribute[GroupEnumFoodAttribute.LIGHT],
  );
  _result = _result.mergeStat(stat_light);

  const stat_rich = getAwareStatObjectRich(
    ctx,
    attribute[GroupEnumFoodAttribute.RICH],
  );
  _result = _result.mergeStat(stat_rich);

  const stat_robust = getAwareStatObjectRich(
    ctx,
    attribute[GroupEnumFoodAttribute.ROBUST],
  );
  _result = _result.mergeStat(stat_robust);

  const item_sum: number = Object.values(attribute).reduce((a, b) => {
    return a + b;
  }, 0);
  const stat_kvaris = getAwareStatObjectKvaris(ctx, item_sum);
  _result = _result.mergeStat(stat_kvaris);

  return _result;
};

const collectCategory = (
  ctx: ActionContext,
  items: Food[],
  target: StatObject,
): StatObject => {
  let _result = target;
  const category = countCategory(items);

  const stat_meat = getAwareStatObjectMeat(
    ctx,
    category[GroupEnumFoodCategory.MEAT] - 4,
  );
  _result = _result.mergeStat(stat_meat);

  const stat_fruit = getAwareStatObjectFruit(
    ctx,
    category[GroupEnumFoodCategory.FRUIT] - 4,
  );
  _result = _result.mergeStat(stat_fruit);

  const stat_vegetable = getAwareStatObjectVegetable(
    ctx,
    category[GroupEnumFoodCategory.VEGETABLE] - 4,
  );
  _result = _result.mergeStat(stat_vegetable);

  const stat_seafood = getAwareStatObjectSeafood(
    ctx,
    category[GroupEnumFoodCategory.SEAFOOD] - 3,
  );
  _result = _result.mergeStat(stat_seafood);

  return _result;
};

export const createStat = (
  ctx: ActionContext,
  items: Food[],
): StatObject => {
  let result = statObject();

  result = collectAttribute(ctx, items, result);
  result = collectCategory(ctx, items, result);

  return result;
};

// export const createSummary = (items: Food[]): SummaryFood[] => {
//   const attr_counter = countAttribute(items);
//   const cate_counter = countCategory(items);

//   const summaries: SummaryFood[] = [];

//   const attr_keys = Object.keys(
//     attr_counter,
//   ) as GroupEnumFoodAttribute[];

//   for (const attr_key of attr_keys) {
//     const level: number = attr_counter[attr_key];

//     if (level < 4) {
//       continue;
//     }

//     summaries.push({
//       label: attr_key,
//       level,
//     });
//   }

//   const cate_keys = Object.keys(
//     cate_counter,
//   ) as GroupEnumFoodCategory[];

//   for (const cate_key of cate_keys) {
//     const level: number = cate_counter[cate_key];

//     if (level < 1) {
//       continue;
//     }

//     summaries.push({
//       label: cate_key,
//       level,
//     });
//   }

//   return summaries;
// };
