import { FC, ReactNode } from "react";
import { List, ListSubheader } from "@mui/material";

type StatProps = {
  subheader: string;
  children: ReactNode | ReactNode[];
};
const Stat: FC<StatProps> = (props) => {
  return (
    <List dense disablePadding>
      <ListSubheader disableGutters>{props.subheader}</ListSubheader>
      {props.children}
    </List>
  );
};

export default Stat;
