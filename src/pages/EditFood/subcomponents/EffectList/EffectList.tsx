import { FC } from "react";
import {
  alpha,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { KeyboardDoubleArrowUp } from "@mui/icons-material";

interface EffectListItemProps {}
const EffectListItem: FC<EffectListItemProps> = (props) => {
  return (
    <ListItem divider>
      <ListItemIcon>
        <KeyboardDoubleArrowUp />
      </ListItemIcon>
      <ListItemText secondary="9 in recipe">
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
  const { palette } = useTheme();

  return (
    <List
      dense
      disablePadding
      subheader={
        <ListSubheader disableSticky disableGutters>
          5 active effects
        </ListSubheader>
      }
    >
      <ListItem disablePadding>
        <ListItemText
          primaryTypographyProps={{
            fontStyle: "italic",
            color: alpha(palette.text.secondary, 0.6),
          }}
        >
          No active effect.
        </ListItemText>
      </ListItem>
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
