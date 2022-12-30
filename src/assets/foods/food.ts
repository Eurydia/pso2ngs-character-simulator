import { RegionEnum, CategoryEnum, AttributeEnum } from "./groupEnum";

export class Food {
  region: RegionEnum;
  attribute: AttributeEnum;
  category: CategoryEnum;

  constructor(
    attribute: AttributeEnum,
    region: RegionEnum,
    category: CategoryEnum,
  ) {
    this.attribute = attribute;
    this.region = region;
    this.category = category;
  }

  get label(): string {
    return `${this.attribute} ${this.region} ${this.category}`;
  }
}

const food = (
  attribute: AttributeEnum,
  region: RegionEnum,
  category: CategoryEnum,
): Food => {
  return new Food(attribute, region, category);
};

export default food;
