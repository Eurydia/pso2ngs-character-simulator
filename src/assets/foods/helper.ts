import { ActionContext } from "../context";
import { StatObject, statObject, StatEnum } from "../stat";
import {
  GroupEnumFoodAttribute,
  GroupEnumFoodCategory,
} from "./groupEnum";

const getAwareStatObjectKvaris = (
  ctx: ActionContext,
  level: number,
): StatObject => {
  const DATA_HARSH_COLD: number[] = [
    0.06, 0.12, 0.18, 0.21, 0.24, 0.27, 0.3,
  ];

  const stat: StatObject = statObject();
  const level_index: number = level - 4;

  if (level_index < 0 || level_index >= DATA_HARSH_COLD.length) {
    return stat;
  }

  if (ctx.location === undefined) {
    return stat;
  }

  if (!ctx.location.kvaris) {
    return stat;
  }

  const harsh_cold: number = DATA_HARSH_COLD[level_index];
  return statObject({ [StatEnum.HARSH_COLD]: harsh_cold });
};

const getAwareStatObjectCrispy = (
  ctx: ActionContext,
  level: number,
): StatObject => {
  const DATA_DAMAGE_UP: number[] = [
    1.01, 1.02, 1.03, 1.035, 1.04, 1.045, 1.05,
  ];

  let stat: StatObject = statObject();
  const level_index: number = level - 4;

  if (level_index < 0 || DATA_DAMAGE_UP.length <= level_index) {
    return stat;
  }

  if (ctx.character === undefined) {
    return stat;
  }

  if (!ctx.character.isAttackingWeakpoint) {
    return stat;
  }

  const damage_up: number = DATA_DAMAGE_UP[level_index];
  return statObject({
    [StatEnum.ADV_OFF_DAMAGE_UP]: damage_up,
  });
};

const getAwareStatObjectLight = (
  _: ActionContext,
  strength: number,
): StatObject => {
  const DATA_PP_RECOVERY: number[] = [
    1.1, 1.12, 1.14, 1.16, 1.18, 1.19, 1.2,
  ];

  const level_index: number = strength - 4;

  if (level_index < 0 || DATA_PP_RECOVERY.length <= level_index) {
    return statObject();
  }

  const pp_recovery: number = DATA_PP_RECOVERY[level_index];
  return statObject({
    [StatEnum.ADV_PP_ACTIVE_RECOVERY]: pp_recovery,
    [StatEnum.ADV_PP_NATURAL_RECOVERY]: pp_recovery,
  });
};

const getAwareStatObjectRich = (
  _: ActionContext,
  level: number,
): StatObject => {
  const DATA_PP_USAGE: number[] = [
    0.95, 0.945, 0.94, 0.935, 0.93, 0.925, 0.92,
  ];

  const level_index: number = level - 4;

  if (level_index < 0 || DATA_PP_USAGE.length <= level_index) {
    return statObject();
  }

  const pp_usage: number = DATA_PP_USAGE[level_index];
  return statObject({ [StatEnum.ADV_PP_USAGE]: pp_usage });
};

const getAwareStatObjectRobust = (
  _: ActionContext,
  level: number,
): StatObject => {
  const DATA_HEALING_UP: number[] = [
    1.1, 1.2, 1.3, 1.35, 1.4, 1.45, 1.5,
  ];

  const level_index: number = level - 4;

  if (level_index < 0 || DATA_HEALING_UP.length <= level_index) {
    return statObject();
  }

  const healing_up: number = DATA_HEALING_UP[level_index];
  return statObject({ [StatEnum.ADV_DEF_HEALING]: healing_up });
};

const getAwareStatObjectMeat = (
  _: ActionContext,
  level: number,
): StatObject => {
  const DATA_DAMAGE_UP: number[] = [
    1.05, 1.07, 1.08, 1.085, 1.088, 1.09, 1.092, 1.096, 1.098, 1.1,
  ];

  const level_index: number = level - 1;

  if (level_index < 0 || DATA_DAMAGE_UP.length <= level_index) {
    return statObject();
  }

  const damage_up: number = DATA_DAMAGE_UP[level_index];
  return statObject({ [StatEnum.ADV_OFF_DAMAGE_UP]: damage_up });
};

