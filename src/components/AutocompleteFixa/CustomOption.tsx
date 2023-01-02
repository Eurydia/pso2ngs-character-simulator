import { FC, HTMLAttributes } from "react";
import { ListItemText, MenuItem } from "@mui/material";

import { Fixa } from "../../assets";

type CustomOptionProps = HTMLAttributes<HTMLLIElement> & {
  option: Fixa;
};
export const CustomOption: FC<CustomOptionProps> = (props) => {
  const { option, ...rest } = props;
  return (
    <MenuItem {...rest}>
      <ListItemText>{option.label}</ListItemText>
    </MenuItem>
  );
};
