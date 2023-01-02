import { FC } from "react";
import { HTMLAttributes } from "react";
import { ListItemText, MenuItem } from "@mui/material";

import { Weapon } from "../../assets";

type CustomOptionProps = HTMLAttributes<HTMLLIElement> & {
  option: Weapon;
};
export const CustomOption: FC<CustomOptionProps> = (props) => {
  const { option, ...rest } = props;
  return (
    <MenuItem {...rest}>
      <ListItemText>{option.label}</ListItemText>
    </MenuItem>
  );
};
