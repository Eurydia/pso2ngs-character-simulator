import { FC } from "react";
import { HTMLAttributes } from "react";
import { ListItemText, MenuItem } from "@mui/material";
import { Unit } from "../../assets";

type OptionUnitProps = {
  LIProps: HTMLAttributes<HTMLLIElement>;
  option: Unit;
};
export const OptionUnit: FC<OptionUnitProps> = (props) => {
  const { option, LIProps } = props;
  return (
    <MenuItem {...LIProps}>
      <ListItemText>{option.label}</ListItemText>
    </MenuItem>
  );
};
