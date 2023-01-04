import { FC, useEffect, useState, useMemo } from "react";
import { Box, Button, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";

import { ActionContext, Food, StatObject } from "../../assets";
import { useFood } from "../../hooks";

import { AutocompleteFood } from "../AutocompleteFood";

import { CustomList } from "./CustomList";
import { createStat } from "./helper";
import { FormBase } from "../FormBase";
import { StatView } from "../StatView";

const CONTEXT: ActionContext = { location: { kvaris: true } };

type FormFoodProps = {
  storage_key: string;
  onStatChange: (stat: StatObject) => void;
};
export const FormFood: FC<FormFoodProps> = (props) => {
  const { onStatChange, storage_key } = props;

  const [items, addItem, removeItem] = useFood(storage_key);
  const [selected, setSelected] = useState<Food | null>(null);

  const handleAdd = () => {
    if (selected === null) {
      return;
    }
    addItem(0, selected);
    setSelected(null);
  };

  const handleCopy = (index: number, item: Food) => {
    addItem(index, item);
  };

  const handleRemove = (index: number) => {
    removeItem(index);
  };

  const stat = useMemo((): StatObject => {
    return createStat(CONTEXT, items);
  }, [items]);

  useEffect(() => {
    onStatChange(stat);
  }, [stat]);

  return (
    <FormBase
      title="Food"
      slot_secondary={<StatView stat={stat} maxHeight="600px" />}
    >
      <Stack spacing={2}>
        <Stack direction="row" spacing={1}>
          <Button
            disableRipple
            disableElevation
            disabled={selected === null}
            variant="contained"
            startIcon={<Add />}
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
    </FormBase>
  );
};
