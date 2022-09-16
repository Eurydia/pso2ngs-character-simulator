import { List, ListSubheader } from "@mui/material";
import { FC, ReactNode } from "react";

interface StatListProps {
  children: ReactNode;
  subheader?: string;
}
const StatList: FC<StatListProps> = (props) => {
  return (
    <List
      dense
      disablePadding
      subheader={
        <ListSubheader disableGutters disableSticky>
          {props.subheader}
        </ListSubheader>
      }
    >
      {props.children}
    </List>
  );
};

export default StatList;
