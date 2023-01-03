import { ActionContext } from "./../context";
import { StatEnum, statObject, StatObject } from "../stat";
import { food, Food } from "./food";
import {
  GroupEnumFoodAttribute,
  GroupEnumFoodCategory,
} from "./groupEnum";

export const AssetFoods: Food[] = [];

(() => {
  const categories: GroupEnumFoodCategory[] = [
    GroupEnumFoodCategory.FRUIT,
    GroupEnumFoodCategory.MEAT,
    GroupEnumFoodCategory.VEGETABLE,
    GroupEnumFoodCategory.SEAFOOD,
  ];

  const attributes: GroupEnumFoodAttribute[] = [
    GroupEnumFoodAttribute.CRISPY,
    GroupEnumFoodAttribute.LIGHT,
    GroupEnumFoodAttribute.RICH,
    GroupEnumFoodAttribute.ROBUST,
  ];

  categories.forEach((category) => {
    attributes.forEach((attribute) => {
      AssetFoods.push(food(attribute, category));
    });
  });
})();

export const getStatObjectKvaris = (
  ctx: ActionContext,
  level: number,
): StatObject => {
  const DATA_HARSH_COLD: number[] = [
    0.06, 0.12, 0.18, 0.21, 0.24, 0.27, 0.3,
  ];

  const stat = statObject();

  if (level < 0 || DATA_HARSH_COLD.length <= level) {
    return stat;
  }

  if (ctx.location === undefined) {
    return stat;
  }

  if (ctx.location.kvaris) {
    stat.setStat(StatEnum.HARSH_COLD, DATA_HARSH_COLD[level]);
  }

  return stat;
};

export const getStatObjectCrispy = (
  ctx: ActionContext,
  level: number,
): StatObject => {
  const DATA_DAMAGE_UP: number[] = [
    1.01, 1.02, 1.03, 1.035, 1.04, 1.045, 1.05,
  ];

  const stat = statObject();

  if (level < 0 || DATA_DAMAGE_UP.length <= level) {
    return stat;
  }

  if (ctx.character === undefined) {
    return stat;
  }

  if (ctx.character.isAttackingWeakpoint) {
    stat.setStat(StatEnum.ADV_OFF_DAMAGE_UP, DATA_DAMAGE_UP[level]);
  }

  return stat;
};

export const getStatObjectLight = (
  _: ActionContext,
  level: number,
): StatObject => {
  const DATA_PP_RECOVERY: number[] = [
    1.1, 1.12, 1.14, 1.16, 1.18, 1.19, 1.2,
  ];

  const stat = statObject();

  if (level < 0 || DATA_PP_RECOVERY.length <= level) {
    return stat;
  }

  stat.setStat(
    StatEnum.ADV_PP_ACTIVE_RECOVERY,
    DATA_PP_RECOVERY[level],
  );
  stat.setStat(
    StatEnum.ADV_PP_NATURAL_RECOVERY,
    DATA_PP_RECOVERY[level],
  );

  return stat;
};

export const getStatObjectRich = (
  _: ActionContext,
  level: number,
): StatObject => {
  const DATA_PP_USAGE: number[] = [
    0.95, 0.945, 0.94, 0.935, 0.93, 0.925, 0.92,
  ];

  const stat = statObject();

  if (level < 0 || DATA_PP_USAGE.length <= level) {
    return stat;
  }

  stat.setStat(StatEnum.ADV_PP_USAGE, DATA_PP_USAGE[level]);

  return stat;
};

export const getStatObjectRobust = (
  _: ActionContext,
  level: number,
): StatObject => {
  const DATA_HEALING_UP: number[] = [
    1.1, 1.2, 1.3, 1.35, 1.4, 1.45, 1.5,
  ];

  const stat = statObject();

  if (level < 0 || DATA_HEALING_UP.length <= level) {
    return stat;
  }

  stat.setStat(StatEnum.ADV_DEF_HEALING, DATA_HEALING_UP[level]);

  return stat;
};

export const getStatObjectMeat = (
  _: ActionContext,
  level: number,
): StatObject => {
  const DATA_DAMAGE_UP: number[] = [
    1.05, 1.07, 1.08, 1.085, 1.088, 1.09, 1.092, 1.096, 1.098, 1.1,
  ];

  const stat = statObject();

  if (level < 0 || DATA_DAMAGE_UP.length <= level) {
    return stat;
  }

  stat.setStat(StatEnum.ADV_OFF_DAMAGE_UP, DATA_DAMAGE_UP[level]);

  return stat;
};

export const getStatObjectFruit = (
  _: ActionContext,
  level: number,
): StatObject => {
  const DATA_PP: number[] = [10, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const stat = statObject();

  if (level < 0 || DATA_PP.length <= level) {
    return stat;
  }

  stat.setStat(StatEnum.CORE_PP, DATA_PP[level]);

  return stat;
};

export const getStatObjectVegetable = (
  _: ActionContext,
  level: number,
): StatObject => {
  const DATA_DAMAGE_RES: number[] = [
    1.05, 1.07, 1.08, 1.085, 1.088, 1.09, 1.092, 1.096, 1.098, 1.1,
  ];

  const stat: StatObject = statObject();

  if (level < 0 || DATA_DAMAGE_RES.length <= level) {
    return stat;
  }

  stat.setStat(StatEnum.ADV_DEF_DAMAGE_RES, DATA_DAMAGE_RES[level]);

  return stat;
};

export const getStatObjectSeafood = (
  _: ActionContext,
  level: number,
): StatObject => {
  const DATA_HP_UP: number[] = [
    1.05, 1.07, 1.08, 1.085, 1.088, 1.09, 1.092, 1.096, 1.098, 1.1,
  ];

  const stat: StatObject = statObject();

  if (level < 0 || DATA_HP_UP.length <= level) {
    return stat;
  }

  stat.setStat(StatEnum.ADV_HP_BOOST, DATA_HP_UP[level]);

  return stat;
};
