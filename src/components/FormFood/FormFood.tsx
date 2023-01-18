import {
  FC,
  useState,
  useCallback,
  useMemo,
  useEffect,
  useContext,
} from "react";
import { Box, Button, Stack } from "@mui/material";
import { AddRounded } from "@mui/icons-material";

import { Food, StatObject } from "../../assets";

import { AutocompleteFood } from "../AutocompleteFood";
import { FormBase } from "../FormBase";

import { FoodList } from "./FoodList";
import { loadFoods, saveFoods } from "./helper";
import { AppContext } from "../../contexts";

type FormFoodProps = {
  formStorageKey: string;
  onStatChange: (next_stat: StatObject) => void;
};
export const FormFood: FC<FormFoodProps> = (props) => {
  const { formStorageKey, onStatChange } = props;

  const { context } = useContext(AppContext);

  const [selected, setSelected] = useState<Food | null>(null);
  const [foods, setFoods] = useState((): Food[] => {
    return loadFoods(`${formStorageKey}-items`);
  });
  useEffect(() => {
    saveFoods(`${formStorageKey}-items`, foods);
  }, [foods]);

  const handleAdd = useCallback(() => {
    if (selected === null) {
      return;
    }
    setFoods((prev) => {
      const next = [...prev];
      if (next.length >= Food.MAX_ITEM) {
        next.pop();
      }
      next.splice(0, 0, selected);
      return next;
    });
    setSelected(null);
  }, [selected]);
  const handleCopy = useCallback(
    (next_food: Food, food_index: number) => {
      setFoods((prev) => {
        if (food_index < 0 || food_index >= prev.length) {
          return prev;
        }
        const next = [...prev];
        if (next.length >= Food.MAX_ITEM) {
          next.pop();
        }
        next.splice(food_index, 0, next_food);
        return next;
      });
    },
    [],
  );
  const handleRemove = useCallback((food_index: number) => {
    setFoods((prev) => {
      if (food_index < 0 || food_index >= prev.length) {
        return prev;
      }
      const next = [...prev];
      next.splice(food_index, 1);
      return next;
    });
  }, []);

  const stat_total = useMemo((): StatObject => {
    return Food.getStatObject(context, foods);
  }, [context, foods]);

  useEffect(() => {
    onStatChange(stat_total);
  }, [stat_total]);

  return (
    <FormBase
      cardTitle="Food"
      slotCardHeaderAvatar={null}
      slotCardHeaderAction={null}
      slotCardContent={
        <Stack spacing={2}>
          <Stack direction="row" spacing={1}>
            <Box width={1}>
              <AutocompleteFood
                food={selected}
                onFoodChange={setSelected}
              />
            </Box>
            <Button
              disableElevation
              variant="contained"
              disabled={selected === null}
              startIcon={<AddRounded />}
              onClick={handleAdd}
            >
              add
            </Button>
          </Stack>
          <FoodList
            foods={foods}
            onCopy={handleCopy}
            onRemove={handleRemove}
          />
        </Stack>
      }
    />
  );
};
