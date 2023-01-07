import { FC } from "react";
import { Box } from "@mui/material";

import { ActionContext, Food } from "../../assets";
import { FormFood } from "../../components";
import { useFood } from "../../hooks";

type PageEditFoodProps = {
  ctx: ActionContext;
};
export const PageEditFood: FC<PageEditFoodProps> = (props) => {
  const { ctx } = props;

  const [items, onItemAdd, onItemRemove] = useFood("page-food-item");

  const stat = Food.getStatObject(ctx, items);

  return (
    <Box margin={4}>
      <FormFood
        stat={stat}
        items={items}
        onItemAdd={onItemAdd}
        onItemRemove={onItemRemove}
      />
    </Box>
  );
};
