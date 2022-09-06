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

interface EffectItemProps {}
const EffectItem: FC<EffectItemProps> = (props) => {
  return (
    <ListItem dense disablePadding>
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

interface EffectDisplayProps {}
const EffectDisplay: FC<EffectDisplayProps> = (props) => {
  return (
    <Box>
      <List>
        <EffectItem />
        <EffectItem />
        <EffectItem />
        <EffectItem />
        <EffectItem />
      </List>
    </Box>
  );
};

export default EffectDisplay;
