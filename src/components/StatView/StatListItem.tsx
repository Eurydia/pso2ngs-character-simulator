import { FC, memo, ReactNode } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

type StatListItemProps = {
  label: ReactNode;
  value: string | null;
  icon: ReactNode;
};
export const StatListItem: FC<StatListItemProps> = memo(
  (props) => {
    const hidden: boolean = props.value === null;
    return (
      <ListItem dense sx={{ display: hidden ? "none" : "" }}>
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
