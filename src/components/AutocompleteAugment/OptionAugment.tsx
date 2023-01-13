import { FC, HTMLAttributes } from "react";
import { ListItemText, MenuItem } from "@mui/material";

import { Augment } from "../../assets";

type OptionAugmentProps = {
  option: Augment;
  LIProps: HTMLAttributes<HTMLLIElement>;
};
export const OptionAugment: FC<OptionAugmentProps> = (props) => {
  const { option, LIProps } = props;
  return (
    <MenuItem {...LIProps}>
      <ListItemText>{option.label}</ListItemText>
    </MenuItem>
  );
};
