import { FC, useMemo, useEffect } from "react";
import { Box, Container } from "@mui/material";

import { ActionContext, Food, StatObject } from "../../assets";
import { useFood } from "../../hooks";
import { FormFood } from "../../components";

type PageEditFoodProps = {
  storageKey: string;
  context: ActionContext;
};
export const PageEditFood: FC<PageEditFoodProps> = (props) => {
  const { context: ctx, storageKey } = props;

  const [items, onItemAdd, onItemRemove] = useFood(`${storageKey}-i`);

  const stat_total = useMemo(() => {
    return Food.getStatObject(ctx, items);
  }, [items, ctx]);

  useEffect(() => {
    localStorage.setItem(storageKey, StatObject.toString(stat_total));
  }, [stat_total]);

  return (
    <Container maxWidth="md">
      <Box margin={4}>
        <FormFood
          stat={stat_total}
          items={items}
          onItemAdd={onItemAdd}
          onItemRemove={onItemRemove}
        />
      </Box>
    </Container>
  );
};
