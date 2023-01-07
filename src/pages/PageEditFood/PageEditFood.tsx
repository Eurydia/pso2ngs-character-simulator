import { FC, useMemo, useEffect } from "react";
import { Box } from "@mui/material";

import { ActionContext, Food, StatObject } from "../../assets";
import { FormFood } from "../../components";
import { useFood } from "../../hooks";

type PageEditFoodProps = {
  storageKey: string;
  ctx: ActionContext;
};
export const PageEditFood: FC<PageEditFoodProps> = (props) => {
  const { ctx, storageKey } = props;

  const [items, onItemAdd, onItemRemove] = useFood(`${storageKey}-i`);

  const stat_total = useMemo(() => {
    return Food.getStatObject(ctx, items);
  }, [items, ctx]);

  useEffect(() => {
    localStorage.setItem(storageKey, StatObject.toString(stat_total));
  }, [stat_total]);

  return (
    <Box margin={4}>
      <FormFood
        stat={stat_total}
        items={items}
        onItemAdd={onItemAdd}
        onItemRemove={onItemRemove}
      />
    </Box>
  );
};
