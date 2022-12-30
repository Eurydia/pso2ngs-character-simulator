import food, { Food } from "./food";
import { AttributeEnum, CategoryEnum } from "./groupEnum";

const data: Food[] = [];

(() => {
  const categories: CategoryEnum[] = [
    CategoryEnum.FRUIT,
    CategoryEnum.MEAT,
    CategoryEnum.VEGETABLE,
    CategoryEnum.SEAFOOD,
  ];

  const attributes: AttributeEnum[] = [
    AttributeEnum.CRISPY,
    AttributeEnum.LIGHT,
    AttributeEnum.RICH,
    AttributeEnum.ROBUST,
  ];

  categories.forEach((category) => {
    attributes.forEach((attribute) => {
      data.push(food(attribute, category));
    });
  });
})();

export default data;
