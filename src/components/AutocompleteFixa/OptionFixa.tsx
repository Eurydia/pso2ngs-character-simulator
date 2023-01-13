import { FC, HTMLAttributes } from "react";
import { ListItemText, MenuItem } from "@mui/material";

import { Fixa } from "../../assets";

type OptionFixaProps = HTMLAttributes<HTMLLIElement> & {
  option: Fixa;
};
export const OptionFixa: FC<OptionFixaProps> = (props) => {
  const { option, ...rest } = props;
  return (
    <MenuItem {...rest}>
      <ListItemText>{option.label}</ListItemText>
    </MenuItem>
  );
};
