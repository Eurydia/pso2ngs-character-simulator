import { FC, useState, Fragment, useCallback, memo } from "react";
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

import { Food, StatObject } from "../../assets";

import { AutocompleteFood } from "../AutocompleteFood";
import { FormBase } from "../FormBase";
import { StatView } from "../StatView";

import { FoodList } from "./FoodList";

type FormFoodProps = {
  stat: StatObject;
  foods: Food[];
  onFoodAdd: (next_food: Food, food_index: number) => void;
  onFoodRemove: (food_index: number) => void;
};
export const FormFood: FC<FormFoodProps> = (props) => {
  const { stat, foods, onFoodAdd, onFoodRemove } = props;

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const [selected, setSelected] = useState<Food | null>(null);

  const handleDialogClose = useCallback(() => {
    setDialogOpen(false);
  }, []);
  const handleDialogOpen = useCallback(() => {
    setDialogOpen(true);
  }, []);

  const handleAdd = useCallback(() => {
    if (selected === null) {
      return;
    }
    onFoodAdd(selected, 0);
    setSelected(null);
  }, [selected]);

  const handleCopy = useCallback((food: Food, food_index: number) => {
    onFoodAdd(food, food_index);
  }, []);

  const handleRemove = useCallback((food_index: number) => {
    onFoodRemove(food_index);
  }, []);

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
          <StatView stat={stat} maxHeight="" />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
