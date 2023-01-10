import { FC, useState, Fragment } from "react";
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

import { CustomList } from "./CustomList";
import { FormBase } from "../FormBase";
import { StatView } from "../StatView";

type FormFoodProps = {
  context: ActionContext;
  items: Food[];
  onItemAdd: (next_item: Food, index: number) => void;
  onItemRemove: (index: number) => void;
};
export const FormFood: FC<FormFoodProps> = (props) => {
  const { context, items, onItemAdd, onItemRemove } = props;

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selected, setSelected] = useState<Food | null>(null);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };
  const handleAdd = () => {
    if (selected === null) {
      return;
    }
    onItemAdd(selected, 0);
    setSelected(null);
  };
  const handleCopy = (item: Food, index: number) => {
    onItemAdd(item, index);
  };
  const handleRemove = (index: number) => {
    onItemRemove(index);
  };

  const stat: StatObject = Food.getStatObject(context, items);

  return (
    <Fragment>
      <FormBase
        cardTitle="Food"
        slotCardHeaderAction={
          <Tooltip
            placement="top"
            title={<Typography>Open summary</Typography>}
          >
            <span>
              <IconButton
                size="large"
                color="primary"
                disabled={items.length === 0}
                onClick={handleDialogOpen}
              >
                <BarChartRounded />
              </IconButton>
            </span>
          </Tooltip>
        }
        slotCardContent={
          <Stack spacing={3}>
            <Stack direction="row" spacing={1}>
              <Box width={1}>
                <AutocompleteFood
                  value={selected}
                  onChange={setSelected}
                  onEnterPress={handleAdd}
                />
              </Box>
              <Button
                disableRipple
                disableElevation
                variant="contained"
                startIcon={<AddRounded />}
                disabled={selected === null}
                onClick={handleAdd}
              >
                add
              </Button>
            </Stack>
            <CustomList
              items={items}
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
        <DialogTitle>Stat summary</DialogTitle>
        <DialogContent>
          <StatView stat={stat} maxHeight="" />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
