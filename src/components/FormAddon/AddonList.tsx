import {
  Box,
  Checkbox,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { AddonSkill } from "../../assets";
import { FieldLevel } from "../FieldLevel";

type AddonListItemProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
};
const AddonListItem: FC<AddonListItemProps> = (props) => {
  const { label, value, onChange } = props;
  return (
    <ListItem dense disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <Checkbox checked />
        </ListItemIcon>
        <ListItemText>
          <Typography>{label}</Typography>
        </ListItemText>
      </ListItemButton>
      <ListItemSecondaryAction>
        <FieldLevel
          disabled={false}
          label="Level"
          value={value}
          valueMin={0}
          valueMax={AddonSkill.LEVEL_MAX}
          onChange={onChange}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};

type AddonListProps = {};
export const AddonList: FC<AddonListProps> = (props) => {
  return (
    <List dense>
      <AddonListItem />
    </List>
  );
};
