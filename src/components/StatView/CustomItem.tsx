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
const CustomItem: FC<CustomItemProps> = memo(
  (props) => {
    if (props.value === null) {
      return null;
    }

    return (
      <ListItem disablePadding>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontSize="large">{props.label}</Typography>
            <Typography fontSize="large">{props.value}</Typography>
          </Stack>
        </ListItemText>
      </ListItem>
    );
  },
  (prev, next) => {
    return prev.value === next.value;
  },
);

export default CustomItem;
