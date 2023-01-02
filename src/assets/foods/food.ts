import {
  GroupEnumFoodCategory,
  GroupEnumFoodAttribute,
} from "./groupEnum";

export class Food {
  attribute: GroupEnumFoodAttribute;
  category: GroupEnumFoodCategory;

  constructor(
    attribute: GroupEnumFoodAttribute,
    category: GroupEnumFoodCategory,
  ) {
    this.attribute = attribute;
    this.category = category;
  }

  get label(): string {
    return `${this.attribute} ${this.category}`;
  }
}

export const food = (
  attribute: GroupEnumFoodAttribute,
  category: GroupEnumFoodCategory,
): Food => {
  return new Food(attribute, category);
};
