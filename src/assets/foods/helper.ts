import { ActionContext } from "../ContextAction";
import { StatObject, statObject, StatEnum } from "../stat";
import {
  GroupEnumFoodAttribute,
  GroupEnumFoodCategory,
} from "./groupEnum";

// --------------------
// Getter for attributes
const getAwareStatObjectKvaris = (
  ctx: ActionContext,
  level: number,
): StatObject => {
  const DATA_HARSH_COLD: number[] = [
    0.06, 0.12, 0.18, 0.21, 0.24, 0.27, 0.3,
  ];
  const level_index: number = level - 4;
  if (level_index < 0 || level_index >= DATA_HARSH_COLD.length) {
    return statObject();
  }
  if (!ctx.location.kvaris) {
    return statObject();
  }
  const harsh_cold: number = DATA_HARSH_COLD[level];
  return statObject({ [StatEnum.HARSH_COLD]: harsh_cold });
};
const getAwareStatObjectCrispy = (
  ctx: ActionContext,
  level: number,
): StatObject => {
  const DATA_DAMAGE_UP: number[] = [
    1.01, 1.02, 1.03, 1.035, 1.04, 1.045, 1.05,
  ];
  const level_index: number = level - 4;
  if (level_index < 0 || level_index >= DATA_DAMAGE_UP.length) {
    return statObject();
  }
  if (!ctx.character.isAttackingWeakPoint) {
    return statObject();
  }
  const damage_up: number = DATA_DAMAGE_UP[level_index];
  return statObject({
    [StatEnum.ADV_OFF_DAMAGE_UP]: damage_up,
  });
};

const getAwareStatObjectLight = (
  _: ActionContext,
  level: number,
): StatObject => {
  const DATA_PP_RECOVERY: number[] = [
    1.1, 1.12, 1.14, 1.16, 1.18, 1.19, 1.2,
  ];
  const level_index: number = level - 4;
  if (level_index < 0 || level_index >= DATA_PP_RECOVERY.length) {
    return statObject();
  }
  const pp_recovery: number = DATA_PP_RECOVERY[level_index];
  return statObject({
    [StatEnum.ADV_PP_RECOVERY]: pp_recovery,
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
  if (level_index < 0 || level_index >= DATA_PP_USAGE.length) {
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
  if (level_index < 0 || level_index >= DATA_HEALING_UP.length) {
    return statObject();
  }
  const healing_up: number = DATA_HEALING_UP[level_index];
  return statObject({ [StatEnum.ADV_DEF_HEALING_UP]: healing_up });
};

const getAwareStatObjectMeat = (
  _: ActionContext,
  level: number,
): StatObject => {
  const DATA_DAMAGE_UP: number[] = [
    1.05, 1.07, 1.08, 1.085, 1.088, 1.09, 1.092, 1.096, 1.098, 1.1,
  ];
  const level_index: number = level - 1;
  if (level_index < 0 || level_index >= DATA_DAMAGE_UP.length) {
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
  if (level_index < 0 || level_index >= DATA_PP.length) {
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
  if (level_index < 0 || level_index >= DATA_DAMAGE_RES.length) {
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
  if (level_index < 0 || level_index >= DATA_HP_UP.length) {
    return statObject();
  }
  const hp_up: number = DATA_HP_UP[level_index];
  return statObject({ [StatEnum.ADV_HP_BOOST]: hp_up });
};

export const getStatObjectAttribute = (
  ctx: ActionContext,
  occurence: { [K in GroupEnumFoodAttribute]: number },
): StatObject => {
  let stat: StatObject = statObject();

  const count_crispy: number =
    occurence[GroupEnumFoodAttribute.CRISPY];
  const stat_crispy: StatObject = getAwareStatObjectCrispy(
    ctx,
    count_crispy,
  );
  stat = StatObject.merge(stat, stat_crispy);

  const count_light: number = occurence[GroupEnumFoodAttribute.LIGHT];
  const stat_light: StatObject = getAwareStatObjectLight(
    ctx,
    count_light,
  );
  stat = StatObject.merge(stat, stat_light);

  const count_rich: number = occurence[GroupEnumFoodAttribute.RICH];
  const stat_rich: StatObject = getAwareStatObjectRich(
    ctx,
    count_rich,
  );
  stat = StatObject.merge(stat, stat_rich);

  const count_robust: number =
    occurence[GroupEnumFoodAttribute.ROBUST];
  const stat_robust: StatObject = getAwareStatObjectRobust(
    ctx,
    count_robust,
  );
  stat = StatObject.merge(stat, stat_robust);

  const count_kvaris: number =
    count_crispy + count_light + count_rich + count_rich;
  const stat_kvaris: StatObject = getAwareStatObjectKvaris(
    ctx,
    count_kvaris,
  );
  stat = StatObject.merge(stat, stat_kvaris);

  return stat;
};

export const getStatObjectCategory = (
  ctx: ActionContext,
  occurence: { [K in GroupEnumFoodCategory]: number },
): StatObject => {
  let stat: StatObject = statObject();

  const count_meat: number = occurence[GroupEnumFoodCategory.MEAT];
  const stat_meat: StatObject = getAwareStatObjectMeat(
    ctx,
    count_meat,
  );
  stat = StatObject.merge(stat, stat_meat);

  const count_fruit: number = occurence[GroupEnumFoodCategory.FRUIT];
  const stat_fruit: StatObject = getAwareStatObjectFruit(
    ctx,
    count_fruit,
  );
  stat = StatObject.merge(stat, stat_fruit);

  const count_vegetable: number =
    occurence[GroupEnumFoodCategory.VEGETABLE];
  const stat_vegetable: StatObject = getAwareStatObjectVegetable(
    ctx,
    count_vegetable,
  );
  stat = StatObject.merge(stat, stat_vegetable);

  const count_seafood: number =
    occurence[GroupEnumFoodCategory.SEAFOOD];
  const stat_seafood: StatObject = getAwareStatObjectSeafood(
    ctx,
    count_seafood,
  );
  stat = StatObject.merge(stat, stat_seafood);
  return stat;
};
