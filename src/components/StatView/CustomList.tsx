import { FC, ReactNode } from "react";
import { List, ListSubheader, Typography } from "@mui/material";

type CustomListProps = {
  hidden: boolean;
  subheader: string;
  children: ReactNode | ReactNode[];
};
export const CustomList: FC<CustomListProps> = (props) => {
  const { hidden, children, subheader } = props;
  return (
    <List dense sx={{ display: hidden ? "none" : "block" }}>
      <ListSubheader disableGutters>
        <Typography>{subheader}</Typography>
      </ListSubheader>
      {children}
    </List>
  );
};
