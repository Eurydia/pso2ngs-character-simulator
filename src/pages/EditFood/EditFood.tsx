import { FC } from "react";
import { Box, Fab } from "@mui/material";

import { StatObject } from "../../assets";
import { FormFood } from "../../components";
import { useFood } from "../../hooks";

type EditFoodProps = {
  onStatChange: (stat: StatObject) => void;
};
const EditFood: FC<EditFoodProps> = (props) => {
  const { onStatChange } = props;

  const [items, onItemAdd, onItemRemove] = useFood("page-food-item");

  return (
    <Box margin={4}>
      <FormFood
        items={items}
        onItemAdd={onItemAdd}
        onItemRemove={onItemRemove}
      />
    </Box>
  );
};

export default EditFood;
