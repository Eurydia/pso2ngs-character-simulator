import { FC, useContext, useEffect } from "react";
import { Box, Container } from "@mui/material";

import { Food, StatObject } from "../../assets";
import { FormFood } from "../../components";
import { useFood } from "../../hooks";
import { ContextAction } from "../../contexts";

type PageEditFoodProps = {
  isVisible: boolean;
  storageKey: string;
  onStatChange: (stat: StatObject) => void;
};
export const PageEditFood: FC<PageEditFoodProps> = (props) => {
  const { storageKey, onStatChange, isVisible } = props;

  const context = useContext(ContextAction);
  const [items, addItem, removeItem] = useFood(storageKey);

  const stat_total = Food.getStatObject(context, items);

  console.log("hi");

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
