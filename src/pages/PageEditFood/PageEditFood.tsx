import { FC } from "react";
import { Box, Container } from "@mui/material";

import { ActionContext, Food } from "../../assets";
import { FormFood } from "../../components";

type PageEditFoodProps = {
  context: ActionContext;
  values: Food[];
  onValueAdd: (index: number, item: Food) => void;
  onValueRemove: (index: number) => void;
};
export const PageEditFood: FC<PageEditFoodProps> = (props) => {
  const { context, values, onValueAdd, onValueRemove } = props;

  // const [items, onItemAdd, onItemRemove] = useFood(`${storageKey}-i`);

  const stat_total = Food.getStatObject(context, values);

  return (
    <Container maxWidth="md">
      <Box margin={4}>
        <FormFood
          stat={stat_total}
          items={values}
          onItemAdd={onValueAdd}
          onItemRemove={onValueRemove}
        />
      </Box>
    </Container>
  );
};
