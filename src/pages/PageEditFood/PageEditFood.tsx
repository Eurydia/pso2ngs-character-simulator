import { Fragment, FC, useMemo, useEffect, useState } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
  Tooltip,
  Typography,
  Fab,
} from "@mui/material";

import { ActionContext, Food, StatObject } from "../../assets";
import { FormFood, StatView } from "../../components";
import { useFood } from "../../hooks";
import { Assignment } from "@mui/icons-material";

type PageEditFoodProps = {
  storageKey: string;
  ctx: ActionContext;
};
export const PageEditFood: FC<PageEditFoodProps> = (props) => {
  const { ctx, storageKey } = props;

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const [items, onItemAdd, onItemRemove] = useFood(`${storageKey}-i`);

  const stat_total = useMemo(() => {
    return Food.getStatObject(ctx, items);
  }, [items, ctx]);

  useEffect(() => {
    localStorage.setItem(storageKey, StatObject.toString(stat_total));
  }, [stat_total]);

  return (
    <Fragment>
      <Tooltip
        placement="top"
        title={<Typography>Open summary</Typography>}
      >
        <Fab
          onClick={handleDialogOpen}
          sx={{
            display: items.length === 0 ? "none" : "flex",
            position: "fixed",
            bottom: "24px",
            right: "24px",
          }}
        >
          <Assignment />
        </Fab>
      </Tooltip>
      <Box margin={4}>
        <FormFood
          stat={stat_total}
          items={items}
          onItemAdd={onItemAdd}
          onItemRemove={onItemRemove}
        />
      </Box>
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
        <DialogActions disableSpacing>
          <Button onClick={handleDialogClose}>close</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
