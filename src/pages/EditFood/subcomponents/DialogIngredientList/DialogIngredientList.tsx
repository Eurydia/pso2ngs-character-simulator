import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Checkbox,
} from "@mui/material";
import { FC } from "react";

interface DialogIngredientListItemProps {}
const DialogIngredientListItem: FC<DialogIngredientListItemProps> = (
  props,
) => {
  return (
    <ListItem dense>
      <ListItemButton>
        <ListItemIcon>
          <Checkbox disableRipple />
        </ListItemIcon>
        <ListItemText secondary="crispy, meat, anti-cold">
          crispy meat
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

interface DialogIngredientListProps {}
const DialogIngredientList: FC<DialogIngredientListProps> = (
  props,
) => {
  return (
    <List
      subheader={
        <ListSubheader disableSticky>Pick one or more</ListSubheader>
      }
    >
      <DialogIngredientListItem />
      <DialogIngredientListItem />
      <DialogIngredientListItem />
      <DialogIngredientListItem />
      <DialogIngredientListItem />
      <DialogIngredientListItem />
      <DialogIngredientListItem />
      <DialogIngredientListItem />
      <DialogIngredientListItem />
      <DialogIngredientListItem />
      <DialogIngredientListItem />
    </List>
  );
};

export default DialogIngredientList;
