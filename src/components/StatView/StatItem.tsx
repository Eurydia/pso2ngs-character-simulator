import { FC, memo, ReactNode } from "react";
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
const StatItem: FC<StatItemProps> = memo(
  (props) => {
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
  },
  (prev, next) => {
    return prev.value === next.value;
  },
);

export default StatItem;
