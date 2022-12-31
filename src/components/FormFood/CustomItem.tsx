import { FC, Fragment } from "react";
import {
  IconButton,
  ListItem,
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
    <ListItem
      secondaryAction={
        <Fragment>
          <IconButton onClick={props.onCopy}>
            <CopyAll />
          </IconButton>
          <IconButton onClick={props.onRemove}>
            <Delete />
          </IconButton>
        </Fragment>
      }
    >
      <ListItemText>
        <Typography fontSize="large">{item.label}</Typography>
      </ListItemText>
    </ListItem>
  );
};

export default CustomItem;
