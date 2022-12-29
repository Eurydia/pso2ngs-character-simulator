export class Food {
  attribute: string;
  category: string;

  constructor(attribute: string, category: string) {
    this.attribute = attribute;
    this.category = category;
  }
}

const food = (attribute: string, category: string): Food => {
  return new Food(attribute, category);
};

export default food;
