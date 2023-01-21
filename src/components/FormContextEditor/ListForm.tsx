import { List, ListSubheader } from "@mui/material";
import { FC, ReactNode } from "react";

type ListFormProps = { label: string; children: ReactNode };
export const ListForm: FC<ListFormProps> = (props) => {
  const { label, children } = props;

  return (
    <List
      dense
      subheader={
        <ListSubheader disableGutters>{label}</ListSubheader>
      }
    >
      {children}
    </List>
  );
};
