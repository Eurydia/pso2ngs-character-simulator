import { FC } from "react";
import { HTMLAttributes } from "react";
import { ListItemText, MenuItem } from "@mui/material";

import { Weapon } from "../../assets";

type OptionCharClassProps = {
  LIProps: HTMLAttributes<HTMLLIElement>;
  option: string;
};
export const OptionCharClass: FC<OptionCharClassProps> = (props) => {
  const { option, LIProps } = props;
  return (
    <MenuItem {...LIProps}>
      <ListItemText>{option}</ListItemText>
    </MenuItem>
  );
};
