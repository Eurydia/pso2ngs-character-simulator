import { FC, HTMLAttributes } from "react";
import { ListItemText, MenuItem } from "@mui/material";

type CustomOptionProps = HTMLAttributes<HTMLLIElement> & {
  option: string;
};
export const CustomOption: FC<CustomOptionProps> = (props) => {
  return (
    <MenuItem {...props}>
      <ListItemText>{props.option}</ListItemText>
    </MenuItem>
  );
};
