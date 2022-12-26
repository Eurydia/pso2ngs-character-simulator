import { FC, ReactNode } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

type StatItemProps = {
  value: string | null;
  label: ReactNode;
  icon: ReactNode;
};
const StatItem: FC<StatItemProps> = (props) => {
  if (props.value === null) {
    return null;
  }

  return (
    <ListItem dense disableGutters>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>{props.label}</Typography>
          <Typography>{props.value}</Typography>
        </Stack>
      </ListItemText>
    </ListItem>
  );
};

export default StatItem;
