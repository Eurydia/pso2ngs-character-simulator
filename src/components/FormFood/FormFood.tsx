import { Box, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Food, StatObject } from "../../assets";
import { useFood } from "../../hooks";

import AutocompleteFood from "../AutocompleteFood";

type FormFoodProps = {
  storage_key: string;
  onStatChange: (stat: StatObject) => void;
};
const FormFood: FC<FormFoodProps> = (props) => {
  const [items, addItem, removeItem] = useFood(props.storage_key);
  const [selected, setSelected] = useState<Food | null>(null);

  const handleAdd = () => {
    if (selected === null) {
      return;
    }

    addItem(selected);
    setSelected(null);
  };

  return (
    <Box>
      <Stack spacing={2}>
        <AutocompleteFood
          value={selected}
          onChange={setSelected}
          onAdd={handleAdd}
        />
        <Box>
          <Stack>
            {items.map((item, index) => {
              return (
                <Typography key={`${item.label}-${index}`}>
                  {item.label}
                </Typography>
              );
            })}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
export default FormFood;
