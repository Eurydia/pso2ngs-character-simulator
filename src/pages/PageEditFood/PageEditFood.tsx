import { FC, useEffect } from "react";
import { Box, Container } from "@mui/material";

import { ActionContext, Food, StatObject } from "../../assets";
import { FormFood } from "../../components";
import { useFood } from "../../hooks";

type PageEditFoodProps = {
  isVisible: boolean;
  context: ActionContext;
  storageKey: string;
  onStatChange: (stat: StatObject) => void;
};
export const PageEditFood: FC<PageEditFoodProps> = (props) => {
  const { context, storageKey, onStatChange, isVisible } = props;

  const [items, addItem, removeItem] = useFood(storageKey);

  const stat_total = Food.getStatObject(context, items);

  useEffect(() => {
    onStatChange(stat_total);
  }, [context]);

  const handleAddItem = (next_item: Food, index: number) => {
    addItem(next_item, index);
    onStatChange(stat_total);
  };

  const handleRemoveItem = (index: number) => {
    removeItem(index);
    onStatChange(stat_total);
  };

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
          items={items}
          onItemAdd={handleAddItem}
          onItemRemove={handleRemoveItem}
        />
      </Box>
    </Container>
  );
};
