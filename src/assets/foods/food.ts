import { CategoryEnum, AttributeEnum } from "./groupEnum";

export class Food {
  attribute: AttributeEnum;
  category: CategoryEnum;

  constructor(attribute: AttributeEnum, category: CategoryEnum) {
    this.attribute = attribute;
    this.category = category;
  }

  get label(): string {
    return `${this.attribute} ${this.category}`;
  }
}

const food = (
  attribute: AttributeEnum,
  category: CategoryEnum,
): Food => {
  return new Food(attribute, category);
};

export default food;
