import { FC, memo } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Tooltip,
  Typography,
} from "@mui/material";
import { CopyAllRounded, DeleteRounded } from "@mui/icons-material";

import { Food } from "../../assets";

type FoodListItemProps = {
  label: string;
  onCopy: () => void;
  onRemove: () => void;
};
const FoodListItem: FC<FoodListItemProps> = memo(
  (props) => {
    const { label, onCopy, onRemove } = props;
    return (
      <ListItem>
        <ListItemText>
          <Typography fontSize="large">{label}</Typography>
        </ListItemText>
        <ListItemSecondaryAction>
          <Tooltip
            placement="top"
            title={<Typography>Insert item below</Typography>}
          >
            <IconButton onClick={onCopy}>
              <CopyAllRounded />
            </IconButton>
          </Tooltip>
          <Tooltip
            placement="top"
            title={<Typography>Remove item</Typography>}
          >
            <IconButton onClick={onRemove}>
              <DeleteRounded />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>
    );
  },
  (prev, next) => {
    return prev.label === next.label;
  },
);

type FoodListProps = {
  items: Food[];
  onCopy: (item: Food, index: number) => void;
  onRemove: (index: number) => void;
};
export const FoodList: FC<FoodListProps> = (props) => {
  const { items, onCopy, onRemove } = props;

  return (
    <List dense disablePadding>
      <ListSubheader disableGutters>
        <Typography>{`${items.length}/10 items used`}</Typography>
      </ListSubheader>
      {items.map((item, item_index) => {
        return (
          <FoodListItem
            key={`${item.label}-${item_index}`}
            label={item.label}
            onCopy={() => {
              onCopy(item, item_index);
            }}
            onRemove={() => {
              onRemove(item_index);
            }}
          />
        );
      })}
    </List>
  );
};
