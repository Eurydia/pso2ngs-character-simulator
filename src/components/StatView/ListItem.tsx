import { FC, ReactNode } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

type StatListItemProps = {
  value: string;
  label: ReactNode;
  icon?: ReactNode;
};
const StatListItem: FC<StatListItemProps> = (props) => {
  let _icon: ReactNode = undefined;
  if (props.icon !== undefined) {
    _icon = <ListItemIcon>{props.icon}</ListItemIcon>;
  }

  return (
    <ListItem>
      {_icon}
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

export default StatListItem;
