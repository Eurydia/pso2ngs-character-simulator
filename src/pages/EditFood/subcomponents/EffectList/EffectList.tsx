import { FC } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";

interface EffectListItemProps {}
const EffectListItem: FC<EffectListItemProps> = (props) => {
  return (
    <ListItem
      dense
      disablePadding
      disableGutters
      divider
      alignItems="center"
    >
      <ListItemText inset secondary="9 in recipe">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography>Crispy</Typography>
          <Typography>+2.7%</Typography>
        </Stack>
      </ListItemText>
    </ListItem>
  );
};

interface EffectListProps {}
const EffectList: FC<EffectListProps> = (props) => {
  return (
    <List
      subheader={
        <ListSubheader disableSticky>5 effects active</ListSubheader>
      }
    >
      <EffectListItem />
      <EffectListItem />
      <EffectListItem />
      <EffectListItem />
      <EffectListItem />
      <EffectListItem />
      <EffectListItem />
      <EffectListItem />
      <EffectListItem />
    </List>
  );
};

export default EffectList;
