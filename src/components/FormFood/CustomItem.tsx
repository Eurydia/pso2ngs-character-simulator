import { FC } from "react";
import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import { CopyAll, Delete } from "@mui/icons-material";

import { Food } from "../../assets";

type CustomItemProps = {
  label: string;
  onCopy: () => void;
  onRemove: () => void;
};
export const CustomItem: FC<CustomItemProps> = (props) => {
  const { label } = props;

  return (
    <ListItem>
      <ListItemText inset primary={label} />
      <ListItemSecondaryAction>
        <IconButton onClick={props.onCopy}>
          <CopyAll />
        </IconButton>
        <IconButton onClick={props.onRemove}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
