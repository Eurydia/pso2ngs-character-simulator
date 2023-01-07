import { FC, useState, useMemo } from "react";
import { Box, Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";

import { ActionContext, Food, StatObject } from "../../assets";

import { AutocompleteFood } from "../AutocompleteFood";

import { CustomList } from "./CustomList";
import { FormBase } from "../FormBase";
import { StatView } from "../StatView";

type FormFoodProps = {
  stat: StatObject;
  items: Food[];
  onItemAdd: (index: number, item: Food) => void;
  onItemRemove: (index: number) => void;
};
export const FormFood: FC<FormFoodProps> = (props) => {
  const { stat, items, onItemAdd, onItemRemove } = props;

  const [selected, setSelected] = useState<Food | null>(null);

  const handleAdd = () => {
    if (selected === null) {
      return;
    }
    onItemAdd(0, selected);
    setSelected(null);
  };

  const handleCopy = (index: number, item: Food) => {
    onItemAdd(index, item);
  };

  const handleRemove = (index: number) => {
    onItemRemove(index);
  };

  return (
    <FormBase
      title="Food"
      slotHeaderAction={null}
      slotPrimary={
        <Stack spacing={2}>
          <Stack direction="row" spacing={1}>
            <Button
              disableRipple
              disableElevation
              variant="contained"
              startIcon={<Add />}
              disabled={selected === null}
              onClick={handleAdd}
            >
              add
            </Button>
            <Box width={1}>
              <AutocompleteFood
                value={selected}
                onChange={setSelected}
                onEnterPress={handleAdd}
              />
            </Box>
          </Stack>
          <CustomList
            items={items}
            onCopy={handleCopy}
            onRemove={handleRemove}
          />
        </Stack>
      }
      slotSecondary={<StatView stat={stat} maxHeight="600px" />}
    />
  );
};
