import { FC } from "react";
import { Box } from "@mui/material";

import { StatObject } from "../../assets";
import { FormFood } from "../../components";

type EditFoodProps = {
  onStatChange: (stat: StatObject) => void;
};
const EditFood: FC<EditFoodProps> = (props) => {
  const { onStatChange } = props;

  return (
    <Box margin={4}>
      <FormFood
        storage_key="page-food-item"
        onStatChange={onStatChange}
      />
    </Box>
  );
};

export default EditFood;
