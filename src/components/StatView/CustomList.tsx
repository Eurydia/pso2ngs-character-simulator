import { FC, ReactNode } from "react";
import { Box, List, ListSubheader, Typography } from "@mui/material";

type CustomListProps = {
  subheader: string;
  children: ReactNode | ReactNode[];
};
const CustomList: FC<CustomListProps> = (props) => {
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

export default CustomList;
