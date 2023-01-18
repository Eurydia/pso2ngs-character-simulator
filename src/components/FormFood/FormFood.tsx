import {
  FC,
  useState,
  Fragment,
  useCallback,
  useMemo,
  useEffect,
  useContext,
} from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { AddRounded, BarChartRounded } from "@mui/icons-material";

import { Food, StatObject } from "../../assets";

import { AutocompleteFood } from "../AutocompleteFood";
import { FormBase } from "../FormBase";
import { StatView } from "../StatView";
import { IconButtonTooltip } from "../IconButtonTooltip";

import { FoodList } from "./FoodList";
import { loadFoods, saveFoods } from "./helper";
import { AppContext } from "../../contexts";

const STORAGE_KEY: string = "food-items";

type FormFoodProps = {
  onStatChange: (next_stat: StatObject) => void;
};
export const FormFood: FC<FormFoodProps> = (props) => {
  const { onStatChange } = props;

  const context = useContext(AppContext);

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogClose = useCallback((): void => {
    setDialogOpen(false);
  }, []);
  const handleDialogOpen = useCallback((): void => {
    setDialogOpen(true);
  }, []);

  const [selected, setSelected] = useState<Food | null>(null);
  const [foods, setFoods] = useState((): Food[] => {
    return loadFoods(STORAGE_KEY);
  });

  useEffect(() => {
    saveFoods(STORAGE_KEY, foods);
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
      if (food_index < 0 || food_index >= foods.length) {
        return;
      }
      setFoods((prev) => {
        const next = [...prev];
        if (next.length >= Food.MAX_ITEM) {
          next.pop();
        }
        next.splice(food_index, 0, next_food);
        return next;
      });
    },
    [foods],
  );
  const handleRemove = useCallback(
    (food_index: number) => {
      if (food_index < 0 || food_index >= foods.length) {
        return;
      }
      setFoods((prev) => {
        const next = [...prev];
        next.splice(food_index, 1);
        return next;
      });
    },
    [foods],
  );

  const stat_total = useMemo((): StatObject => {
    return Food.getStatObject(context, foods);
  }, [context, foods]);

  useEffect(() => {
    onStatChange(stat_total);
  }, [stat_total]);

  return (
    <Fragment>
      <FormBase
        cardTitle="Food"
        slotCardHeaderAvatar={null}
        slotCardHeaderAction={
          <IconButtonTooltip
            tooltipText="Open summary"
            icon={<BarChartRounded />}
            onClick={handleDialogOpen}
          />
        }
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
      <Dialog
        fullWidth
        keepMounted
        maxWidth="xs"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle>
          <Typography fontWeight="bold" fontSize="x-large">
            Food buff summary
          </Typography>
        </DialogTitle>
        <DialogContent>
          <StatView stat={stat_total} maxHeight="" />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
