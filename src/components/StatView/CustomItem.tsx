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
    if (props.value === null) {
      return null;
    }

    return (
      <ListItem disablePadding dense>
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
