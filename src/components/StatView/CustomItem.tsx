import { FC, memo, ReactNode } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

type CustomItemProps = {
  value: string | null;
  label: ReactNode;
  icon: ReactNode;
};
export const CustomItem: FC<CustomItemProps> = memo(
  (props) => {
    const hidden: boolean = props.value === null;

    return (
      <ListItem
        dense
        sx={{ paddingY: 0, display: hidden ? "none" : "" }}
      >
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
