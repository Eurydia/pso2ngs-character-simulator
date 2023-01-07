import {
  GroupEnumFoodAttribute,
  GroupEnumFoodCategory,
  Food,
  StatObject,
  statObject,
  ActionContext,
} from "../../assets";

const collectAttribute = (
  ctx: ActionContext,
  items: Food[],
  target: StatObject,
): StatObject => {
  let _result: StatObject = target;
  const attribute = Food.countOccurence(items);

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
  const category = Food.countOccurence(items);

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
