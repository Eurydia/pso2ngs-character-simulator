import food, { Food } from "./food";
import { AttributeEnum, CategoryEnum, RegionEnum } from "./groupEnum";

const data: Food[] = [];

(() => {
  const categories: CategoryEnum[] = [
    CategoryEnum.FRUIT,
    CategoryEnum.MEAT,
    CategoryEnum.VEGETABLE,
    CategoryEnum.SEAFOOD,
  ];

  const regions: RegionEnum[] = [
    RegionEnum.KVARIS,
    RegionEnum.NON_KVARIS,
  ];

  const attributes: AttributeEnum[] = [
    AttributeEnum.CRISPY,
    AttributeEnum.CRISPY_INACTIVE,
    AttributeEnum.LIGHT,
    AttributeEnum.RICH,
    AttributeEnum.ROBUST,
  ];

  regions.forEach((region) => {
    categories.forEach((category) => {
      attributes.forEach((attribute) => {
        data.push(food(attribute, region, category));
      });
    });
  });
})();

export default data;
