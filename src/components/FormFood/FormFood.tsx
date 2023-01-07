import { FC, useState, useMemo, Fragment } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Add, BarChart } from "@mui/icons-material";

import { Food, StatObject } from "../../assets";

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

  const [dialogOpen, setDialogOpen] = useState(false);

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
    <Fragment>
      <Card variant="outlined" sx={{ padding: 1 }}>
        <CardHeader
          title="Food"
          titleTypographyProps={{
            fontSize: "x-large",
            fontWeight: "bold",
          }}
          action={
            <Tooltip
              placement="top"
              title={<Typography>Open summary</Typography>}
            >
              <span>
                <IconButton
                  disabled={items.length === 0}
                  onClick={handleDialogOpen}
                >
                  <BarChart />
                </IconButton>
              </span>
            </Tooltip>
          }
        />
        <CardContent>
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
                startIcon={<Add />}
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
        </CardContent>
      </Card>
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
        <DialogActions disableSpacing>
          <Button onClick={handleDialogClose}>close</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
