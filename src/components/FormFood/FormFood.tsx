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

import { Food, StatObject } from "../../assets";

import { AutocompleteFood } from "../AutocompleteFood";
import { FormBase } from "../FormBase";
import { StatView } from "../StatView";

import { CustomList } from "./CustomList";

type FormFoodProps = {
  items: Food[];
  stat: StatObject;
  onItemAdd: (next_item: Food, index: number) => void;
  onItemRemove: (index: number) => void;
};
export const FormFood: FC<FormFoodProps> = (props) => {
  const { stat, items, onItemAdd, onItemRemove } = props;

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
                onClick={handleDialogOpen}
              >
                <BarChartRounded />
              </IconButton>
            </span>
          </Tooltip>
        }
        slotCardContent={
          <Stack spacing={2}>
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
                disabled={selected === null}
                startIcon={<AddRounded />}
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
        <DialogTitle>Food buff summary</DialogTitle>
        <DialogContent>
          <StatView stat={stat} maxHeight="" />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
