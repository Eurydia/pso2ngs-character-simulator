import { FC, ReactNode } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { parseAdd, parsePercent } from "./helper";

type StatListItemProps = {
  mode: "add" | "percent";
  value: number;
  label: ReactNode;
  icon?: ReactNode;
};
const StatListItem: FC<StatListItemProps> = (props) => {
  const parsed_value =
    props.mode === "add"
      ? parseAdd(props.value)
      : parsePercent(props.value);

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
          <Typography>{parsed_value}</Typography>
        </Stack>
      </ListItemText>
    </ListItem>
  );
};

export default StatListItem;
