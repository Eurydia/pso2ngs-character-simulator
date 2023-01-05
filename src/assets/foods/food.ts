import {
  GroupEnumFoodCategory,
  GroupEnumFoodAttribute,
} from "./groupEnum";

export type Food = {
  label: string;
  attribute: GroupEnumFoodAttribute;
  category: GroupEnumFoodCategory;
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
