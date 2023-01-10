import { FC } from "react";
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
import {
  CopyAll,
  CopyAllRounded,
  Delete,
  DeleteRounded,
} from "@mui/icons-material";

import { Food } from "../../assets";

type CustomListItemProps = {
  label: string;
  onCopy: () => void;
  onRemove: () => void;
};
const CustomListItem: FC<CustomListItemProps> = (props) => {
  const { label, onCopy, onRemove } = props;
  return (
    <ListItem>
      <ListItemText
        primary={label}
        primaryTypographyProps={{ fontSize: "large" }}
      />
      <ListItemSecondaryAction>
        <Tooltip
          placement="top"
          title={<Typography>Insert item below</Typography>}
        >
          <span>
            <IconButton onClick={onCopy}>
              <CopyAllRounded />
            </IconButton>
          </span>
        </Tooltip>
        <Tooltip
          placement="top"
          title={<Typography>Remove item</Typography>}
        >
          <span>
            <IconButton onClick={onRemove}>
              <DeleteRounded />
            </IconButton>
          </span>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

type CustomListProps = {
  items: Food[];
  onCopy: (item: Food, index: number) => void;
  onRemove: (index: number) => void;
};
export const CustomList: FC<CustomListProps> = (props) => {
  const { items, onCopy, onRemove } = props;

  return (
    <List
      subheader={
        <ListSubheader disableGutters>
          <Typography>{`${items.length}/10 items used`}</Typography>
        </ListSubheader>
      }
    >
      {items.map((item, index) => {
        return (
          <CustomListItem
            key={`${item.label}-${index}`}
            label={item.label}
            onCopy={() => {
              onCopy(item, index);
            }}
            onRemove={() => {
              onRemove(index);
            }}
          />
        );
      })}
    </List>
  );
};
