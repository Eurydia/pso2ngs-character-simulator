import {
  FC,
  useState,
  Fragment,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { AddRounded, BarChartRounded } from "@mui/icons-material";

import { ActionContext, Food, StatObject } from "../../assets";

import { AutocompleteFood } from "../AutocompleteFood";
import { FormBase } from "../FormBase";
import { StatView } from "../StatView";

import { FoodList } from "./FoodList";
import { loadFoods } from "./helper";

type FormFoodProps = {
  // Dynamic props
  context: ActionContext;

  // Static props
  formStorageKey: string;

  onStatChange: (next_stat: StatObject) => void;
};
export const FormFood: FC<FormFoodProps> = (props) => {
  const { formStorageKey, context, onStatChange } = props;

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, []);
  const handleDialogOpen = useCallback(() => {
    setDialogOpen(true);
  }, []);

  const [selected, setSelected] = useState<Food | null>(null);
  const [foods, setFoods] = useState<Food[]>(() => {
    return loadFoods(formStorageKey);
  });
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
        slotCardHeaderAction={
          <Tooltip
            placement="top"
            title={<Typography>Open summary</Typography>}
          >
            <IconButton
              size="large"
              color="primary"
              onClick={handleDialogOpen}
            >
              <BarChartRounded />
            </IconButton>
          </Tooltip>
        }
        slotCardContent={
          <Stack spacing={2}>
            <Stack direction="row" spacing={1}>
              <Box width={1}>
                <AutocompleteFood
                  food={selected}
                  onFoodChange={setSelected}
                  onKeyEnterPress={handleAdd}
                />
              </Box>
              <Button
                disableRipple
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
        maxWidth="sm"
        open={dialogOpen}
        onClose={handleDialogClose}
      >
        <DialogTitle>Food buff summary</DialogTitle>
        <DialogContent>
          <StatView stat={stat_total} maxHeight="" />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
