import { FC } from "react";
import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import { CopyAll, Delete } from "@mui/icons-material";

import { Food } from "../../assets";

type CustomItemProps = {
  item: Food;
  onCopy: () => void;
  onRemove: () => void;
};
const CustomItem: FC<CustomItemProps> = (props) => {
  const { item } = props;

  return (
    <ListItem>
      <ListItemText>
        <Typography fontSize="large">{item.label}</Typography>
      </ListItemText>
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

export default CustomItem;
