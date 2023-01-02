import { FC, ReactNode } from "react";
import { List, ListSubheader, Typography } from "@mui/material";

type CustomListProps = {
  subheader: string;
  children: ReactNode | ReactNode[];
};
export const CustomList: FC<CustomListProps> = (props) => {
  const { children, subheader } = props;

  return (
    <List dense>
      <ListSubheader disableGutters>
        <Typography>{subheader}</Typography>
      </ListSubheader>
      {children}
    </List>
  );
};