const getAwareStatObjectFruit = (
  _: ActionContext,
  level: number,
): StatObject => {
  const DATA_PP: number[] = [10, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const level_index: number = level - 1;

  if (level_index < 0 || DATA_PP.length <= level_index) {
    return statObject();
  }

  const pp: number = DATA_PP[level_index];
  return statObject({ [StatEnum.CORE_PP]: pp });
};

const getAwareStatObjectVegetable = (
  _: ActionContext,
  level: number,
): StatObject => {
  const DATA_DAMAGE_RES: number[] = [
    1.05, 1.07, 1.08, 1.085, 1.088, 1.09, 1.092, 1.096, 1.098, 1.1,
  ];

  const level_index: number = level - 1;

  if (level_index < 0 || DATA_DAMAGE_RES.length <= level_index) {
    return statObject();
  }

  const damage_res: number = DATA_DAMAGE_RES[level_index];
  return statObject({ [StatEnum.ADV_DEF_DAMAGE_RES]: damage_res });
};

const getAwareStatObjectSeafood = (
  _: ActionContext,
  level: number,
): StatObject => {
  const DATA_HP_UP: number[] = [
    1.05, 1.07, 1.08, 1.085, 1.088, 1.09, 1.092, 1.096, 1.098, 1.1,
  ];

  const level_index: number = level - 1;

  if (level_index < 0 || DATA_HP_UP.length <= level_index) {
    return statObject();
  }

  const hp_up: number = DATA_HP_UP[level_index];
  return statObject({ [StatEnum.ADV_HP_BOOST]: hp_up });
};

export const getStatObjectAttribute = (
  ctx: ActionContext,
  data: { [K in GroupEnumFoodAttribute]: number },
): StatObject => {
  let result: StatObject = statObject();

  const stat_crispy = getAwareStatObjectCrispy(
    ctx,
    data[GroupEnumFoodAttribute.CRISPY],
  );
  result = StatObject.merge(result, stat_crispy);

  const stat_light = getAwareStatObjectLight(
    ctx,
    data[GroupEnumFoodAttribute.LIGHT],
  );
  result = StatObject.merge(result, stat_light);

  const stat_rich = getAwareStatObjectRich(
    ctx,
    data[GroupEnumFoodAttribute.RICH],
  );
  result = StatObject.merge(result, stat_rich);

  const stat_robust = getAwareStatObjectRich(
    ctx,
    data[GroupEnumFoodAttribute.ROBUST],
  );
  result = StatObject.merge(result, stat_robust);

  const data_sum: number = Object.values(data).reduce((a, b) => {
    return a + b;
  }, 0);
  const stat_kvaris = getAwareStatObjectKvaris(ctx, data_sum);
  result = StatObject.merge(result, stat_kvaris);

  return result;
};

export const getStatObjectCategory = (
  ctx: ActionContext,
  data: { [K in GroupEnumFoodCategory]: number },
): StatObject => {
  let result = statObject();

  const stat_meat = getAwareStatObjectMeat(
    ctx,
    data[GroupEnumFoodCategory.MEAT] - 4,
  );
  result = StatObject.merge(result, stat_meat);

  const stat_fruit = getAwareStatObjectFruit(
    ctx,
    data[GroupEnumFoodCategory.FRUIT] - 4,
  );
  result = StatObject.merge(result, stat_fruit);

  const stat_vegetable = getAwareStatObjectVegetable(
    ctx,
    data[GroupEnumFoodCategory.VEGETABLE] - 4,
  );
  result = StatObject.merge(result, stat_vegetable);

  const stat_seafood = getAwareStatObjectSeafood(
    ctx,
    data[GroupEnumFoodCategory.SEAFOOD] - 3,
  );
  result = StatObject.merge(result, stat_seafood);

  return result;
};
