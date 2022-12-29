import { useState } from "react";
import { Food } from "../../assets";

export const useFood = () => {
  const [value, _setValue] = useState<Food[]>([]);
};
