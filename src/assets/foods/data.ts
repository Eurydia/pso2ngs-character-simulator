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
