import { FC, HTMLAttributes } from "react";
import { ListItemText, MenuItem } from "@mui/material";

import { Fixa } from "../../assets";

type OptionFixaProps = {
  LIProps: HTMLAttributes<HTMLLIElement>;
  option: Fixa;
};
export const OptionFixa: FC<OptionFixaProps> = (props) => {
  const { option, LIProps } = props;
  return (
    <MenuItem {...LIProps}>
      <ListItemText>{option.label}</ListItemText>
    </MenuItem>
  );
};
