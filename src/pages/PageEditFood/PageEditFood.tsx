import { FC, useCallback, useEffect, useMemo } from "react";
import { Box, Container } from "@mui/material";

import { Food, StatObject, ActionContext } from "../../assets";
import { FormFood } from "../../components";
import { useFood } from "../../hooks";

type PageEditFoodProps = {
  isVisible: boolean;
  context: ActionContext;
  storageKey: string;
  onStatChange: (stat: StatObject) => void;
};
export const PageEditFood: FC<PageEditFoodProps> = (props) => {
  const { isVisible, context, storageKey, onStatChange } = props;

  const { foods, addFood, removeFood } = useFood(storageKey);

  const handleAddItem = useCallback(
    (next_food: Food, food_index: number) => {
      addFood(next_food, food_index);
    },
    [],
  );
  const handleRemoveItem = useCallback((food_index: number) => {
    removeFood(food_index);
  }, []);

  const stat_total = useMemo(() => {
    return Food.getStatObject(context, foods);
  }, [context, foods]);

  useEffect(() => {
    onStatChange(stat_total);
  }, [stat_total]);

  return (
    <Container
      maxWidth="md"
      sx={{
        display: isVisible ? "block" : "none",
      }}
    >
      <Box margin={4}>
        <FormFood
          stat={stat_total}
          foods={foods}
          onFoodAdd={handleAddItem}
          onFoodRemove={handleRemoveItem}
        />
      </Box>
    </Container>
  );
};
