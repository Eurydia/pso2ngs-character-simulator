import { FC, useEffect } from "react";
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
  const { context, storageKey, onStatChange, isVisible } = props;

  const [items, addItem, removeItem] = useFood(storageKey);

  useEffect(() => {
    const stat = Food.getStatObject(context, items);
    onStatChange(stat);
  }, [context, items]);

  const handleAddItem = (next_item: Food, index: number) => {
    addItem(next_item, index);
  };

  const handleRemoveItem = (index: number) => {
    removeItem(index);
  };

  const stat_total = Food.getStatObject(context, items);

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
