import { FC, HTMLAttributes } from "react";
import { ListItemText, MenuItem } from "@mui/material";

type CustomOptionProps = {
  label: string;
  value: number;
};
export const CustomOption: FC<CustomOptionProps> = (props) => {
  return (
    <MenuItem>
      <ListItemText>{props.label}</ListItemText>
    </MenuItem>
  );
};
